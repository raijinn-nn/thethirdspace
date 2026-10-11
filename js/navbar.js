/**
 * THE THIRD SPACE - SHARED NAVBAR & FOOTER
 */

function renderSharedNavAndFooter(activePage = '') {
    const navPlaceholder = document.getElementById('navbar-mount');
    const footerPlaceholder = document.getElementById('footer-mount');

    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
        <header class="sticky top-0 z-40 bg-cozy-50/90 backdrop-blur-md border-b border-cozy-200 shadow-sm transition-all">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
                <!-- Brand Logo -->
                <a href="index.html" class="flex items-center space-x-2.5 group">
                    <div class="w-10 h-10 rounded-xl bg-cozy-800 text-white flex items-center justify-center shadow-md group-hover:bg-cozy-900 transition-colors">
                        <i data-lucide="coffee" class="w-5 h-5 text-cozy-accent"></i>
                    </div>
                    <div>
                        <span class="font-serif text-2xl font-bold text-cozy-900 tracking-tight block leading-tight">the third space</span>
                        <span class="text-[10px] tracking-widest uppercase font-medium text-cozy-800/70 block">Cafe & Focus Studio</span>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
                    <a href="index.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'home' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">Home</a>
                    <a href="about.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'about' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">About Us</a>
                    <a href="menu.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'menu' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">Menu & Order</a>
                    <a href="reservation.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'reservation' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">Book Space</a>
                    <a href="orders.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'orders' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">Track Order</a>
                    <a href="contact.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'contact' ? 'text-cozy-900 bg-cozy-100 font-semibold' : 'text-cozy-800/80 hover:text-cozy-900 hover:bg-cozy-100/60'}">Contact</a>
                </nav>

                <!-- Actions: Cart Button & Admin Link -->
                <div class="flex items-center space-x-3">
                    <a href="menu.html" id="global-order-btn" class="hidden sm:inline-flex items-center space-x-2 bg-cozy-800 hover:bg-cozy-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow hover:shadow-md">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cozy-accent"></i>
                        <span>Order Now</span>
                    </a>

                    <!-- Mobile Menu Hamburger -->
                    <button id="mobile-menu-toggle" aria-label="Toggle navigation menu" class="md:hidden p-2 text-cozy-800 hover:bg-cozy-100 rounded-lg">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Drawer -->
            <div id="mobile-menu-drawer" class="hidden md:hidden border-t border-cozy-200 bg-cozy-50 px-4 pt-3 pb-6 space-y-2">
                <a href="index.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'home' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">Home</a>
                <a href="about.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'about' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">About Us</a>
                <a href="menu.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'menu' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">Menu & Order</a>
                <a href="reservation.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'reservation' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">Book Space</a>
                <a href="orders.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'orders' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">Track Order</a>
                <a href="contact.html" class="block px-3 py-2 rounded-lg text-base font-medium ${activePage === 'contact' ? 'bg-cozy-100 text-cozy-900 font-semibold' : 'text-cozy-800'}">Contact</a>
                <div class="pt-2 border-t border-cozy-200 flex justify-between items-center text-sm">
                    <a href="admin.html" class="text-xs text-cozy-800/70 hover:text-cozy-900 flex items-center">
                        <i data-lucide="lock" class="w-3.5 h-3.5 mr-1"></i> Staff Portal
                    </a>
                </div>
            </div>
        </header>
        `;

        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const drawer = document.getElementById('mobile-menu-drawer');
        if (toggleBtn && drawer) {
            toggleBtn.addEventListener('click', () => {
                drawer.classList.toggle('hidden');
            });
        }
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-cozy-900 text-cozy-200 py-12 px-4 border-t border-cozy-800 mt-auto">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <!-- Col 1 -->
                <div class="space-y-3">
                    <div class="flex items-center space-x-2">
                        <i data-lucide="coffee" class="text-cozy-accent w-6 h-6"></i>
                        <h4 class="font-serif text-xl font-bold text-white">the third space</h4>
                    </div>
                    <p class="text-xs text-cozy-100/70 leading-relaxed">
                        Your quiet sanctuary between home and work. Artisan hand-drip coffees, quiet study booths, fast Wi-Fi, and comforting food.
                    </p>
                    <div class="flex items-center space-x-3 text-cozy-accent pt-1">
                        <i data-lucide="wifi" class="w-4 h-4" title="Gigabit Fiber"></i>
                        <i data-lucide="plug" class="w-4 h-4" title="Power at every seat"></i>
                        <i data-lucide="clock" class="w-4 h-4" title="Open 7am - 11pm"></i>
                    </div>
                </div>

                <!-- Col 2: Quick Links -->
                <div>
                    <h5 class="text-sm font-semibold text-white tracking-wider uppercase mb-3 font-mono">Explore</h5>
                    <ul class="space-y-2 text-xs text-cozy-100/80">
                        <li><a href="index.html" class="hover:text-cozy-accent transition-colors">Home Experience</a></li>
                        <li><a href="about.html" class="hover:text-cozy-accent transition-colors">Our Story & Third Place Concept</a></li>
                        <li><a href="menu.html" class="hover:text-cozy-accent transition-colors">Craft Menu & Ordering</a></li>
                        <li><a href="reservation.html" class="hover:text-cozy-accent transition-colors">Book a Study Pod or Table</a></li>
                        <li><a href="orders.html" class="hover:text-cozy-accent transition-colors">Live Order Tracker</a></li>
                    </ul>
                </div>

                <!-- Col 3: Hours & Location -->
                <div>
                    <h5 class="text-sm font-semibold text-white tracking-wider uppercase mb-3 font-mono">Visit Us</h5>
                    <p class="text-xs text-cozy-100/80 leading-relaxed">
                        <strong>Location:</strong> 123 MU    Hub Blvd, Makati<br>
                        <strong>Monday – Friday:</strong> 6:00 AM – 11:00 PM<br>
                        <strong>Saturday – Sunday:</strong> 7:00 AM – 10:00 PM<br>
                        <strong>Email:</strong> hello@thethirdspace.cafe
                    </p>
                </div>

                <!-- Col 4: Project Info -->
                <div>
                    <h5 class="text-sm font-semibold text-white tracking-wider uppercase mb-3 font-mono">Term Project</h5>
                    <p class="text-xs text-cozy-100/80 leading-relaxed">
                        Course: ITS122P Full-Stack Web Application<br>
                        Stack: HTML5 • Tailwind CSS • Vanilla JS • Node.js/Express • Supabase (PostgreSQL)<br>
                        Student: Drilon (Section AM3)
                    </p>
                    <a href="admin.html" class="mt-4 inline-flex items-center space-x-1 text-xs bg-cozy-800 hover:bg-cozy-accent hover:text-cozy-900 text-cozy-100 px-3 py-1.5 rounded-lg transition-colors">
                        <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                        <span>Staff Administration</span>
                    </a>
                </div>
            </div>

            <div class="max-w-6xl mx-auto pt-6 border-t border-cozy-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-cozy-100/50">
                <p>&copy; 2026 the third space. All rights reserved.</p>
                <p class="mt-2 sm:mt-0 font-mono">Front End ➔ Node.js / Express ➔ Supabase Cloud DB</p>
            </div>
        </footer>
        `;
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

