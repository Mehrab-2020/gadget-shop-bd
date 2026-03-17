const products = [
    { id: 1, name: "Fast Charger 20W", category: "chargers", price: 850, icon: "⚡" },
    { id: 2, name: "Fast Charger 33W", category: "chargers", price: 1200, icon: "🔌" },
    { id: 3, name: "TWS Pro Max", category: "tws", price: 2500, icon: "🎧" },
    { id: 4, name: "Bass Boost Earphones", category: "earphones", price: 450, icon: "🎵" }
];

let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Render
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-image">${p.icon}</div>
            <h3 style="margin-bottom:0.5rem">${p.name}</h3>
            <p style="color: #A0A0A0; margin-bottom:1.5rem">৳${p.price}</p>
            <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } 
    else { cart.push({ ...product, quantity: 1 }); }
    
    updateCart();
    document.getElementById('cartModal').classList.add('active');
}

function updateCart() {
    const itemsContainer = document.getElementById('cartItems');
    const totalEl = document.getElementById('totalAmount');
    const countEl = document.getElementById('cartCount');
    
    countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalEl.textContent = `৳${total}`;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        itemsContainer.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.5rem">
                <span>${item.name} x${item.quantity}</span>
                <span>৳${item.price * item.quantity}</span>
            </div>
        `).join('');
    }
}

// WhatsApp Checkout Logic
function handleCheckout() {
    if (cart.length === 0) return alert("Cart is empty!");

    const myNumber = "8801998421007"; // Your phone number
    let orderList = "New Order from Gadget Shop BD:%0A--------------------------%0A";
    
    cart.forEach(item => {
        orderList += `${item.name} x${item.quantity} - ৳${item.price * item.quantity}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderList += `--------------------------%0A*Total: ৳${total}*`;

    window.open(`https://wa.me/${myNumber}?text=${orderList}`, '_blank');
}

// Listeners
function setupEventListeners() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').classList.add('active');
    document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').classList.remove('active');
    document.getElementById('whatsappCheckout').onclick = handleCheckout;
}
