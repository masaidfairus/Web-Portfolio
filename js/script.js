document.querySelector('.btn-hero').addEventListener('click', function() {
    const button = this;

    // Add the 'copied' and 'active-state' classes
    button.classList.add('copied', 'active-state');

    // Remove the 'copied' and 'active-state' classes after 3 seconds
    setTimeout(function() {
        button.classList.remove('copied', 'active-state');
    }, 700); // 700 milliseconds = 0.7 seconds
});

function copyText() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("masaidfairustrimarsongko@gmail.com");
}

document.querySelectorAll('.social-effect').forEach(element => {
    const img = element.querySelector('img');
    const hoverSrc = img.getAttribute('data-hover-src'); // Use data-hover-src for hover image
    const originalSrc = img.src;

    element.addEventListener('mouseover', () => {
        img.src = hoverSrc;
        img.classList.add('hovered');
    });

    element.addEventListener('mouseout', () => {
        img.src = originalSrc;
        img.classList.remove('hovered');
    });
});

document.querySelectorAll('.social-effect').forEach(element => {
    element.addEventListener('click', function() {
        // Add clicked class to animate
        this.classList.add('clicked');
        
        // Remove the class after animation ends
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300); // Adjust timeout to match animation duration
    });
});

// https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=masaidfairustrimarsongko@gmail.com

document.querySelector('.email').addEventListener('click', function() {
    window.location.href = 'mailto:masaidfairustrimarsongko@gmail.com';
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden-2');
    hiddenElements.forEach((el) => observer.observe(el));
});