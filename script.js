const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function typeWriter(text, elementId, callback) {
    let index = 0;
    const speed = 100; // Typing speed in milliseconds
    const typingText = document.getElementById(elementId);

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            typingText.style.borderRight = 'none';
            if (callback) callback();
        }
    }

    type();
}
