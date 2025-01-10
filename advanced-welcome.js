document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll(".layer");
    const speed = 5;

    layers.forEach((layer, index) => {
        const x = (window.innerWidth - e.pageX * speed * (index + 1)) / 100;
        const y = (window.innerHeight - e.pageY * speed * (index + 1)) / 100;
        layer.style.transform = `translate(${x}px, ${y}px) translateZ(-500px) scale(2)`;
    });
});

// Show the popup every 20 seconds
setInterval(function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Show the popup

    // Close the popup after 5 seconds
    setTimeout(function() {
        popup.style.display = 'none'; // Hide the popup after 5 seconds
    }, 5000); // Popup stays visible for 5 seconds
}, 20000); // Show the popup every 20 seconds

// Function to manually close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none'; // Close the popup when "X" is clicked
}
function verifyPin() {
    // Define the correct PIN (You can change it)
    const correctPin = "1234";

    // Ask the user for a PIN
    const enteredPin = prompt("To view my personal information, please enter the 4-digit PIN:");

    // Check if the entered PIN is correct
    if (enteredPin === correctPin) {
        // If correct, redirect to the main page
        window.location.href = "main.html";
    } else {
        // If incorrect, redirect to a contact page
        window.location.href = "contact-me.html";  // Create this page with contact options
    }
}
