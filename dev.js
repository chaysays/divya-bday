// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Birthday confetti animation
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    const colors = ['#e74c3c', '#2c3e50', '#34495e', '#f39c12', '#e67e22', '#95a5a6'];
    const emojis = ['🎉', '🎂', '✨', '💖', '🎊', '🎈'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }

    // Remove container after all confetti is gone
    setTimeout(() => {
        confettiContainer.remove();
    }, 8000);
}

// Add fall animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti on page load
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});

// Add click effect to birthday cake
const birthdayCake = document.querySelector('.birthday-cake');
if (birthdayCake) {
    birthdayCake.addEventListener('click', () => {
        createConfetti();
        
        // Add a little bounce effect
        birthdayCake.style.transform = 'scale(1.1)';
        setTimeout(() => {
            birthdayCake.style.transform = 'scale(1)';
        }, 200);
    });
}

// Parallax effect for floating hearts
window.addEventListener('scroll', () => {
    const hearts = document.querySelectorAll('.heart');
    const scrolled = window.pageYOffset;
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effects to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 500);
    }
});

// Add sparkle effect to wish cards
document.querySelectorAll('.wish-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Create sparkle effect
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = '1rem';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                sparkle.style.pointerEvents = 'none';
                card.style.position = 'relative';
                card.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 200);
        }
    });
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add music toggle (optional - you can add background music)
function addMusicToggle() {
    const musicToggle = document.createElement('button');
    musicToggle.innerHTML = '🎵';
    musicToggle.style.position = 'fixed';
    musicToggle.style.bottom = '20px';
    musicToggle.style.right = '20px';
    musicToggle.style.width = '50px';
    musicToggle.style.height = '50px';
    musicToggle.style.borderRadius = '50%';
    musicToggle.style.border = 'none';
    musicToggle.style.background = '#e74c3c';
    musicToggle.style.color = 'white';
    musicToggle.style.fontSize = '1.5rem';
    musicToggle.style.cursor = 'pointer';
    musicToggle.style.zIndex = '1000';
    musicToggle.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
    musicToggle.style.transition = 'all 0.3s ease';
    
    musicToggle.addEventListener('click', () => {
        musicToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            musicToggle.style.transform = 'scale(1)';
        }, 100);
        
        // You can add music functionality here
        // For example: play/pause background music
        console.log('Music toggle clicked! Add your music functionality here.');
    });
    
    musicToggle.addEventListener('mouseenter', () => {
        musicToggle.style.transform = 'scale(1.1)';
        musicToggle.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
    });
    
    musicToggle.addEventListener('mouseleave', () => {
        musicToggle.style.transform = 'scale(1)';
        musicToggle.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
    });
    
    document.body.appendChild(musicToggle);
}

// Initialize music toggle
window.addEventListener('load', addMusicToggle);

// Add scroll reveal animations
function revealOnScroll() {
    const elements = document.querySelectorAll('.memory-item, .wish-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll reveal
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add initial styles for scroll reveal
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .memory-item, .wish-card, .gallery-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(revealStyle);

// Add birthday countdown (if you want to show days until birthday)
function addBirthdayCountdown() {
    // You can customize this date
    const birthdayDate = new Date('2024-12-25'); // Change to her actual birthday
    const today = new Date();
    
    // Set this year's birthday
    birthdayDate.setFullYear(today.getFullYear());
    
    // If birthday has passed this year, set to next year
    if (today > birthdayDate) {
        birthdayDate.setFullYear(today.getFullYear() + 1);
    }
    
    const timeLeft = birthdayDate - today;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
        // It's her birthday!
        createConfetti();
    }
}

// Initialize countdown
window.addEventListener('load', addBirthdayCountdown);

// Full Screen Image/Video Viewer
let currentIndex = 0;
let mediaItems = [];

// Initialize image/video viewer
function initImageViewer() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Get all gallery images and videos
    const images = Array.from(document.querySelectorAll('.gallery-image'));
    const videos = Array.from(document.querySelectorAll('.gallery-video'));
    
    // Combine images and videos into mediaItems array
    mediaItems = [...images, ...videos];
    
    // Add click event to all gallery images
    images.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            openModal(index);
        });
    });
    
    // Add click event to video items
    document.querySelectorAll('.video-item').forEach((videoItem, index) => {
        videoItem.addEventListener('click', () => {
            openModal(images.length + index);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        updateModalContent();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediaItems.length;
        updateModalContent();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
                updateModalContent();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % mediaItems.length;
                updateModalContent();
            }
        }
    });
}

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    
    // Hide both image and video initially
    modalImg.style.display = 'none';
    modalVideo.style.display = 'none';
    
    const currentItem = mediaItems[index];
    
    if (currentItem.tagName === 'IMG') {
        modalImg.src = currentItem.src;
        modalImg.style.display = 'block';
    } else if (currentItem.tagName === 'VIDEO') {
        modalVideo.src = currentItem.src;
        modalVideo.style.display = 'block';
    }
    
    modal.style.display = 'block';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Pause video if playing
    if (modalVideo.src) {
        modalVideo.pause();
    }
    
    // Add fade-out animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function updateModalContent() {
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    
    // Hide both image and video initially
    modalImg.style.display = 'none';
    modalVideo.style.display = 'none';
    
    const currentItem = mediaItems[currentIndex];
    
    if (currentItem.tagName === 'IMG') {
        modalImg.src = currentItem.src;
        modalImg.style.display = 'block';
        
        // Add a subtle zoom effect for images
        modalImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modalImg.style.transform = 'scale(1)';
        }, 50);
    } else if (currentItem.tagName === 'VIDEO') {
        modalVideo.src = currentItem.src;
        modalVideo.style.display = 'block';
    }
}

// Initialize image viewer when page loads
window.addEventListener('load', initImageViewer);

console.log('🎉 Happy Birthday Website Loaded! 🎂');
