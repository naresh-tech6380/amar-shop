/* AMAR store app: catalog render, cart, WhatsApp checkout */
(function () {
  "use strict";
  const WA = "https://wa.me/" + SHOP.whatsapp;
  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  let activeCat = "All", query = "";
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem("amar_cart") || "{}"); } catch (e) { cart = {}; }
  const save = () => localStorage.setItem("amar_cart", JSON.stringify(cart));

  const $ = (id) => document.getElementById(id);
  const grid = $("grid"), catsEl = $("cats");

  /* ---------- catalog ---------- */
  function renderCats() {
    catsEl.innerHTML = "";
    CATEGORIES.forEach((c) => {
      const b = document.createElement("button");
      b.textContent = c;
      b.className = c === activeCat ? "active" : "";
      b.onclick = () => { activeCat = c; renderCats(); renderGrid(); };
      catsEl.appendChild(b);
    });
  }

  function cardImage(p, idx) {
    return `<div class="card-imgs" data-id="${p.id}">
      <img src="${p.images[idx]}" alt="${p.name}" loading="lazy">
      ${p.images.length > 1 ? `<div class="dots">${p.images.map((_, i) => `<i class="${i === idx ? "on" : ""}"></i>`).join("")}</div>` : ""}
    </div>`;
  }

  function renderGrid() {
    grid.innerHTML = "";
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter((p) =>
      (activeCat === "All" || p.category === activeCat) &&
      (!q || (p.name + " " + p.desc + " " + p.category).toLowerCase().includes(q))
    );
    $("empty").classList.toggle("hidden", list.length > 0);
    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      const variantOpts = p.variants.length > 1
        ? `<label class="variant">Size:
             <select data-varsel="${p.id}">${p.variants.map((v, i) => `<option value="${i}">${v.label} — ${fmt(v.price)}</option>`).join("")}</select>
           </label>` : "";
      const price = p.variants.length > 1 ? p.variants[0].price : p.variants[0].price;
      card.innerHTML = `
        ${cardImage(p, 0)}
        <div class="card-body">
          <span class="card-cat">${p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          ${variantOpts}
          <div class="card-row">
            <span class="price" data-price="${p.id}">${fmt(price)} <small>${p.unit}</small></span>
            <button class="add" data-add="${p.id}">Add +</button>
          </div>
        </div>`;
      // tap image cycles photos
      let ii = 0;
      const imgBox = card.querySelector(".card-imgs");
      if (p.images.length > 1) imgBox.addEventListener("click", () => {
        ii = (ii + 1) % p.images.length;
        imgBox.querySelector("img").src = p.images[ii];
        imgBox.querySelectorAll(".dots i").forEach((d, j) => d.classList.toggle("on", j === ii));
      });
      const sel = card.querySelector("[data-varsel]");
      if (sel) sel.addEventListener("change", () => {
        card.querySelector("[data-price]").innerHTML = `${fmt(p.variants[sel.value].price)} <small>${p.unit}</small>`;
      });
      card.querySelector("[data-add]").addEventListener("click", () => {
        const vi = sel ? +sel.value : 0;
        addToCart(p.id, vi);
      });
      grid.appendChild(card);
    });
  }

  /* ---------- cart ---------- */
  const key = (id, vi) => id + "|" + vi;
  function parseKey(k) {
    const [id, vi] = k.split("|");
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? { p, vi: +vi } : null;
  }
  function cartEntriesFixed() {
    const out = [];
    for (const k of Object.keys(cart)) {
      const parsed = parseKey(k);
      if (parsed && cart[k] > 0) out.push({ ...parsed, qty: cart[k], k });
    }
    return out;
  }
  function cartCount() { return cartEntriesFixed().reduce((s, e) => s + e.qty, 0); }
  function cartTotal() {
    return cartEntriesFixed().reduce((s, e) => s + e.qty * e.p.variants[e.vi].price, 0);
  }

  function addToCart(id, vi) {
    const k = key(id, vi);
    cart[k] = (cart[k] || 0) + 1;
    save(); renderCart();
    const p = PRODUCTS.find((x) => x.id === id);
    toast(`${p.name} added to cart`);
  }

  function renderCart() {
    $("cartCount").textContent = cartCount();
    $("drawerCount").textContent = cartCount() ? `(${cartCount()})` : "";
    const box = $("drawerItems");
    const entries = cartEntriesFixed();
    if (!entries.length) {
      box.innerHTML = `<div class="cart-empty">🛒<br>Your cart is empty.<br>Add some products to get started.</div>`;
    } else {
      box.innerHTML = "";
      entries.forEach((e) => {
        const v = e.p.variants[e.vi];
        const row = document.createElement("div");
        row.className = "ci";
        row.innerHTML = `
          <img src="${e.p.images[0]}" alt="${e.p.name}">
          <div>
            <div class="ci-name">${e.p.name}</div>
            <div class="ci-var">${v.label} · ${fmt(v.price)} ${e.p.unit}</div>
            <div class="qty">
              <button data-dec="${e.k}">−</button><b>${e.qty}</b><button data-inc="${e.k}">+</button>
            </div>
            <button class="ci-rm" data-rm="${e.k}">remove</button>
          </div>
          <div class="ci-price">${fmt(v.price * e.qty)}</div>`;
        box.appendChild(row);
      });
    }
    $("cartTotal").textContent = fmt(cartTotal());
    box.querySelectorAll("[data-inc]").forEach((b) => b.onclick = () => { cart[b.dataset.inc]++; save(); renderCart(); });
    box.querySelectorAll("[data-dec]").forEach((b) => b.onclick = () => {
      const k = b.dataset.dec; cart[k]--; if (cart[k] <= 0) delete cart[k]; save(); renderCart();
    });
    box.querySelectorAll("[data-rm]").forEach((b) => b.onclick = () => { delete cart[b.dataset.rm]; save(); renderCart(); });
  }

  let toastT;
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = "✓ " + msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- checkout ---------- */
  function checkout() {
    const entries = cartEntriesFixed();
    if (!entries.length) { toast("Your cart is empty"); return; }
    const name = $("custName").value.trim();
    const phone = $("custPhone").value.trim();
    const lines = entries.map((e, i) => {
      const v = e.p.variants[e.vi];
      return `${i + 1}. ${e.p.name} (${v.label}) x ${e.qty} — ${fmt(v.price * e.qty)}`;
    });
    let msg = `Hello ${SHOP.name}! I want to place an order:\n\n${lines.join("\n")}\n\nTotal: ${fmt(cartTotal())}`;
    if (name) msg += `\n\nName: ${name}`;
    if (phone) msg += `\nPhone: ${phone}`;
    window.open(WA + "?text=" + encodeURIComponent(msg), "_blank");
  }

  /* ---------- wire up ---------- */
  function openDrawer() { $("drawer").classList.remove("hidden"); $("overlay").classList.remove("hidden"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { $("drawer").classList.add("hidden"); $("overlay").classList.add("hidden"); document.body.style.overflow = ""; }
  $("cartOpen").onclick = openDrawer;
  $("cartClose").onclick = closeDrawer;
  $("overlay").onclick = closeDrawer;
  $("checkoutBtn").onclick = checkout;
  $("search").addEventListener("input", (e) => { query = e.target.value; renderGrid(); });

  const waHello = WA + "?text=" + encodeURIComponent(`Hello ${SHOP.name}! I have a question about your products.`);
  $("heroWa").href = waHello;
  $("waFloat").href = waHello;
  $("dirBtn").href = SHOP.mapsUrl;

  renderCats(); renderGrid(); renderCart();
})();
