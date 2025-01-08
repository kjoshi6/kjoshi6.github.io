// Constellation Animation Script
const canvas = document.getElementById('constellations');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Star properties
const stars = [];
const maxStars = 100; // Adjust for more or fewer stars

// Create stars
for (let i = 0; i < maxStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
    });
}

// Animate stars
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and move stars
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Bounce stars off edges
        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        // Connect stars with lines
        for (let j = i + 1; j < stars.length; j++) {
            const otherStar = stars[j];
            const dx = star.x - otherStar.x;
            const dy = star.y - otherStar.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(otherStar.x, otherStar.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 0.2;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateStars);
}

// Start animation
animateStars();
