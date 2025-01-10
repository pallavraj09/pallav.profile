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
