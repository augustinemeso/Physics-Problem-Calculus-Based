// Function to calculate the velocity of an object
function calculateVelocity(initialVelocity, acceleration, time) {
    // Using the formula: v(t) = v₀ + at
    const velocity = initialVelocity + (acceleration * time);
    return velocity;
}

// Example usage
console.log(calculateVelocity(10, 2, 5));  // Output: 20
console.log(calculateVelocity(0, 9.8, 3));  // Output: 29.4
console.log(calculateVelocity(15, -3, 4));  // Output: 3
