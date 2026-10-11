-- =========================================================================
-- THE THIRD SPACE - SUPABASE SQL SCHEMA
-- Course: ITS122P | Term Project | Full-Stack Web Application
-- Database: PostgreSQL (Supabase)
-- =========================================================================

-- 1. DROP EXISTING TABLES
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- 2. PRODUCTS TABLE
CREATE TABLE products (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ORDERS TABLE
CREATE TABLE orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL DEFAULT 'Valued Guest',
    table_number VARCHAR(50) DEFAULT 'Takeout',
    order_type VARCHAR(50) DEFAULT 'dine-in',
    items JSONB NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL CHECK (total_amount >= 0),
    payment_method VARCHAR(50) DEFAULT 'cash',
    payment_status VARCHAR(50) DEFAULT 'pending',
    loyalty_contact VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending', -- pending, preparing, ready, completed, cancelled
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RESERVATIONS TABLE
CREATE TABLE reservations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time VARCHAR(50) NOT NULL,
    guests INT NOT NULL DEFAULT 1 CHECK (guests > 0),
    seating_area VARCHAR(100) DEFAULT 'Standard Table',
    special_requests TEXT,
    status VARCHAR(50) DEFAULT 'confirmed', -- confirmed, seated, completed, cancelled
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. MESSAGES TABLE (CONTACT INQUIRIES)
CREATE TABLE messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread', -- unread, read, replied
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- SEED DATA (INITIAL PRODUCTS)
-- =========================================================================

INSERT INTO products (name, category, description, price, image_url, is_available) VALUES
-- Coffees
('Hot Americano', 'Coffees', 'Rich double espresso diluted with hot water for a smooth, deep flavor.', 120.00, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80', true),
('Iced Latte', 'Coffees', 'Craft espresso combined with cold fresh milk served over crystal clear ice.', 150.00, 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80', true),
('Caramel Macchiato', 'Coffees', 'Steamed milk with vanilla syrup, marked with espresso and decadent caramel drizzle.', 170.00, 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80', true),
('Spanish Latte', 'Coffees', 'Velvety espresso mixed with sweet condensed milk and fresh steamed milk.', 165.00, 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80', true),

-- Tea & Matcha
('Matcha Latte', 'Tea & Matcha', 'Uji-sourced ceremonial grade green tea matcha with velvety milk.', 160.00, 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', true),
('Chai Tea Latte', 'Tea & Matcha', 'Aromatic spiced black tea blended with warm cinnamon, cardamom and milk.', 155.00, 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80', true),
('Earl Grey Lavender', 'Tea & Matcha', 'Bergamot infused black tea with soothing dried lavender blossoms.', 140.00, 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80', true),

-- Frappes
('Mocha Frappe', 'Frappes', 'Chilled espresso blended with rich dark chocolate, cream, and crushed ice.', 180.00, 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', true),
('Vanilla Bean Frappe', 'Frappes', 'Creamy Madagascar vanilla bean blended ice drink topped with whipped cream.', 175.00, 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80', true),
('Matcha Cream Frappe', 'Frappes', 'Sweet matcha blended frozen drink topped with matcha dust.', 185.00, 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&q=80', true),

-- Fresh Pastries
('Butter Croissant', 'Fresh Pastries', 'Golden, flaky, and buttery French pastry baked fresh every morning.', 95.00, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', true),
('Chocolate Chip Cookie', 'Fresh Pastries', 'Chewy giant cookie loaded with semi-sweet Belgian chocolate chunks.', 75.00, 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80', true),
('Cinnamon Roll', 'Fresh Pastries', 'Warm cinnamon swirl pastry with cream cheese glaze.', 110.00, 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80', true),

-- Rice Meals
('Beef Tapa', 'Rice Meals', 'Tender marinated beef strips served with fragrant garlic fried rice and sunny-side-up egg.', 220.00, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', true),
('Chicken Tocino', 'Rice Meals', 'Sweet cured tender chicken cuts served with garlic rice and egg.', 195.00, 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80', true),
('Pork Sisig Bowl', 'Rice Meals', 'Crispy and savory minced pork with onions, chili, calamansi, and garlic rice.', 210.00, 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&q=80', true);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public read/write access for presentation/demonstration
CREATE POLICY "Public products read" ON products FOR SELECT USING (true);
CREATE POLICY "Public products write" ON products FOR ALL USING (true);

CREATE POLICY "Public orders read" ON orders FOR SELECT USING (true);
CREATE POLICY "Public orders write" ON orders FOR ALL USING (true);

CREATE POLICY "Public reservations read" ON reservations FOR SELECT USING (true);
CREATE POLICY "Public reservations write" ON reservations FOR ALL USING (true);

CREATE POLICY "Public messages read" ON messages FOR SELECT USING (true);
CREATE POLICY "Public messages write" ON messages FOR ALL USING (true);

