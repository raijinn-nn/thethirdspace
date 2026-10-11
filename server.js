// =========================================================================
// THE THIRD SPACE - EXPRESS.JS BACKEND SERVER
// Course: ITS122P | Full-Stack Web Application Term Project
// Front End (HTML/CSS/JS) -> Back End (Node.js/Express) -> Database (Supabase)
// =========================================================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase = null;
let isSupabaseConfigured = false;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your-project')) {
    try {
        supabase = createClient(supabaseUrl, supabaseKey);
        isSupabaseConfigured = true;
        console.log('✅ Supabase Client successfully initialized with cloud database:', supabaseUrl);
    } catch (err) {
        console.warn('⚠️ Supabase initialization failed, running in fallback mode:', err.message);
    }
} else {
    console.log('ℹ️ Supabase credentials not set in .env. Running with integrated fallback store for instant local testing.');
    console.log('👉 To connect to live Supabase, enter your SUPABASE_URL and SUPABASE_KEY in .env');
}

let memoryStore = {
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

app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        database: isSupabaseConfigured ? 'Supabase (PostgreSQL Cloud)' : 'Integrated Fallback Store',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stats', async (req, res) => {
    try {
        if (isSupabaseConfigured) {
            const [ordersRes, resvRes, msgRes, prodRes] = await Promise.all([
                supabase.from('orders').select('total_amount, status'),
                supabase.from('reservations').select('id, status'),
                supabase.from('messages').select('id, status'),
                supabase.from('products').select('id')
            ]);

            const orders = ordersRes.data || [];
            const reservations = resvRes.data || [];
            const messages = msgRes.data || [];
            const products = prodRes.data || [];

            const totalRevenue = orders
                .filter(o => o.status !== 'cancelled')
                .reduce((sum, o) => sum + Number(o.total_amount || 0), 0);
            
            const activeOrders = orders.filter(o => ['pending', 'preparing', 'ready'].includes(o.status)).length;

            return res.json({
                totalRevenue,
                totalOrders: orders.length,
                activeOrders,
                totalReservations: reservations.length,
                totalMessages: messages.length,
                totalProducts: products.length
            });
        }

        const totalRevenue = memoryStore.orders
            .filter(o => o.status !== 'cancelled')
            .reduce((sum, o) => sum + o.total_amount, 0);
        const activeOrders = memoryStore.orders.filter(o => ['pending', 'preparing', 'ready'].includes(o.status)).length;

        res.json({
            totalRevenue,
            totalOrders: memoryStore.orders.length,
            activeOrders,
            totalReservations: memoryStore.reservations.length,
            totalMessages: memoryStore.messages.length,
            totalProducts: memoryStore.products.length
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('products').select('*').order('id', { ascending: true });
            if (error) throw error;
            return res.json(data);
        }
        res.json(memoryStore.products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/products', async (req, res) => {
    try {
        const { name, category, description, price, image_url, is_available } = req.body;

        if (!name || !category || price === undefined || price === null) {
            return res.status(400).json({ error: 'Name, category, and price are required fields.' });
        }
        if (Number(price) < 0) {
            return res.status(400).json({ error: 'Price cannot be negative.' });
        }

        const newProduct = {
            name: name.trim(),
            category: category.trim(),
            description: description ? description.trim() : '',
            price: Number(price),
            image_url: image_url || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
            is_available: is_available !== undefined ? Boolean(is_available) : true
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('products').insert([newProduct]).select();
            if (error) throw error;
            return res.status(201).json(data[0]);
        }

        const created = { id: Date.now(), ...newProduct, created_at: new Date().toISOString() };
        memoryStore.products.push(created);
        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category, description, price, image_url, is_available } = req.body;

        if (price !== undefined && Number(price) < 0) {
            return res.status(400).json({ error: 'Price cannot be negative.' });
        }

        const updates = {};
        if (name !== undefined) updates.name = name.trim();
        if (category !== undefined) updates.category = category.trim();
        if (description !== undefined) updates.description = description.trim();
        if (price !== undefined) updates.price = Number(price);
        if (image_url !== undefined) updates.image_url = image_url;
        if (is_available !== undefined) updates.is_available = Boolean(is_available);

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('products').update(updates).eq('id', id).select();
            if (error) throw error;
            if (!data || data.length === 0) return res.status(404).json({ error: 'Product not found.' });
            return res.json(data[0]);
        }

        const index = memoryStore.products.findIndex(p => String(p.id) === String(id));
        if (index === -1) return res.status(404).json({ error: 'Product not found.' });

        memoryStore.products[index] = { ...memoryStore.products[index], ...updates };
        res.json(memoryStore.products[index]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isSupabaseConfigured) {
            const { error } = await supabase.from('products').delete().eq('id', id);
            if (error) throw error;
            return res.json({ message: 'Product deleted successfully.' });
        }

        const initialLength = memoryStore.products.length;
        memoryStore.products = memoryStore.products.filter(p => String(p.id) !== String(id));
        if (memoryStore.products.length === initialLength) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        res.json({ message: 'Product deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            return res.json(data);
        }
        const sorted = [...memoryStore.orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        res.json(sorted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/orders/:identifier', async (req, res) => {
    try {
        const { identifier } = req.params;
        if (isSupabaseConfigured) {
            const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(identifier);
            let query = supabase.from('orders').select('*');
            if (isUuid) {
                query = query.or(`order_number.ilike.${identifier},id.eq.${identifier}`);
            } else {
                query = query.ilike('order_number', identifier);
            }
            const { data, error } = await query.maybeSingle();
            if (error || !data) return res.status(404).json({ error: 'Order not found.' });
            return res.json(data);
        }

        const order = memoryStore.orders.find(o => 
            o.order_number.toLowerCase() === identifier.toLowerCase() || 
            String(o.id) === identifier
        );
        if (!order) return res.status(404).json({ error: 'Order not found.' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/orders', async (req, res) => {
    try {
        const { customer_name, table_number, order_type, items, payment_method, loyalty_contact, notes } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Order must contain at least one item.' });
        }

        const total_amount = items.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.qty || 1)), 0);
        if (total_amount <= 0) {
            return res.status(400).json({ error: 'Total order amount must be greater than zero.' });
        }

        const orderNumber = 'TTS-' + Math.floor(1000 + Math.random() * 9000);

        const newOrder = {
            order_number: orderNumber,
            customer_name: customer_name ? customer_name.trim() : 'Guest',
            table_number: table_number ? table_number.trim() : 'Takeout',
            order_type: order_type || 'dine-in',
            items: items,
            total_amount: Number(total_amount.toFixed(2)),
            payment_method: payment_method || 'cash',
            payment_status: payment_method === 'online' ? 'paid' : 'pending',
            loyalty_contact: loyalty_contact ? loyalty_contact.trim() : null,
            status: 'pending',
            notes: notes ? notes.trim() : ''
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('orders').insert([newOrder]).select();
            if (error) throw error;
            return res.status(201).json(data[0]);
        }

        const created = {
            id: 'ord-' + Date.now(),
            ...newOrder,
            created_at: new Date().toISOString()
        };
        memoryStore.orders.unshift(created);
        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/orders/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, payment_status } = req.body;

        const updates = {};
        if (status) updates.status = status;
        if (payment_status) updates.payment_status = payment_status;

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('orders').update(updates).eq('id', id).select();
            if (error) throw error;
            if (!data || data.length === 0) return res.status(404).json({ error: 'Order not found.' });
            return res.json(data[0]);
        }

        const index = memoryStore.orders.findIndex(o => String(o.id) === String(id));
        if (index === -1) return res.status(404).json({ error: 'Order not found.' });

        memoryStore.orders[index] = { ...memoryStore.orders[index], ...updates };
        res.json(memoryStore.orders[index]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isSupabaseConfigured) {
            const { error } = await supabase.from('orders').delete().eq('id', id);
            if (error) throw error;
            return res.json({ message: 'Order removed successfully.' });
        }

        const initLen = memoryStore.orders.length;
        memoryStore.orders = memoryStore.orders.filter(o => String(o.id) !== String(id));
        if (memoryStore.orders.length === initLen) return res.status(404).json({ error: 'Order not found.' });
        res.json({ message: 'Order removed successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/reservations', async (req, res) => {
    try {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('reservations').select('*').order('reservation_date', { ascending: true });
            if (error) throw error;
            return res.json(data);
        }
        res.json(memoryStore.reservations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/reservations', async (req, res) => {
    try {
        const { customer_name, email, phone, reservation_date, reservation_time, guests, seating_area, special_requests } = req.body;

        if (!customer_name || !email || !phone || !reservation_date || !reservation_time) {
            return res.status(400).json({ error: 'Customer name, email, phone, date, and time are required.' });
        }

        const guestCount = Number(guests) || 1;
        if (guestCount < 1) {
            return res.status(400).json({ error: 'Party size must be at least 1 guest.' });
        }

        const newReservation = {
            customer_name: customer_name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            reservation_date,
            reservation_time,
            guests: guestCount,
            seating_area: seating_area || 'Standard Table',
            special_requests: special_requests ? special_requests.trim() : '',
            status: 'confirmed'
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('reservations').insert([newReservation]).select();
            if (error) throw error;
            return res.status(201).json(data[0]);
        }

        const created = {
            id: 'res-' + Date.now(),
            ...newReservation,
            created_at: new Date().toISOString()
        };
        memoryStore.reservations.push(created);
        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/reservations/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('reservations').update({ status }).eq('id', id).select();
            if (error) throw error;
            if (!data || data.length === 0) return res.status(404).json({ error: 'Reservation not found.' });
            return res.json(data[0]);
        }

        const resv = memoryStore.reservations.find(r => String(r.id) === String(id));
        if (!resv) return res.status(404).json({ error: 'Reservation not found.' });
        resv.status = status;
        res.json(resv);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/reservations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isSupabaseConfigured) {
            const { error } = await supabase.from('reservations').delete().eq('id', id);
            if (error) throw error;
            return res.json({ message: 'Reservation cancelled successfully.' });
        }

        const len = memoryStore.reservations.length;
        memoryStore.reservations = memoryStore.reservations.filter(r => String(r.id) !== String(id));
        if (memoryStore.reservations.length === len) return res.status(404).json({ error: 'Reservation not found.' });
        res.json({ message: 'Reservation cancelled successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/messages', async (req, res) => {
    try {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            return res.json(data);
        }
        res.json(memoryStore.messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/messages', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Name, email, subject, and message are required.' });
        }

        const newMsg = {
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
            status: 'unread'
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('messages').insert([newMsg]).select();
            if (error) throw error;
            return res.status(201).json(data[0]);
        }

        const created = {
            id: 'msg-' + Date.now(),
            ...newMsg,
            created_at: new Date().toISOString()
        };
        memoryStore.messages.unshift(created);
        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/messages/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (isSupabaseConfigured) {
            const { data, error } = await supabase.from('messages').update({ status }).eq('id', id).select();
            if (error) throw error;
            return res.json(data[0]);
        }

        const msg = memoryStore.messages.find(m => String(m.id) === String(id));
        if (!msg) return res.status(404).json({ error: 'Message not found.' });
        msg.status = status;
        res.json(msg);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isSupabaseConfigured) {
            const { error } = await supabase.from('messages').delete().eq('id', id);
            if (error) throw error;
            return res.json({ message: 'Message deleted successfully.' });
        }

        const len = memoryStore.messages.length;
        memoryStore.messages = memoryStore.messages.filter(m => String(m.id) !== String(id));
        if (memoryStore.messages.length === len) return res.status(404).json({ error: 'Message not found.' });
        res.json({ message: 'Message deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`☕ The Third Space Full-Stack Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving client pages from: ${__dirname}`);
});

