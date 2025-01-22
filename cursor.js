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

    // Remove the sparkle after 1 second
    setTimeout(() => {
        sparkle.remove();
    }, 1000); // Remove after 1 second
});
