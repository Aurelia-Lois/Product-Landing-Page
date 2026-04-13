(function() {
    // ----- MOBILE HAMBURGER MENU (Interactive Element 1) -----
    const hamburger = document.getElementById('hamburgerIcon');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // close menu after clicking a nav link (mobile)
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 850) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 850 && navLinks) {
            navLinks.classList.remove('active');
            if (hamburger) {
                const icon = hamburger.querySelector('i');
                if (icon && icon.classList.contains('fa-times')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });

    // ----- NEWSLETTER SUBSCRIPTION (Interactive Element 2: email validation) -----
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('subEmail');
    const messageDiv = document.getElementById('subscribeMessage');

    function validateEmail(email) {
        const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return re.test(email.trim());
    }

    if (subscribeBtn && emailInput && messageDiv) {
        subscribeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value;
            if (!email) {
                messageDiv.innerHTML = '<span style="color:#c2410c;">❌ Please enter your email address.</span>';
                return;
            }
            if (!validateEmail(email)) {
                messageDiv.innerHTML = '<span style="color:#b91c1c;">⚠️ Enter a valid email (e.g., name@example.com).</span>';
                return;
            }
            messageDiv.innerHTML = '<span style="color:#1f5e3a;">🎉 Sarap! Recipe eBook sent to your inbox. Check your spam folder just in case.</span>';
            emailInput.value = '';
            setTimeout(() => {
                if (messageDiv.innerHTML.includes('Recipe eBook')) {
                    messageDiv.innerHTML = '';
                }
            }, 6000);
        });
    }

    // ----- BUTTON INTERACTIONS (Buy Now & Discover) -----
    const buyBtn = document.getElementById('buyNowBtn');
    const discoverBtn = document.getElementById('discoverBtn');

    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            alert('🍽️ You’ve added Adobong Manok to your cart! Estimated delivery: 30-45 min (Manila time) 🤤');
        });
    }

    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
                // temporary highlight on first feature card
                const firstCard = document.querySelector('.feature-card');
                if (firstCard) {
                    firstCard.style.transition = '0.2s';
                    firstCard.style.boxShadow = '0 0 0 3px #b85c1a';
                    setTimeout(() => {
                        firstCard.style.boxShadow = '';
                    }, 800);
                }
            }
        });
    }

    // ----- SMOOTH SCROLL FOR NAVIGATION (with pushState) -----
    const navAnchors = document.querySelectorAll('.nav-links a');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
})();