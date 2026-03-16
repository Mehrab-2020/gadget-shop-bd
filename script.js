// Sample Products Data
const products = [
    // Chargers
    {
        id: 1,
        name: "Fast Charger 20W",
        category: "chargers",
        price: 850,
        icon: "⚡",
        description: "USB-C fast charging adapter",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Fast Charger 33W",
        category: "chargers",
        price: 1200,
        icon: "🔌",
        description: "Super fast charging technology",
        badge: "New"
    },
    {
        id: 3,
        name: "Wireless Charger 15W",
        category: "chargers",
        price: 1500,
        icon: "📱",
        description: "Qi wireless charging pad",
        badge: "Hot"
    },
    {
        id: 4,
        name: "Car Charger Dual USB",
        category: "chargers",
        price: 650,
        icon: "🚗",
        description: "Fast charging in your car",
        badge: ""
    },
    {
        id: 5,
        name: "Power Bank 10000mAh",
        category: "chargers",
        price: 1800,
        icon: "🔋",
        description: "Portable charging solution",
        badge: "Popular"
    },
    {
        id: 6,
        name: "GaN Charger 65W",
        category: "chargers",
        price: 2500,
        icon: "⚡",
        description: "Compact GaN technology",
        badge: "Premium"
    },
    
    // TWS Earbuds
    {
        id: 7,
        name: "TWS Pro Max",
        category: "tws",
        price: 2500,
        icon: "🎧",
        description: "Active noise cancellation",
        badge: "Premium"
    },
    {
        id: 8,
        name: "TWS AirPro",
        category: "tws",
        price: 1800,
        icon: "🎵",
        description: "Crystal clear audio quality",
        badge: "Popular"
    },
    {
        id: 9,
        name: "TWS Sport Buds",
        category: "tws",
        price: 1500,
        icon: "🏃",
        description: "Waterproof for workouts",
        badge: "New"
    },
    {
        id: 10,
        name: "TWS Mini",
        category: "tws",
        price: 1200,
        icon: "🎧",
        description: "Compact and portable",
        badge: ""
    },
    {
        id: 11,
        name: "TWS Gaming Buds",
        category: "tws",
        price: 2200,
        icon: "🎮",
        description: "Low latency gaming mode",
        badge: "Hot"
    },
    {
        id: 12,
        name: "TWS Elite",
        category: "tws",
        price: 3500,
        icon: "👑",
        description: "Premium audio experience",
        badge: "Premium"
    },
    
    // Wired Earphones
    {
        id: 13,
        name: "Bass Boost Earphones",
        category: "earphones",
        price: 450,
        icon: "🎵",
        description: "Deep bass response",
        badge: "Popular"
    },
    {
        id: 14,
        name: "Pro Audio Earphones",
        category: "earphones",
        price: 850,
        icon: "🎧",
        description: "Studio-quality sound",
        badge: "Hot"
    },
    {
        id: 15,
        name: "Type-C Earphones",
        category: "earphones",
        price: 650,
        icon: "🔌",
        description: "USB-C digital audio",
        badge: "New"
    },
    {
        id: 16,
        name: "Gaming Earphones",
        category: "earphones",
        price: 950,
        icon: "🎮",
        description: "Surround sound gaming",
        badge: ""
    },
    {
        id: 17,
        name: "Sports Earphones",
        category: "earphones",
        price: 550,
        icon: "🏃",
        description: "Secure fit for workouts",
        badge: ""
    },
    {
        id: 18,
        name: "Premium Earphones",
        category: "earphones",
        price: 1500,
        icon: "⭐",
        description: "Audiophile-grade quality",
        badge: "Premium"
    }
];

// Shopping Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// Render Products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <span style="font-size: 4rem;">${product.icon}</span>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">৳${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    saveCartToStorage();
    showCartNotification();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToStorage();
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalAmount = document.getElementById('totalAmount');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalAmount.textContent = '৳0';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `৳${total}`;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">৳${item.price} × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
}

// Cart Modal
function openCart() {
    document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

// Show notification when item added
function showCartNotification() {
    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('gadgetShopCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('gadgetShopCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const target = link.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Category Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            renderProducts(category);
        });
    });
    
    // Cart Modal
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    // Close cart when clicking outside
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            closeCart();
        }
    });
    
    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // In a real application, this would send to a server
        alert(`Thank you, ${name}! We've received your message and will contact you soon.`);
        
        // Reset form
        e.target.reset();
    });
    
    // Checkout
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Checkout - Total: ৳${total}\n\nIn a real application, this would redirect to payment processing.`);
    });
    
    // Smooth scroll for CTA button
    document.querySelector('.cta-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section-title, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
