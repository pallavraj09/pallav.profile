document.addEventListener('DOMContentLoaded', function() {
    // About Me section
    const aboutTitle = document.querySelector('.about-title');
    const aboutContent = document.getElementById("about-content");

    aboutTitle.addEventListener('click', function() {
        // Expand the About section dynamically
        const aboutSection = document.querySelector('.about-section');
        aboutSection.style.maxHeight = "1000px"; // Expand the height to fit content

        // Show the about content
        aboutContent.classList.add('show-content');
    });
});
// Function to show the next step in the form
function nextStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).classList.add('hidden');
    
    // Show the next step
    document.getElementById('step' + (currentStep + 1)).classList.remove('hidden');
}

// Function to go back to the previous step
function previousStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).classList.add('hidden');
    
    // Show the previous step
    document.getElementById('step' + (currentStep - 1)).classList.remove('hidden');
}
