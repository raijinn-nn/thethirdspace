/**
 * THE THIRD SPACE - CLIENT DATA LAYER & SUPABASE INTEGRATION
 */


const SUPABASE_CONFIG = {
    url: "https://todhsaeexjllidimvfbt.supabase.co",
    anonKey: "sb_publishable_upYHwtDpJYoRnhPeiVWOSw_uyhs_8Kb"
};

const SEED_DATA = {
    products: [
        { id: 1, name: 'Hot Americano', category: 'Coffees', description: 'Rich double espresso diluted with hot water for a smooth, deep flavor.', price: 120.00, image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80', is_available: true },
        { id: 2, name: 'Iced Latte', category: 'Coffees', description: 'Craft espresso combined with cold fresh milk served over crystal clear ice.', price: 150.00, image_url: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80', is_available: true },
        { id: 3, name: 'Caramel Macchiato', category: 'Coffees', description: 'Steamed milk with vanilla syrup, marked with espresso and decadent caramel drizzle.', price: 170.00, image_url: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80', is_available: true },
        { id: 4, name: 'Spanish Latte', category: 'Coffees', description: 'Velvety espresso mixed with sweet condensed milk and fresh steamed milk.', price: 165.00, image_url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80', is_available: true },
        { id: 5, name: 'Matcha Latte', category: 'Tea & Matcha', description: 'Uji-sourced ceremonial grade green tea matcha with velvety milk.', price: 160.00, image_url: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', is_available: true },
        { id: 6, name: 'Chai Tea Latte', category: 'Tea & Matcha', description: 'Aromatic spiced black tea blended with warm cinnamon, cardamom and milk.', price: 155.00, image_url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80', is_available: true },
        { id: 7, name: 'Earl Grey Lavender', category: 'Tea & Matcha', description: 'Bergamot infused black tea with soothing dried lavender blossoms.', price: 140.00, image_url: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80', is_available: true },
        { id: 8, name: 'Mocha Frappe', category: 'Frappes', description: 'Chilled espresso blended with rich dark chocolate, cream, and crushed ice.', price: 180.00, image_url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', is_available: true },
        { id: 9, name: 'Vanilla Bean Frappe', category: 'Frappes', description: 'Creamy Madagascar vanilla bean blended ice drink topped with whipped cream.', price: 175.00, image_url: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80', is_available: true },
        { id: 10, name: 'Butter Croissant', category: 'Fresh Pastries', description: 'Golden, flaky, and buttery French pastry baked fresh every morning.', price: 95.00, image_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', is_available: true },
        { id: 11, name: 'Chocolate Chip Cookie', category: 'Fresh Pastries', description: 'Chewy giant cookie loaded with semi-sweet Belgian chocolate chunks.', price: 75.00, image_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80', is_available: true },
        { id: 12, name: 'Beef Tapa', category: 'Rice Meals', description: 'Tender marinated beef strips served with fragrant garlic fried rice and sunny-side-up egg.', price: 220.00, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', is_available: true },
        { id: 13, name: 'Chicken Tocino', category: 'Rice Meals', description: 'Sweet cured tender chicken cuts served with garlic rice and egg.', price: 195.00, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80', is_available: true }
    ],
    orders: [
        {
            id: 'ord-1001',
            order_number: 'TTS-1001',
            customer_name: 'Juan Dela Cruz',
            table_number: 'Table 4',
            order_type: 'dine-in',
            items: [
                { id: 4, name: 'Spanish Latte', qty: 2, price: 165.00 },
                { id: 10, name: 'Butter Croissant', qty: 1, price: 95.00 }
            ],
            total_amount: 425.00,
            payment_method: 'online',
            payment_status: 'paid',
            loyalty_contact: '09171234567',
            status: 'preparing',
            notes: 'Less sugar on one of the lattes please',
            created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString()
        },
        {
            id: 'ord-1002',
            order_number: 'TTS-1002',
            customer_name: 'Maria Santos',
            table_number: 'Takeout',
            order_type: 'takeout',
            items: [
                { id: 5, name: 'Matcha Latte', qty: 1, price: 160.00 }
            ],
            total_amount: 160.00,
            payment_method: 'cash',
            payment_status: 'pending',
            loyalty_contact: 'maria@example.com',
            status: 'pending',
            notes: '',
            created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString()
        }
    ],
    reservations: [
        {
            id: 'res-101',
            customer_name: 'Carlos Reyes',
            email: 'carlos.reyes@email.com',
            phone: '09171234567',
            reservation_date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            reservation_time: '14:00',
            guests: 2,
            seating_area: 'Quiet Study Booth',
            special_requests: 'Near power outlet for laptop chargers',
            status: 'confirmed',
            created_at: new Date().toISOString()
        }
    ],
    messages: [
        {
            id: 'msg-201',
            name: 'David Lim',
            email: 'david.lim@email.com',
            subject: 'Host a private workshop',
            message: 'Hi! I would like to inquire about booking the mezzanine space for a 15-person design workshop next Saturday.',
            status: 'unread',
            created_at: new Date().toISOString()
        }
    ]
};


function initLocalStorage() {
    if (!localStorage.getItem('tts_products')) {
        localStorage.setItem('tts_products', JSON.stringify(SEED_DATA.products));
    }
    if (!localStorage.getItem('tts_orders')) {
        localStorage.setItem('tts_orders', JSON.stringify(SEED_DATA.orders));
    }
    if (!localStorage.getItem('tts_reservations')) {
        localStorage.setItem('tts_reservations', JSON.stringify(SEED_DATA.reservations));
    }
    if (!localStorage.getItem('tts_messages')) {
        localStorage.setItem('tts_messages', JSON.stringify(SEED_DATA.messages));
    }
}
initLocalStorage();


let directSupabase = null;
if (window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
    try {
        directSupabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        console.log('✅ Direct browser Supabase client active.');
    } catch (e) {
        console.warn('Browser Supabase init warning:', e);
    }
}


let backendAvailable = false;
async function detectBackend() {
    try {
        const res = await fetch('/api/health');
        if (res.ok) {
            backendAvailable = true;
            console.log('🚀 Connected to Node.js/Express backend.');
        }
    } catch {
        backendAvailable = false;
        console.log('💡 Running with client-side data layer.');
    }
}
detectBackend();

const LocalStore = {
    get: (key) => JSON.parse(localStorage.getItem('tts_' + key) || '[]'),
    set: (key, val) => localStorage.setItem('tts_' + key, JSON.stringify(val))
};

window.TTS_API = {
    // ----------------- PRODUCTS -----------------
    async getProducts() {
        if (backendAvailable) {
            try {
                const res = await fetch('/api/products');
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        if (directSupabase) {
            try {
                const { data, error } = await directSupabase.from('products').select('*').order('id', { ascending: true });
                if (!error && data) return data;
            } catch (e) { console.warn(e); }
        }
        return LocalStore.get('products');
    },

    async createProduct(product) {
        if (backendAvailable) {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            if (res.ok) return await res.json();
        }
        if (directSupabase) {
            const { data, error } = await directSupabase.from('products').insert([product]).select();
            if (!error && data) return data[0];
        }
        const products = LocalStore.get('products');
        const newItem = { id: Date.now(), ...product, created_at: new Date().toISOString() };
        products.push(newItem);
        LocalStore.set('products', products);
        return newItem;
    },

    async updateProduct(id, updates) {
        if (backendAvailable) {
            const res = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (res.ok) return await res.json();
        }
        if (directSupabase) {
            const { data, error } = await directSupabase.from('products').update(updates).eq('id', id).select();
            if (!error && data) return data[0];
        }
        const products = LocalStore.get('products');
        const idx = products.findIndex(p => String(p.id) === String(id));
        if (idx !== -1) {
            products[idx] = { ...products[idx], ...updates };
            LocalStore.set('products', products);
            return products[idx];
        }
        throw new Error('Product not found');
    },

    async deleteProduct(id) {
        if (backendAvailable) {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            if (res.ok) return true;
        }
        if (directSupabase) {
            const { error } = await directSupabase.from('products').delete().eq('id', id);
            if (!error) return true;
        }
        const products = LocalStore.get('products').filter(p => String(p.id) !== String(id));
        LocalStore.set('products', products);
        return true;
    },

    // ----------------- ORDERS -----------------
    async getOrders() {
        if (backendAvailable) {
            try {
                const res = await fetch('/api/orders');
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        if (directSupabase) {
            try {
                const { data, error } = await directSupabase.from('orders').select('*').order('created_at', { ascending: false });
                if (!error && data) return data;
            } catch (e) { console.warn(e); }
        }
        const orders = LocalStore.get('orders');
        return orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    },

    async getOrder(orderNumberOrId) {
        if (backendAvailable) {
            try {
                const res = await fetch(`/api/orders/${orderNumberOrId}`);
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        if (directSupabase) {
            try {
                const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(orderNumberOrId);
                let query = directSupabase.from('orders').select('*');
                if (isUuid) {
                    query = query.or(`order_number.ilike.${orderNumberOrId},id.eq.${orderNumberOrId}`);
                } else {
                    query = query.ilike('order_number', orderNumberOrId);
                }
                const { data, error } = await query.maybeSingle();
                if (!error && data) return data;
            } catch (e) { console.warn(e); }
        }
        const orders = LocalStore.get('orders');
        return orders.find(o => 
            o.order_number.toLowerCase() === orderNumberOrId.toLowerCase() || 
            String(o.id) === String(orderNumberOrId)
        ) || null;
    },

    async createOrder(order) {
        if (backendAvailable) {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            });
            if (res.ok) return await res.json();
        }
        const orderNumber = 'TTS-' + Math.floor(1000 + Math.random() * 9000);
        const newOrder = {
            id: 'ord-' + Date.now(),
            order_number: orderNumber,
            ...order,
            status: 'pending',
            created_at: new Date().toISOString()
        };

        if (directSupabase) {
            const { data, error } = await directSupabase.from('orders').insert([newOrder]).select();
            if (!error && data) return data[0];
        }

        const orders = LocalStore.get('orders');
        orders.unshift(newOrder);
        LocalStore.set('orders', orders);
        return newOrder;
    },

    async updateOrderStatus(id, status, payment_status) {
        const payload = { status };
        if (payment_status) payload.payment_status = payment_status;

        if (backendAvailable) {
            const res = await fetch(`/api/orders/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) return await res.json();
        }
        if (directSupabase) {
            const { data, error } = await directSupabase.from('orders').update(payload).eq('id', id).select();
            if (!error && data) return data[0];
        }
        const orders = LocalStore.get('orders');
        const idx = orders.findIndex(o => String(o.id) === String(id));
        if (idx !== -1) {
            orders[idx] = { ...orders[idx], ...payload };
            LocalStore.set('orders', orders);
            return orders[idx];
        }
        throw new Error('Order not found');
    },

    async deleteOrder(id) {
        if (backendAvailable) {
            const res = await fetch(`/api/orders/${id}`, { method: 'DELETE' });
            if (res.ok) return true;
        }
        if (directSupabase) {
            const { error } = await directSupabase.from('orders').delete().eq('id', id);
            if (!error) return true;
        }
        const orders = LocalStore.get('orders').filter(o => String(o.id) !== String(id));
        LocalStore.set('orders', orders);
        return true;
    },

    // ----------------- RESERVATIONS -----------------
    async getReservations() {
        if (backendAvailable) {
            try {
                const res = await fetch('/api/reservations');
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        if (directSupabase) {
            try {
                const { data, error } = await directSupabase.from('reservations').select('*').order('reservation_date', { ascending: true });
                if (!error && data) return data;
            } catch (e) { console.warn(e); }
        }
        return LocalStore.get('reservations');
    },

    async createReservation(resv) {
        if (backendAvailable) {
            const res = await fetch('/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resv)
            });
            if (res.ok) return await res.json();
        }
        const newResv = {
            id: 'res-' + Date.now(),
            ...resv,
            status: 'confirmed',
            created_at: new Date().toISOString()
        };
        if (directSupabase) {
            const { data, error } = await directSupabase.from('reservations').insert([newResv]).select();
            if (!error && data) return data[0];
        }
        const reservations = LocalStore.get('reservations');
        reservations.push(newResv);
        LocalStore.set('reservations', reservations);
        return newResv;
    },

    async updateReservationStatus(id, status) {
        if (backendAvailable) {
            const res = await fetch(`/api/reservations/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (res.ok) return await res.json();
        }
        if (directSupabase) {
            const { data, error } = await directSupabase.from('reservations').update({ status }).eq('id', id).select();
            if (!error && data) return data[0];
        }
        const list = LocalStore.get('reservations');
        const idx = list.findIndex(r => String(r.id) === String(id));
        if (idx !== -1) {
            list[idx].status = status;
            LocalStore.set('reservations', list);
            return list[idx];
        }
        throw new Error('Reservation not found');
    },

    async deleteReservation(id) {
        if (backendAvailable) {
            const res = await fetch(`/api/reservations/${id}`, { method: 'DELETE' });
            if (res.ok) return true;
        }
        if (directSupabase) {
            const { error } = await directSupabase.from('reservations').delete().eq('id', id);
            if (!error) return true;
        }
        const list = LocalStore.get('reservations').filter(r => String(r.id) !== String(id));
        LocalStore.set('reservations', list);
        return true;
    },

    // ----------------- MESSAGES -----------------
    async getMessages() {
        if (backendAvailable) {
            try {
                const res = await fetch('/api/messages');
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        if (directSupabase) {
            try {
                const { data, error } = await directSupabase.from('messages').select('*').order('created_at', { ascending: false });
                if (!error && data) return data;
            } catch (e) { console.warn(e); }
        }
        return LocalStore.get('messages');
    },

    async createMessage(msg) {
        if (backendAvailable) {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(msg)
            });
            if (res.ok) return await res.json();
        }
        const newMsg = {
            id: 'msg-' + Date.now(),
            ...msg,
            status: 'unread',
            created_at: new Date().toISOString()
        };
        if (directSupabase) {
            const { data, error } = await directSupabase.from('messages').insert([newMsg]).select();
            if (!error && data) return data[0];
        }
        const msgs = LocalStore.get('messages');
        msgs.unshift(newMsg);
        LocalStore.set('messages', msgs);
        return newMsg;
    },

    async updateMessageStatus(id, status) {
        if (backendAvailable) {
            const res = await fetch(`/api/messages/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (res.ok) return await res.json();
        }
        if (directSupabase) {
            const { data, error } = await directSupabase.from('messages').update({ status }).eq('id', id).select();
            if (!error && data) return data[0];
        }
        const msgs = LocalStore.get('messages');
        const idx = msgs.findIndex(m => String(m.id) === String(id));
        if (idx !== -1) {
            msgs[idx].status = status;
            LocalStore.set('messages', msgs);
            return msgs[idx];
        }
        throw new Error('Message not found');
    },

    async deleteMessage(id) {
        if (backendAvailable) {
            const res = await fetch(`/api/messages/${id}`, { method: 'DELETE' });
            if (res.ok) return true;
        }
        if (directSupabase) {
            const { error } = await directSupabase.from('messages').delete().eq('id', id);
            if (!error) return true;
        }
        const msgs = LocalStore.get('messages').filter(m => String(m.id) !== String(id));
        LocalStore.set('messages', msgs);
        return true;
    },

    // ----------------- SUMMARY STATS -----------------
    async getStats() {
        if (backendAvailable) {
            try {
                const res = await fetch('/api/stats');
                if (res.ok) return await res.json();
            } catch (e) { console.warn(e); }
        }
        const orders = await this.getOrders();
        const reservations = await this.getReservations();
        const messages = await this.getMessages();
        const products = await this.getProducts();

        const totalRevenue = orders
            .filter(o => o.status !== 'cancelled')
            .reduce((sum, o) => sum + Number(o.total_amount || 0), 0);
        const activeOrders = orders.filter(o => ['pending', 'preparing', 'ready'].includes(o.status)).length;

        return {
            totalRevenue,
            totalOrders: orders.length,
            activeOrders,
            totalReservations: reservations.length,
            totalMessages: messages.length,
            totalProducts: products.length
        };
    }
};

window.showToast = function(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-cozy-900 text-white px-6 py-3 rounded-full shadow-2xl z-[999] transition-all duration-300 translate-y-20 opacity-0 flex items-center space-x-3 text-sm font-medium';
        toast.innerHTML = `<span id="toast-icon"></span><span id="toast-msg"></span>`;
        document.body.appendChild(toast);
    }

    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.textContent = message;
    toastIcon.innerHTML = type === 'success' 
        ? '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
        : '<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>';

    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
};

