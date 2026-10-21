/**
 * AURA NUDE 暮光研色 - Core Interactive Logic & E-Commerce Features
 */

// Product Data Store
const PRODUCTS_DATA = [
  {
    id: 'prod-water-cream',
    name: '暮光修飾水凝霜（SPF30 PA+++）',
    category: 'base',
    tag: '熱銷 No.1 明星小奶瓶',
    price: 1280,
    rating: 4.9,
    reviewsCount: 528,
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    localImg: 'assets/images/product_water_cream.jpg',
    description: '輕盈如晨露的水感質地，融膚即現溫潤微光澤。添加 85% 養膚水感精華與物理防曬防護，敏弱肌全天候水潤不暗沉。',
    shades: [
      { name: '#01 象牙瓷白', color: '#F7E6DC', desc: '適合白皙至中偏白肌膚，提亮自然光感' },
      { name: '#02 自然裸米', color: '#E8D2C2', desc: '熱銷主力色，適合多數自然亞洲膚色，修飾泛紅' },
      { name: '#03 暖陽小麥', color: '#D5BAA6', desc: '適合健康陽光膚色，均勻透亮不泛灰' }
    ],
    features: ['SPF30 PA+++ 溫和物理防曬', '85% 積雪草植萃保濕精華', '無酒精・無人工香料・敏弱肌安心']
  },
  {
    id: 'prod-concealer-palette',
    name: '微光柔霧遮瑕盤',
    category: 'base',
    tag: '敏弱肌友善・不卡紋',
    price: 980,
    rating: 4.8,
    reviewsCount: 342,
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: '三色智慧膏體設計，針對亞洲女性常見黑眼圈、鼻翼泛紅與微瑕疵精準調色。注入角鯊烷高保濕分子，乾肌眼周也不卡細紋。',
    shades: [
      { name: '經典 3 色調和盤', color: '#DEBEA6', desc: '校色蜜桃（黑眼圈）+ 提亮光感 + 柔霧原生遮瑕' }
    ],
    features: ['三色調和自定義遮瑕度', '角鯊烷滋養成分，長效服貼', '防水防汗，維持全天輕透霧光']
  },
  {
    id: 'prod-vegan-lip-glaze',
    name: '原生氣色純素唇釉',
    category: 'lip',
    tag: '純素無殘忍・護唇透光',
    price: 680,
    rating: 4.9,
    reviewsCount: 416,
    img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    description: '注入植物性玻尿酸與有機荷荷巴油的養護型唇釉。輕抹瞬間撫平唇紋，綻放宛如天生飽滿的好氣色裸粉微光。',
    shades: [
      { name: '#N01 晨露裸杏', color: '#D99884', desc: '溫柔肉桂杏仁調，顯白氣質日常必備' },
      { name: '#N02 溫潤茶粉', color: '#D47E7A', desc: '知性烏龍烤奶粉，偽素顏氣色首選' },
      { name: '#N03 暮光肉桂', color: '#B85E53', desc: '微醺暖棕紅茶，提亮深邃知性感' }
    ],
    features: ['純素零殘忍配方認證', '有機荷荷巴油深度撫紋', '清爽不黏膩，微光澤感光影']
  },
  {
    id: 'prod-multi-cream-blush',
    name: '水感多用腮紅膏',
    category: 'cheek',
    tag: '唇頰眼多用・自然血色',
    price: 750,
    rating: 4.8,
    reviewsCount: 289,
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    description: '手指即可輕易暈染的多用腮紅霜。絲滑溶脂質地，彷彿肌膚自帶紅潤微醺晨光，一秒點亮氣色。',
    shades: [
      { name: '#B01 晨曦杏桃', color: '#E59B81', desc: '元氣微甜暖橘粉，百搭不挑膚' },
      { name: '#B02 暮色無花果', color: '#C86D74', desc: '復古溫柔乾燥玫瑰，沉穩高級微醺感' }
    ],
    features: ['一抹化水，完美融於原生肌底', '一盒搞定頰彩、唇部與眼影', '維生素E修護成分添加']
  }
];

// Shopping Cart State
let cart = [
  {
    id: 'prod-water-cream',
    shade: '#02 自然裸米',
    quantity: 1,
    name: '暮光修飾水凝霜（SPF30 PA+++）',
    price: 1280,
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
  }
];

let appliedDiscount = 0; // percentage, e.g. 0.1 for 10%
const FREE_SHIPPING_THRESHOLD = 1500;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts();
  renderCart();
  initTabInteractions();
  initShadeFinderQuiz();
  initModals();
  initNewsletter();
});

/* ==========================================================================
   Navbar & Navigation
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close when clicking nav links on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   Product Rendering & Filtering
   ========================================================================== */
function renderProducts(filterCategory = 'all') {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(product => {
    const defaultShade = product.shades[0].name;
    const swatchDots = product.shades.map((s, idx) => `
      <span 
        class="swatch-dot ${idx === 0 ? 'active' : ''}" 
        style="background-color: ${s.color};" 
        title="${s.name}"
        data-prod-id="${product.id}"
        data-shade-name="${s.name}"
        onclick="selectCardShade(this, '${product.id}', '${s.name}')"
      ></span>
    `).join('');

    return `
      <div class="product-card" data-prod-id="${product.id}">
        <div class="product-badge-wrap">
          <span class="product-tag">${product.tag}</span>
        </div>
        <div class="product-thumb-wrap">
          <img src="${product.img}" alt="${product.name}" loading="lazy" />
          <button class="quick-view-overlay-btn" onclick="openQuickView('${product.id}')">
            快速預覽 ✦
          </button>
        </div>
        <div class="product-details">
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span>${product.rating}</span>
            <span class="review-count">(${product.reviewsCount})</span>
          </div>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-subtitle">${product.description.substring(0, 48)}...</p>
          
          <div class="product-swatches">
            <span class="swatch-label">色號：</span>
            ${swatchDots}
            <span class="swatch-selected-name" id="selected-shade-${product.id}" style="font-size:0.75rem; color:#6B6560; margin-left:4px;">
              ${defaultShade}
            </span>
          </div>

          <div class="product-footer-row">
            <span class="product-price">NT$ ${product.price.toLocaleString()}</span>
            <button class="btn-add-cart" onclick="quickAddToCart('${product.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Swatch selector on product card
window.selectCardShade = function(el, prodId, shadeName) {
  const card = el.closest('.product-card');
  card.querySelectorAll('.swatch-dot').forEach(dot => dot.classList.remove('active'));
  el.classList.add('active');
  const nameSpan = document.getElementById(`selected-shade-${prodId}`);
  if (nameSpan) {
    nameSpan.innerText = shadeName;
  }
};

// Filter category pills
window.filterProducts = function(category, btnEl) {
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
  btnEl.classList.add('active');
  renderProducts(category);
};

/* ==========================================================================
   Shopping Cart Logic
   ========================================================================== */
function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartBadge = document.getElementById('cart-badge');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  const totalEl = document.getElementById('cart-total');
  const shippingStatusEl = document.getElementById('shipping-status-msg');
  const shippingBarEl = document.getElementById('shipping-bar-fill');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.innerText = totalItems;
  }

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-size:0.95rem; margin-bottom:12px;">您的購物袋是空的</p>
        <p style="font-size:0.8rem; color:#8C847C;">挑選一款適合敏弱肌的原生微光底妝吧！</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-title-row">
            <div>
              <h4 class="cart-item-name">${item.name}</h4>
              <span class="cart-item-shade">${item.shade}</span>
            </div>
            <button class="cart-item-del-btn" onclick="removeFromCart('${item.id}', '${item.shade}')" title="移除商品">✕</button>
          </div>
          <div class="cart-item-qty-row">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateItemQty('${item.id}', '${item.shade}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateItemQty('${item.id}', '${item.shade}', 1)">+</button>
            </div>
            <span class="cart-item-price">NT$ ${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Calculations
  const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(rawSubtotal * appliedDiscount);
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  if (subtotalEl) subtotalEl.innerText = `NT$ ${rawSubtotal.toLocaleString()}`;
  
  if (discountRowEl && discountValEl) {
    if (appliedDiscount > 0) {
      discountRowEl.style.display = 'flex';
      discountValEl.innerText = `- NT$ ${discountAmount.toLocaleString()} (${Math.round(appliedDiscount * 100)}% 折扣)`;
    } else {
      discountRowEl.style.display = 'none';
    }
  }

  if (totalEl) totalEl.innerText = `NT$ ${finalTotal.toLocaleString()}`;

  // Shipping Progress
  if (shippingStatusEl && shippingBarEl) {
    if (rawSubtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingStatusEl.innerHTML = `<span>恭喜！已達成 <strong>全館免運優惠</strong></span> <span>✦ 免運</span>`;
      shippingBarEl.style.width = '100%';
      shippingBarEl.style.background = '#5B8C67';
    } else {
      const diff = FREE_SHIPPING_THRESHOLD - rawSubtotal;
      const pct = Math.min(100, Math.round((rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingStatusEl.innerHTML = `<span>再購 <strong>NT$ ${diff.toLocaleString()}</strong> 即享全館免運</span> <span>${pct}%</span>`;
      shippingBarEl.style.width = `${pct}%`;
      shippingBarEl.style.background = 'linear-gradient(90deg, #967E6E, #C8B5A6)';
    }
  }
}

// Quick Add to Cart from Product Card
window.quickAddToCart = function(productId, customShade) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  let shadeToUse = customShade;
  if (!shadeToUse) {
    const selectedSpan = document.getElementById(`selected-shade-${productId}`);
    shadeToUse = selectedSpan ? selectedSpan.innerText.trim() : prod.shades[0].name;
  }

  const existing = cart.find(item => item.id === productId && item.shade === shadeToUse);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      shade: shadeToUse,
      price: prod.price,
      quantity: 1,
      img: prod.img
    });
  }

  renderCart();
  showToast(`已將「${prod.name} (${shadeToUse})」加入購物袋！`);
  openCartDrawer();
};

window.updateItemQty = function(id, shade, delta) {
  const item = cart.find(i => i.id === id && i.shade === shade);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id, shade);
  } else {
    renderCart();
  }
};

window.removeFromCart = function(id, shade) {
  cart = cart.filter(i => !(i.id === id && i.shade === shade));
  renderCart();
  showToast('已從購物袋中移除商品');
};

window.applyCoupon = function() {
  const input = document.getElementById('coupon-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'AURANEW10' || code === 'AURA10') {
    appliedDiscount = 0.1; // 10% off
    renderCart();
    showToast('✦ 優惠代碼已成功折抵 10%！');
  } else if (code === 'FREE') {
    appliedDiscount = 0.2;
    renderCart();
    showToast('✦ 專屬 VIP 折抵 20% 已套用！');
  } else {
    showToast('請輸入有效折扣碼（試試看：AURANEW10）');
  }
};

window.checkoutOrder = function() {
  if (cart.length === 0) {
    showToast('購物袋還是空的喔！');
    return;
  }
  showToast('✦ 正在為您導向安全結帳頁面...');
};

// Cart Drawer open/close
window.openCartDrawer = function() {
  document.getElementById('cart-drawer-overlay').classList.add('open');
};

window.closeCartDrawer = function() {
  document.getElementById('cart-drawer-overlay').classList.remove('open');
};

/* ==========================================================================
   Brand 4-Questions Interactive Section (Who, What, Why, How)
   ========================================================================== */
function initTabInteractions() {
  const tabButtons = document.querySelectorAll('.q-tab-btn');
  const panes = document.querySelectorAll('.q-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   Product Quick View Modal
   ========================================================================== */
window.openQuickView = function(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickview-modal-overlay');
  const content = document.getElementById('quickview-modal-content');
  if (!modal || !content) return;

  const shadeOptions = prod.shades.map((s, idx) => `
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.85rem; padding:8px 12px; border:1px solid #C8B5A6; border-radius:8px; background:#FAF7F2;">
      <input type="radio" name="qv-shade" value="${s.name}" ${idx === 0 ? 'checked' : ''}>
      <span style="width:14px; height:14px; border-radius:50%; background-color:${s.color}; display:inline-block; border:1px solid #AAA;"></span>
      <span>${s.name}</span>
    </label>
  `).join('');

  content.innerHTML = `
    <div class="quickview-grid">
      <div>
        <img class="quickview-img" src="${prod.img}" alt="${prod.name}" />
      </div>
      <div class="quickview-info">
        <span class="section-tag">${prod.tag}</span>
        <h2 class="qv-title">${prod.name}</h2>
        <div class="product-rating" style="margin-bottom:12px;">
          <span class="stars">★★★★★</span>
          <span>${prod.rating} 滿意度</span>
          <span class="review-count">(${prod.reviewsCount} 則真實評價)</span>
        </div>
        <div class="qv-price">NT$ ${prod.price.toLocaleString()}</div>
        <p class="qv-desc">${prod.description}</p>

        <div class="quickview-specs">
          <div style="font-weight:600; color:#333; margin-bottom:4px;">✦ 養膚特點：</div>
          ${prod.features.map(f => `<div style="display:flex; align-items:center; gap:6px;">✓ ${f}</div>`).join('')}
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:8px;">選擇規格色號：</label>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${shadeOptions}
          </div>
        </div>

        <button class="btn-primary" style="width:100%; justify-content:center;" onclick="addQuickViewToCart('${prod.id}')">
          加入購物袋 ✦ NT$ ${prod.price.toLocaleString()}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

window.addQuickViewToCart = function(prodId) {
  const selectedRadio = document.querySelector('input[name="qv-shade"]:checked');
  const shadeName = selectedRadio ? selectedRadio.value : null;
  quickAddToCart(prodId, shadeName);
  closeQuickView();
};

window.closeQuickView = function() {
  const modal = document.getElementById('quickview-modal-overlay');
  if (modal) modal.classList.remove('open');
};

/* ==========================================================================
   Interactive Shade Finder Quiz (30秒命定色號測驗)
   ========================================================================== */
let quizAnswers = {
  skinType: '',
  undertone: '',
  finish: ''
};

function initShadeFinderQuiz() {
  window.openShadeQuiz = function() {
    quizAnswers = { skinType: '', undertone: '', finish: '' };
    showQuizStep(1);
    document.getElementById('quiz-modal-overlay').classList.add('open');
  };

  window.closeShadeQuiz = function() {
    document.getElementById('quiz-modal-overlay').classList.remove('open');
  };
}

window.showQuizStep = function(stepNum) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const current = document.getElementById(`quiz-step-${stepNum}`);
  if (current) current.classList.add('active');
};

window.selectQuizOption = function(category, value, nextStep) {
  quizAnswers[category] = value;
  if (nextStep === 'result') {
    calculateQuizResult();
  } else {
    showQuizStep(nextStep);
  }
};

function calculateQuizResult() {
  const resultCard = document.getElementById('quiz-result-content');
  if (!resultCard) return;

  // Logic to recommend shade
  let recommendedShade = '#02 自然裸米';
  let desc = '柔霧微光修飾，完美平衡自然光澤與敏弱泛紅。';
  
  if (quizAnswers.undertone === 'fair') {
    recommendedShade = '#01 象牙瓷白';
    desc = '為白皙偏冷調肌膚注入明亮朝氣，宛若初醒般晨光淨透。';
  } else if (quizAnswers.undertone === 'warm') {
    recommendedShade = '#03 暖陽小麥';
    desc = '專為健康暖色肌調製，修飾暗沉，綻放立體原生暖金微光。';
  }

  resultCard.innerHTML = `
    <div class="quiz-result-card">
      <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80" alt="暮光修飾水凝霜" />
      <div style="font-size:0.75rem; letter-spacing:0.15em; color:#967E6E; font-weight:600; text-transform:uppercase; margin-bottom:4px;">YOUR MATCH</div>
      <h3 class="quiz-result-name">暮光修飾水凝霜（SPF30 PA+++）</h3>
      <div class="quiz-result-shade">${recommendedShade}</div>
      <p style="font-size:0.88rem; color:#6B6560; margin-bottom:20px; line-height:1.7;">
        ${desc}
      </p>
      <button class="btn-primary" style="width:100%; justify-content:center;" onclick="quickAddToCart('prod-water-cream', '${recommendedShade}'); closeShadeQuiz();">
        以測驗結果加入購物車 ✦ NT$ 1,280
      </button>
    </div>
  `;

  showQuizStep('result');
}

/* ==========================================================================
   Modals & Overlay Handlers
   ========================================================================== */
function initModals() {
  // Close modals on clicking overlay outside container
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        closeCartDrawer();
      }
    });
  }
}

/* ==========================================================================
   Newsletter & Toasts
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const email = input.value.trim();
      if (!email || !email.includes('@')) {
        showToast('請輸入正確的電子郵件信箱');
        return;
      }
      input.value = '';
      showToast('✦ 歡迎加入！首購9折折扣碼【AURANEW10】已寄送至信箱！');
    });
  }
}

let toastTimer = null;
window.showToast = function(msg) {
  const toast = document.getElementById('toast-notice');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.innerText = msg;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
};

// Search modal toggle
window.openSearchModal = function() {
  showToast('✦ 搜尋功能：熱門搜尋「水凝霜」、「低敏遮瑕」、「唇頰兩用」');
};
