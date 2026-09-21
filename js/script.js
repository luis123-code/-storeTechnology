// Variables globales
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const allInputSlider = document.querySelectorAll(".pagination-slider__item");
const allImgSlider = document.querySelectorAll(".slider-img");

// Datos de productos para el modal
const productsData = {
  // MÓVILES
  'iphone-13': {
    name: 'iPhone 13 Pro Max',
    price: 'S/5,999.99',
    image: './img/juegos/iphone.jpg',
    description: 'El iPhone 13 Pro Max presenta el sistema de cámara más avanzado nunca visto en un iPhone. Con un sensor de cámara principal más grande y nuevas tecnologías fotográficas, captura fotos increíbles incluso en condiciones de poca luz.',
    specs: ['Pantalla Super Retina XDR de 6.7"', 'Chip A15 Bionic', 'Cámara triple de 12MP', 'Batería de larga duración', '5G para velocidades ultrarrápidas', 'Ceramic Shield frontal']
  },
  'motorola-g200': {
    name: 'Motorola G200',
    price: 'S/4,999.99',
    image: './img/juegos/Motorola.jpg',
    description: 'El Motorola G200 combina potencia y diseño elegante. Con su pantalla de alta tasa de refresco y procesador de última generación, ofrece una experiencia fluida para gaming y multimedia.',
    specs: ['Pantalla LCD de 6.8" 144Hz', 'Snapdragon 888', 'Cámara triple de 108MP', 'Batería 5000mAh', 'Carga rápida 33W', 'Android 11']
  },
  'samsung-s22': {
    name: 'Samsung S22',
    price: 'S/4,999.99',
    image: './img/juegos/sansun.jpg',
    description: 'El Samsung Galaxy S22 redefine la fotografía móvil con su sistema de cámara revolucionario. Diseño compacto pero potente, perfecto para quienes buscan lo mejor en formato pocket.',
    specs: ['Pantalla Dynamic AMOLED 6.1"', 'Exynos 2200 / Snapdragon 8', 'Cámara triple de 50MP', 'Batería 3700mAh', 'Carga rápida 25W', 'IP68 resistente al agua']
  },
  'samsung-fold3': {
    name: 'Samsung Galaxy Z Fold3',
    price: 'S/5,999.99',
    image: './img/juegos/Samsung Galaxy Z Fold3.jpg',
    description: 'El Galaxy Z Fold3 es el futuro de los smartphones. Con su pantalla plegable innovadora, ofrece la versatilidad de un teléfono y la productividad de una tablet en un solo dispositivo.',
    specs: ['Pantalla plegable de 7.6"', 'Pantalla cubierta de 6.2"', 'Snapdragon 888', 'Cámara triple de 12MP', 'S Pen compatible', 'Batería 4400mAh']
  },
  'huawei-mate40': {
    name: 'Huawei Mate 40 Pro',
    price: 'S/4,999.99',
    image: './img/juegos/Huawei Mate 40 Pro.jpg',
    description: 'El Huawei Mate 40 Pro destaca por su diseño premium y sistema de cámara avanzado. Con el chip Kirin 9000, ofrece rendimiento excepcional y fotografía profesional.',
    specs: ['Pantalla OLED de 6.5"', 'Kirin 9000', 'Cámara triple de 50MP', 'Batería 4400mAh', 'Carga super rápida 66W', 'Huawei Mobile Services']
  },
  'huawei-p50': {
    name: 'Huawei P50 Pro',
    price: 'S/6,999.99',
    image: './img/juegos/Huawei P50 Pro.jpg',
    description: 'El Huawei P50 Pro presenta una revolución en fotografía móvil con su sistema de doble círculo. Diseño elegante y rendimiento de primera categoría.',
    specs: ['Pantalla OLED de 6.8"', 'Snapdragon 888', 'Cámara dual de 50MP', 'Batería 4360mAh', 'Carga rápida 66W', 'HarmonyOS']
  },
  'oppo-find': {
    name: 'OPPO Find X3 Pro',
    price: 'S/4,999.99',
    image: './img/juegos/OPPO Find X3 Pro.jpg',
    description: 'El OPPO Find X3 Pro presenta un sistema de cámara innovador con capacidad de microscopio. Diseño premium y rendimiento excepcional.',
    specs: ['Pantalla AMOLED 120Hz 6.7"', 'Snapdragon 888', 'Cámara cuádruple de 50MP', 'Batería 4500mAh', 'Carga súper rápida 65W', 'ColorOS 11.1']
  },
  'xiaomi-12': {
    name: 'Xiaomi 12',
    price: 'S/4,999.99',
    image: './img/juegos/Xiaomi 12.jpg',
    description: 'El Xiaomi 12 combina diseño compacto con potencia de gama alta. Perfecto para quienes buscan rendimiento en formato pocket.',
    specs: ['Pantalla AMOLED 120Hz 6.28"', 'Snapdragon 8 Gen 1', 'Cámara triple de 50MP', 'Batería 4500mAh', 'Carga rápida 67W', 'MIUI 13']
  },
  'oneplus-10': {
    name: 'OnePlus 10 Pro',
    price: 'S/7,999.99',
    image: './img/juegos/OnePlus 10 Pro.jpg',
    description: 'El OnePlus 10 Pro ofrece la experiencia OxygenOS más fluida con hardware de última generación y sistema de cámara Hasselblad.',
    specs: ['Pantalla AMOLED LTPO 120Hz 6.7"', 'Snapdragon 8 Gen 1', 'Cámara triple Hasselblad', 'Batería 5000mAh', 'Carga rápida 80W', 'OxygenOS 12']
  },
  'huawei-mate-x2': {
    name: 'Huawei Mate X2',
    price: 'S/7,999.99',
    image: './img/juegos/Huawei Mate X2.jpg',
    description: 'El Huawei Mate X2 es un smartphone plegable con diseño innovador hacia adentro. Ofrece experiencia de tablet y teléfono en un solo dispositivo.',
    specs: ['Pantalla plegable de 8"', 'Pantalla exterior de 6.45"', 'Kirin 9000', 'Cámara cuádruple de 50MP', 'Batería 4500mAh', 'HarmonyOS']
  },
  
  // JUEGOS
  'gta-v': {
    name: 'Grand Theft Auto V Premium Online Edition',
    price: 'S/49.99',
    image: './img/juegos/Grand Theft Auto V Premium Online Edition.jpg',
    description: 'GTA V es el mundo abierto más grande y detallado jamás creado. Disfruta de la historia criminal de Michael, Franklin y Trevor en Los Santos.',
    specs: ['Mundo abierto masivo', 'Modo Online incluido', 'Gráficos mejorados', 'Multijugador hasta 30 jugadores', 'Misiones variadas', 'Personalización extensa']
  },
  'minecraft': {
    name: 'Minecraft: Java Edition',
    price: 'S/59.99',
    image: './img/juegos/Minecraft Java Edition.jpg',
    description: 'Minecraft es el juego de construcción sandbox más popular del mundo. Crea, explora y sobrevive en un mundo de bloques infinito.',
    specs: ['Mundo infinito', 'Modo creativo y supervivencia', 'Multijugador servidores', 'Mods y texture packs', 'Actualizaciones constantes', 'Comunidad activa']
  },
  'dbz-kakarot': {
    name: 'Dragon Ball Z: Kakarot',
    price: 'S/99.99',
    image: './img/juegos/Dragon Ball Z Kakarot.jpg',
    description: 'Vive la historia de Goku y los Guerreros Z en este RPG de acción épico. Combate contra los villanos más icónicos de Dragon Ball.',
    specs: ['Historia canon de DBZ', 'Sistema de combate RPG', 'Exploración del mundo DBZ', 'Personajes jugables', 'Misiones secundarias', 'Gráficos cell-shading']
  },
  'fortnite': {
    name: 'Fortnite',
    price: 'Free',
    image: './img/juegos/Fortnite.jpg',
    description: 'Fortnite es el battle royale más popular del mundo. Construye, combate y sé el último en pie en este juego gratuito.',
    specs: ['Battle royale 100 jugadores', 'Sistema de construcción', 'Temporadas y eventos', 'Cross-platform', 'Personalización de skins', 'Competitivo profesional']
  },
  'dbz-fighterz': {
    name: 'Dragon Ball FighterZ',
    price: 'S/79.99',
    image: './img/juegos/Dragon Ball FighterZ.jpg',
    description: 'Dragon Ball FighterZ es un fighting game 2D con gráficos espectaculares estilo anime. Combate con tu equipo de 3 personajes.',
    specs: ['Combate 2D rápido', 'Gráficos estilo anime', 'Sistema de equipos 3v3', 'Personajes icónicos DB', 'Combos especiales', 'Online competitivo']
  },
  'dmc5': {
    name: 'Devil May Cry 5',
    price: 'S/79.99',
    image: './img/juegos/Devil May Cry 5.jpg',
    description: 'Devil May Cry 5 regresa con acción frenética y estilo incomparable. Controla a Dante, Nero y un nuevo misterioso personaje.',
    specs: ['Acción hack and slash', 'Combate estilizado', '3 personajes jugables', 'Jefe épicos', 'Gráficos RE Engine', 'Modo Sangre Dante']
  },
  'fifa-23': {
    name: 'FIFA 23',
    price: 'S/199.99',
    image: './img/juegos/FIFA 23.jpg',
    description: 'FIFA 23 ofrece la experiencia de fútbol más realista con HyperMotion2 y el World Cup masculino y femenino.',
    specs: ['HyperMotion2 technology', 'World Cup incluido', 'FUT Ultimate Team', 'Career Mode mejorado', 'Gráficos realistas', 'Licencias oficiales']
  },
  'nba-2k23': {
    name: 'NBA 2K23',
    price: 'S/199.99',
    image: './img/juegos/NBA 2K23.jpg',
    description: 'NBA 2K23 es el simulador de baloncesto más realista. Juega con tu equipo favorito y crea tu propia leyenda.',
    specs: ['Gráficos realistas', 'MyCareer mode', 'MyTeam cards', 'Jugadores actuales', 'Estadios auténticos', 'Gameplay mejorado']
  },
  'god-of-war': {
    name: 'God of War',
    price: 'S/79.99',
    image: './img/juegos/God of War.jpg',
    description: 'God of War continúa la historia de Kratos y su hijo Atreus en el mundo de la mitología nórdica. Una épica de padre e hijo.',
    specs: ['Historia emocionante', 'Combate brutal', 'Exploración del mundo nórdico', 'Jefes épicos', 'Personalización de equipo', '4K y HDR']
  },
  'kingdom-come': {
    name: 'Kingdom Come: Deliverance',
    price: 'S/199.99',
    image: './img/juegos/Kingdom Come Deliverance.jpg',
    description: 'Kingdom Come: Deliverance es un RPG de acción ambientado en la Bohemia del siglo XV. Historia realista y combate desafiante.',
    specs: ['Ambientación histórica', 'Combate realista', 'Mundo abierto detallado', 'Sistema de diálogo', 'Crianza de personaje', 'Misiones múltiples']
  }
};

// Función de notificaciones
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
    color: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
    font-weight: 600;
    max-width: 350px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Función del carrito
function addToCart(product) {
  const existingProduct = cart.find(item => item.name === product.name);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification(`${product.name} agregado al carrito`);
}

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  let cartBadge = document.querySelector('.cart-badge');
  
  if (!cartBadge) {
    const cartButton = document.createElement('button');
    cartButton.className = 'cart-button';
    cartButton.innerHTML = `
      <i class="fa-solid fa-shopping-cart"></i>
      <span class="cart-badge">${cartCount}</span>
    `;
    cartButton.style.cssText = `
      position: relative;
      background: var(--gradient-1);
      border: none;
      color: white;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.2rem;
      transition: var(--transition);
      box-shadow: var(--shadow-md);
    `;
    
    cartButton.addEventListener('click', showCartModal);
    
    const header = document.querySelector('.header');
    if (header) {
      header.appendChild(cartButton);
    }
    
    cartBadge = cartButton.querySelector('.cart-badge');
  } else {
    cartBadge.textContent = cartCount;
  }
  
  cartBadge.style.animation = 'pulse 0.3s ease';
  setTimeout(() => {
    cartBadge.style.animation = '';
  }, 300);
}

function showCartModal() {
  const modal = document.createElement('div');
  modal.className = 'cart-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;
  
  const modalContent = document.createElement('div');
  modalContent.className = 'cart-modal-content';
  modalContent.style.cssText = `
    background: var(--secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
    animation: slideUp 0.3s ease;
  `;
  
  let cartHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h2 style="margin: 0; color: var(--text-primary);">Tu Carrito</h2>
      <button class="close-modal" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-primary);">&times;</button>
    </div>
  `;
  
  if (cart.length === 0) {
    cartHTML += `
      <div style="text-align: center; padding: 3rem;">
        <i class="fa-solid fa-shopping-cart" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
        <p style="color: var(--text-secondary);">Tu carrito está vacío</p>
      </div>
    `;
  } else {
    let total = 0;
    cartHTML += '<div class="cart-items">';
    
    cart.forEach((item, index) => {
      const priceValue = parseFloat(item.price.replace('S/', '').replace(',', ''));
      const itemTotal = priceValue * item.quantity;
      total += itemTotal;
      cartHTML += `
        <div class="cart-item" style="display: flex; align-items: center; padding: 1rem; border-bottom: 1px solid var(--border); margin-bottom: 1rem;">
          <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary); font-size: 0.9rem;">${item.name}</h4>
            <p style="margin: 0; color: var(--accent); font-weight: 700;">${item.price} x ${item.quantity}</p>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button class="quantity-btn" data-index="${index}" data-action="decrease" style="background: var(--glass); border: 1px solid var(--border); width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-weight: bold; color: var(--text-primary);">-</button>
            <span style="font-weight: 600; color: var(--text-primary);">${item.quantity}</span>
            <button class="quantity-btn" data-index="${index}" data-action="increase" style="background: var(--accent); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-weight: bold;">+</button>
          </div>
        </div>
      `;
    });
    
    cartHTML += '</div>';
    cartHTML += `
      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <span style="font-size: 1.2rem; font-weight: 600; color: var(--text-primary);">Total:</span>
          <span style="font-size: 1.8rem; font-weight: 800; color: var(--accent);">S/ ${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn" style="width: 100%; padding: 1rem; background: var(--gradient-1); color: white; border: none; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: var(--transition);">
          Proceder al Pago
        </button>
      </div>
    `;
  }
  
  modalContent.innerHTML = cartHTML;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => modal.remove(), 300);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => modal.remove(), 300);
    }
  });
  
  modal.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index);
      const action = e.target.dataset.action;
      
      if (action === 'increase') {
        cart[index].quantity += 1;
      } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else if (action === 'decrease' && cart[index].quantity === 1) {
        cart.splice(index, 1);
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      modal.remove();
      showCartModal();
    });
  });
  
  const checkoutBtn = modal.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showNotification('¡Gracias por tu compra! Procesando pedido...', 'success');
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      modal.remove();
    });
  }
}

// Modal de producto
function openProductModal(productId) {
  const modal = document.getElementById('product-modal');
  const mainImage = document.getElementById('modal-main-image');
  const title = document.getElementById('modal-title');
  const price = document.getElementById('modal-price');
  const description = document.getElementById('modal-description-text');
  const specsList = document.getElementById('modal-specs-list');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Intentar obtener datos del producto
  let product = productsData[productId];
  
  // Si no está en la base de datos, obtener datos de la tarjeta clickeada
  if (!product) {
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (card) {
      // Primero intentar usar datos guardados en el elemento
      if (card.productData) {
        product = card.productData;
      } else {
        const cardImage = card.querySelector('.card__image');
        const cardTitle = card.querySelector('.card__title');
        const cardPrice = card.querySelector('.card__price');
        
        product = {
          name: cardTitle ? cardTitle.textContent : 'Producto',
          price: cardPrice ? cardPrice.textContent : 'Consultar',
          image: cardImage ? cardImage.src : '',
          description: 'Producto de alta calidad con especificaciones premium. Ideal para satisfacer tus necesidades tecnológicas.',
          specs: ['Alta calidad', 'Garantía incluida', 'Envío disponible', 'Soporte técnico', 'Producto certificado', 'Stock disponible']
        };
      }
    }
  }
  
  if (!product) return;
  
  // Ajustar ruta de imagen según la página actual
  let imagePath = product.image;
  if (imagePath.startsWith('./img/') && !window.location.pathname.endsWith('index.html')) {
    imagePath = imagePath.replace('./img/', '../img/');
  }
  
  mainImage.src = imagePath;
  mainImage.alt = product.name;
  title.textContent = product.name;
  price.textContent = product.price;
  description.textContent = product.description;
  
  specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
  
  // Configurar thumbnails
  thumbnails.forEach((thumb, index) => {
    const img = thumb.querySelector('img');
    img.src = imagePath;
    img.alt = product.name;
    
    // Remover event listeners anteriores
    const newThumb = thumb.cloneNode(true);
    thumb.parentNode.replaceChild(newThumb, thumb);
    
    newThumb.addEventListener('click', () => {
      document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
      newThumb.classList.add('active');
      mainImage.src = imagePath;
    });
  });
  
  // Activar primer thumbnail
  const updatedThumbnails = document.querySelectorAll('.thumbnail');
  if (updatedThumbnails.length > 0) {
    updatedThumbnails[0].classList.add('active');
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners del modal
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  
  // Funcionalidad del slider original
  if (allInputSlider.length > 0) {
    allInputSlider.forEach(function (element, i) {
      element.addEventListener("click", () => {
        allImgSlider.forEach(e => e.removeAttribute("style"));
        allInputSlider.forEach(e => e.removeAttribute("style"));
        element.style.background = "rgba(255, 255, 255, 0.8)";
        element.style.transform = "scale(1.15)";
        allImgSlider[i].style.opacity = "0";
      });
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu
  const btnMenu = document.getElementById('btn-menu');
  const btnClose = document.getElementById('btn-close');
  const navMenu = document.querySelector('.nav__menu');
  
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      navMenu.classList.add('active');
      document.body.classList.add('ov-hidden');
    });
  }
  
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
      document.body.classList.remove('ov-hidden');
    });
  }
  
  // Product cards click (para .card)
  const productCards = document.querySelectorAll('.card');
  productCards.forEach(card => {
    const button = card.querySelector('.card__button');
    
    // Asignar un ID único si no tiene uno
    if (!card.dataset.product) {
      const cardTitle = card.querySelector('.card__title');
      const cardPrice = card.querySelector('.card__price');
      const uniqueId = 'product-' + Math.random().toString(36).substr(2, 9);
      card.dataset.product = uniqueId;
      
      // Guardar datos en el elemento para uso posterior
      card.productData = {
        name: cardTitle ? cardTitle.textContent : 'Producto',
        price: cardPrice ? cardPrice.textContent : 'Consultar',
        image: card.querySelector('.card__image') ? card.querySelector('.card__image').src : ''
      };
    }
    
    if (button) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = card.dataset.product;
        if (productId) {
          openProductModal(productId);
        }
      });
    }
    
    card.addEventListener('click', () => {
      const productId = card.dataset.product;
      if (productId) {
        openProductModal(productId);
      }
    });
  });
  
  // Offer cards click (para .offer-card en ofertas.html)
  const offerCards = document.querySelectorAll('.offer-card');
  offerCards.forEach(card => {
    const button = card.querySelector('.offer-button');
    
    // Asignar un ID único si no tiene uno
    if (!card.dataset.product) {
      const cardTitle = card.querySelector('.offer-title');
      const cardPrice = card.querySelector('.offer-price');
      const cardImage = card.querySelector('.offer-image');
      const uniqueId = 'offer-' + Math.random().toString(36).substr(2, 9);
      card.dataset.product = uniqueId;
      
      // Guardar datos en el elemento para uso posterior
      card.productData = {
        name: cardTitle ? cardTitle.textContent : 'Producto',
        price: cardPrice ? cardPrice.textContent : 'Consultar',
        image: cardImage ? cardImage.src : ''
      };
    }
    
    if (button) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = card.dataset.product;
        if (productId) {
          openProductModal(productId);
        }
      });
    }
    
    card.addEventListener('click', () => {
      const productId = card.dataset.product;
      if (productId) {
        openProductModal(productId);
      }
    });
  });
  
  // Modal close
  const modalClose = document.querySelector('.modal-close');
  const productModal = document.getElementById('product-modal');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }
  
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }
  
  // Modal actions
  const addCartBtn = document.querySelector('.btn-add-cart');
  const buyNowBtn = document.querySelector('.btn-buy-now');
  
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      const title = document.getElementById('modal-title').textContent;
      const price = document.getElementById('modal-price').textContent;
      const image = document.getElementById('modal-main-image').src;
      
      addToCart({
        name: title,
        price: price,
        image: image
      });
      
      closeProductModal();
    });
  }
  
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const title = document.getElementById('modal-title').textContent;
      const price = document.getElementById('modal-price').textContent;
      const image = document.getElementById('modal-main-image').src;
      
      addToCart({
        name: title,
        price: price,
        image: image
      });
      
      closeProductModal();
      showCartModal();
    });
  }
  
  // Scroll animations
  initScrollAnimations();
});

// Scroll animations
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.scroll-reveal, .animate-fade-in-up');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('revealed');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };
  
  handleScrollAnimation();
  window.addEventListener('scroll', handleScrollAnimation);
}

// Agregar estilos CSS para animaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  
  .cart-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);