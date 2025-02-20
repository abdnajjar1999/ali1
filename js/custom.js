document.addEventListener('DOMContentLoaded', function() {
    // عدد البطاقات التي ستظهر في كل مرة
    const cardsPerLoad = 4;
    
    // الحصول على جميع البطاقات
    const cards = Array.from(document.querySelectorAll('.col-sm-6'));
    
    // Enhanced initial card loading animation with left/right appearance
    cards.forEach((card, index) => {
        if (index >= cardsPerLoad) {
            card.style.display = 'none';
            card.style.opacity = '0';
        } else {
            card.style.opacity = '0';
            // Alternate between left and right animations
            if (index % 2 === 0) {
                card.classList.add('slide-from-left');
            } else {
                card.classList.add('slide-from-right');
            }
            
            // Staggered animation for initial cards
            setTimeout(() => {
                card.style.opacity = '1';
            }, index * 150);
        }
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Smooth infinite scroll with enhanced animations
    let isLoading = false;
    window.addEventListener('scroll', function() {
        if (isLoading) return;
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            isLoading = true;
            
            const visibleCards = cards.filter(card => card.style.display !== 'none').length;
            
            // Add loading animation
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner active';
            spinner.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
            document.querySelector('.row.mt-n4').appendChild(spinner);
            
            setTimeout(() => {
                showNextCards(visibleCards);
                spinner.remove();
                isLoading = false;
            }, 600);
        }
    });
    
    // Enhanced card reveal animation with left/right appearance
    function showNextCards(startIndex) {
        for (let i = startIndex; i < startIndex + cardsPerLoad && i < cards.length; i++) {
            const card = cards[i];
            card.style.display = 'block';
            card.style.opacity = '0';
            
            // Alternate between left and right animations
            if (i % 2 === 0) {
                card.classList.add('slide-from-left');
            } else {
                card.classList.add('slide-from-right');
            }
            
            // Staggered animation with enhanced timing
            setTimeout(() => {
                card.style.opacity = '1';
                
                // Add hover animation after card appears
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            }, (i - startIndex) * 150);
        }
    }

    // Bio content toggle with smooth animation
    document.querySelectorAll('.bio-image').forEach(image => {
        image.addEventListener('click', function() {
            const bioContent = this.nextElementSibling;
            bioContent.classList.add('active');
        });
    });

    document.querySelectorAll('.bio-content').forEach(content => {
        content.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
}); 