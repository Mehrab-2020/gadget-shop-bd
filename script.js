const products = [
    { id: 1, name: "Fast Charger 20W", price: 850, icon: "⚡" },
    { id: 2, name: "TWS Wireless Buds", price: 2200, icon: "🎧" },
    { id: 3, name: "Premium USB-C Cable", price: 450, icon: "🔌" }
];

let cart = [];

// 1. Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// 2. Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div style="font-size: 3rem; text-align:center">${p.icon}</div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>৳${p.price}</p>
                <button class="cta-btn" onclick="addToCart(${p.id})" style="margin-top:1rem; width:100%; padding: 0.8rem">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// 3. Cart Logic
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    
    updateUI();
    document.getElementById('cartModal').classList.add('active');
}

function updateUI() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const cartCount = document.getElementById('cartCount');
    
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center">Empty Cart</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.5rem">
                <span>${item.name} x${item.quantity}</span>
                <span>৳${item.price * item.quantity}</span>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalAmount.textContent = `৳${total}`;
}

// 4. WhatsApp Checkout Feature
document.getElementById('whatsappBtn').addEventListener('click', () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const phone = "8801998421007"; // Your number
    let message = "Hello Gadget Shop BD! I want to order:%0A%0A";
    
    cart.forEach(item => {
        message += `• ${item.name} (x${item.quantity}) - ৳${item.price * item.quantity}%0A`;
    });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    message += `%0A*Total: ৳${total}*%0A%0APlease let me know the delivery process.`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').classList.add('active');
    document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').classList.remove('active');
});
