document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    // Set position to cursor
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    // Add random rotation and size variation
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Append the sparkle to the body
    document.body.appendChild(sparkle);

    // Animate twinkling effect
    sparkle.animate(
        [
            { opacity: 1, filter: "blur(0px)", transform: "scale(1)" }, 
            { opacity: 0.6, filter: "blur(1px)", transform: "scale(1.2)" },
            { opacity: 1, filter: "blur(0.5px)", transform: "scale(1)" }, 
            { opacity: 0 }
        ],
        { duration: 1000, easing: "ease-in-out" } // 1 second twinkle animation
    );

    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000); // Remove after 1 second
});

