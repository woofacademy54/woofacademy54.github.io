/* ===================================
   WOOF ACADEMY - HEADER JAVASCRIPT
   Animation chien + balle + navigation
   Version: 1.0
   =================================== */

// Configuration par défaut (modifiable via admin-config)
const woofConfig = {
    dogRunDuration: 800,      // ms - durée course vers la balle
    dogReturnDuration: 1000,  // ms - durée retour avec l'os
    ballFlightDuration: 500,  // ms - durée vol de la balle
    dogPauseDuration: 300,    // ms - pause avant de revenir
    animationEnabled: true     // activer/désactiver l'animation
};

// Charger la config depuis localStorage si disponible
function loadWoofConfig() {
    const saved = localStorage.getItem('woofAnimationConfig');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            Object.assign(woofConfig, config);
            applyConfigToCSS();
        } catch (e) {
            console.warn('Woof config load error:', e);
        }
    }
}
/* ===================================
   WOOF ACADEMY - HEADER JAVASCRIPT
   Animation chien + balle + navigation
   Version: 1.0
   =================================== */

// Configuration par défaut (modifiable via admin-config)
const woofConfig = {
    dogRunDuration: 800,      // ms - durée course vers la balle
    dogReturnDuration: 1000,  // ms - durée retour avec l'os
    ballFlightDuration: 500,  // ms - durée vol de la balle
    dogPauseDuration: 300,    // ms - pause avant de revenir
    animationEnabled: true     // activer/désactiver l'animation
};

// Charger la config depuis localStorage si disponible
function loadWoofConfig() {
    const saved = localStorage.getItem('woofAnimationConfig');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            Object.assign(woofConfig, config);
            applyConfigToCSS();
        } catch (e) {
            console.warn('Woof config load error:', e);
        }
    }
}

// Appliquer la config aux variables CSS
function applyConfigToCSS() {
    document.documentElement.style.setProperty('--dog-run-duration', `${woofConfig.dogRunDuration}ms`);
    document.documentElement.style.setProperty('--dog-return-duration', `${woofConfig.dogReturnDuration}ms`);
    document.documentElement.style.setProperty('--ball-flight-duration', `${woofConfig.ballFlightDuration}ms`);
    document.documentElement.style.setProperty('--dog-pause-duration', `${woofConfig.dogPauseDuration}ms`);
}

// État de l'animation
let isAnimating = false;

// Animation du chien qui court attraper la balle
function triggerDogAnimation() {
    if (isAnimating || !woofConfig.animationEnabled) return;
    
    const dog = document.querySelector('.woof-dog');
    const bone = document.querySelector('.woof-bone');
    const ball = document.querySelector('.woof-ball');
    const cartDog = document.querySelector('.woof-cart-dog');
    
    if (!dog || !ball) return;
    
    isAnimating = true;
    
    // Position de départ de la balle (coin haut gauche)
    ball.style.top = '20px';
    ball.style.left = '20px';
    
    // 1. Lancer la balle
    ball.classList.add('flying');
    
    // 2. Le chien court vers la balle
    setTimeout(() => {
        dog.classList.add('running-left');
    }, woofConfig.ballFlightDuration * 0.3);
    
    // 3. Le chien attrape la balle et revient
    setTimeout(() => {
        ball.classList.remove('flying');
        ball.style.opacity = '0';
        dog.classList.remove('running-left');
        
        // Petite pause
        setTimeout(() => {
            dog.classList.add('running-back');
            
            // 4. Le chien arrive avec l'os
            setTimeout(() => {
                dog.classList.remove('running-back');
                if(cartDog) cartDog.classList.add('has-items');
                isAnimating = false;
            }, woofConfig.dogReturnDuration);
            
        }, woofConfig.dogPauseDuration);
        
    }, woofConfig.ballFlightDuration + woofConfig.dogRunDuration);
}

/* =========================================================
   NOUVEAU : ANIMATIONS UX/UI (Section Histoire & Concept)
   Intégration Omouth - Gestion GSAP & ScrollTrigger
   ========================================================= */

function initHistoryAnimations() {
    // 1. Vérification de sécurité : GSAP est-il chargé ?
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP ou ScrollTrigger manquant. Animations désactivées.');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Vérifier si la section existe sur cette page
    const historySection = document.querySelector('.section-histoire');
    if (!historySection) return;

    // --- A. Logique d'interaction Desktop (Hover) ---
    const isDesktop = window.matchMedia("(min-width: 992px)").matches;

    if (isDesktop) {
        const trigger = document.querySelector('.visual-block');
        const img = trigger?.querySelector('.interactive-img');
        const badge = trigger?.querySelector('.floating-badge');
        const wrapper = trigger?.querySelector('.img-wrapper');
        const leftBlock = document.querySelector('.left-trigger');

        // On ne crée la timeline que si tous les éléments sont là
        if (trigger && img && leftBlock && wrapper) {
            const hoverTL = gsap.timeline({ 
                paused: true, 
                defaults: { duration: 0.4, ease: "power2.out" }
            });

            hoverTL
                // Zoom Image & Ombre Néon
                .to(img, { scale: 1.08, duration: 0.6 })
                .to(wrapper, { boxShadow: "0 20px 50px rgba(0, 242, 234, 0.25)" }, "<")
                // Disparition du badge "Survolez"
                .to(badge, { opacity: 0, y: 10 }, "<")
                // Effet de focus : Le texte gauche devient flou
                .to(leftBlock, { 
                    opacity: 0.5, 
                    x: -15,
                    filter: "blur(3px)" 
                }, "<");

            // Écouteurs d'événements
            trigger.addEventListener('mouseenter', () => hoverTL.play());
            trigger.addEventListener('mouseleave', () => hoverTL.reverse());
        }
    }

    // --- B. Animation d'apparition au Scroll (Global) ---
    // Sélectionne toutes les cards (texte, image, détails)
    const cards = document.querySelectorAll('.history-card');
    
    if (cards.length > 0) {
        gsap.from(cards, {
            y: 30,              // Vient du bas
            opacity: 0,         // Commence invisible
            duration: 1,
            stagger: 0.2,       // Décalage de 0.2s entre chaque élément
            scrollTrigger: {
                trigger: ".history-grid-wrapper",
                start: "top 85%", // Commence quand le haut de la grille est à 85% du viewport
                toggleActions: "play none none reverse" // Rejoue si on remonte
            }
        });
    }
}

// Initialisation globale au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadWoofConfig();       // Charge la config du header
    initHistoryAnimations(); // Lance les animations de la page Concept
});

// Appliquer la config aux variables CSS
function applyConfigToCSS() {
    document.documentElement.style.setProperty('--dog-run-duration', `${woofConfig.dogRunDuration}ms`);
    document.documentElement.style.setProperty('--dog-return-duration', `${woofConfig.dogReturnDuration}ms`);
    document.documentElement.style.setProperty('--ball-flight-duration', `${woofConfig.ballFlightDuration}ms`);
    document.documentElement.style.setProperty('--dog-pause-duration', `${woofConfig.dogPauseDuration}ms`);
}

// État de l'animation
