

CREATE DATABASE IF NOT EXISTS `thethirdspace` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `thethirdspace`;

-- 1. TABLE: products
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `price` DECIMAL(10,2) NOT NULL,
  `image_url` TEXT,
  `is_available` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. TABLE: orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` VARCHAR(64) PRIMARY KEY,
  `order_number` VARCHAR(50) UNIQUE NOT NULL,
  `customer_name` VARCHAR(255) NOT NULL DEFAULT 'Valued Guest',
  `table_number` VARCHAR(50) DEFAULT 'Takeout',
  `order_type` VARCHAR(50) DEFAULT 'dine-in',
  `items` JSON NOT NULL,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_method` VARCHAR(50) DEFAULT 'cash',
  `payment_status` VARCHAR(50) DEFAULT 'pending',
  `loyalty_contact` VARCHAR(255) NULL,
  `status` VARCHAR(50) DEFAULT 'pending',
  `notes` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. TABLE: reservations
DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `id` VARCHAR(64) PRIMARY KEY,
  `customer_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `reservation_date` DATE NOT NULL,
  `reservation_time` VARCHAR(50) NOT NULL,
  `guests` INT NOT NULL DEFAULT 1,
  `seating_area` VARCHAR(100) DEFAULT 'Standard Table',
  `special_requests` TEXT NULL,
  `status` VARCHAR(50) DEFAULT 'confirmed',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. TABLE: messages
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` VARCHAR(64) PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(50) DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`name`, `category`, `description`, `price`, `image_url`, `is_available`) VALUES
('Hot Americano', 'Coffees', 'Rich double espresso diluted with hot water for a smooth, deep flavor.', 120.00, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80', 1),
('Iced Latte', 'Coffees', 'Craft espresso combined with cold fresh milk served over crystal clear ice.', 150.00, 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80', 1),
('Caramel Macchiato', 'Coffees', 'Steamed milk with vanilla syrup, marked with espresso and decadent caramel drizzle.', 170.00, 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80', 1),
('Spanish Latte', 'Coffees', 'Velvety espresso mixed with sweet condensed milk and fresh steamed milk.', 165.00, 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80', 1),
('Matcha Latte', 'Tea & Matcha', 'Uji-sourced ceremonial grade green tea matcha with velvety milk.', 160.00, 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', 1),
('Chai Tea Latte', 'Tea & Matcha', 'Aromatic spiced black tea blended with warm cinnamon, cardamom and milk.', 155.00, 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80', 1),
('Earl Grey Lavender', 'Tea & Matcha', 'Bergamot infused black tea with soothing dried lavender blossoms.', 140.00, 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80', 1),
('Mocha Frappe', 'Frappes', 'Chilled espresso blended with rich dark chocolate, cream, and crushed ice.', 180.00, 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', 1),
('Vanilla Bean Frappe', 'Frappes', 'Creamy Madagascar vanilla bean blended ice drink topped with whipped cream.', 175.00, 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80', 1),
('Matcha Cream Frappe', 'Frappes', 'Sweet matcha blended frozen drink topped with matcha dust.', 185.00, 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&q=80', 1),
('Butter Croissant', 'Fresh Pastries', 'Golden, flaky, and buttery French pastry baked fresh every morning.', 95.00, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', 1),
('Chocolate Chip Cookie', 'Fresh Pastries', 'Chewy giant cookie loaded with semi-sweet Belgian chocolate chunks.', 75.00, 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80', 1),
('Cinnamon Roll', 'Fresh Pastries', 'Warm cinnamon swirl pastry with cream cheese glaze.', 110.00, 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80', 1),
('Beef Tapa', 'Rice Meals', 'Tender marinated beef strips served with fragrant garlic fried rice and sunny-side-up egg.', 220.00, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', 1),
('Chicken Tocino', 'Rice Meals', 'Sweet cured tender chicken cuts served with garlic rice and egg.', 195.00, 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80', 1),
('Pork Sisig Bowl', 'Rice Meals', 'Crispy and savory minced pork with onions, chili, calamansi, and garlic rice.', 210.00, 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&q=80', 1);

INSERT INTO `orders` (`id`, `order_number`, `customer_name`, `table_number`, `order_type`, `items`, `total_amount`, `payment_method`, `payment_status`, `status`) VALUES
('ord-001', 'TTS-1001', 'Juan Dela Cruz', 'Table 4', 'dine-in', '[{"name":"Spanish Latte","qty":2,"price":165.00},{"name":"Butter Croissant","qty":1,"price":95.00}]', 425.00, 'online', 'paid', 'preparing'),
('ord-002', 'TTS-1002', 'Maria Santos', 'Takeout', 'takeout', '[{"name":"Matcha Latte","qty":1,"price":160.00}]', 160.00, 'cash', 'pending', 'pending');

INSERT INTO `reservations` (`id`, `customer_name`, `email`, `phone`, `reservation_date`, `reservation_time`, `guests`, `seating_area`, `status`) VALUES
('res-001', 'Carlos Reyes', 'carlos.reyes@email.com', '09171234567', '2026-10-12', '14:00', 2, 'Quiet Study Booth', 'confirmed'),
('res-002', 'Alyssa Tan', 'alyssa.tan@email.com', '09289876543', '2026-10-13', '10:00', 4, 'Communal Workspace', 'confirmed');

INSERT INTO `messages` (`id`, `name`, `email`, `subject`, `message`, `status`) VALUES
('msg-001', 'David Lim', 'david.lim@email.com', 'Host a private workshop', 'Hi! I would like to inquire about booking the mezzanine space for a 15-person design workshop next Saturday.', 'unread');

