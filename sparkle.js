// Function to create a sparkle element
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    // Remove the sparkle after the animation ends
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Event listener for click events to create sparkles
document.addEventListener('click', function(event) {
    // Get the click position
    const x = event.pageX;
    const y = event.pageY;

    // Create multiple sparkles for a more pronounced effect
    for (let i = 0; i < 5; i++) {
        const offsetX = Math.random() * 30 - 10; // Random offset to spread the sparkles
        const offsetY = Math.random() * 30 - 10;
        createSparkle(x + offsetX, y + offsetY);
    }
});