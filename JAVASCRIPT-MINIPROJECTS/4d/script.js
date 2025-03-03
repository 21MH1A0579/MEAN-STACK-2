// Object containing different states
const states = [
    {
        coneImage: 'empty_cone.png',
        heading: 'Empty Cone',
        message: 'The cone is empty now.',
        backgroundColor: '#f0f0f0' // Initial background color
    },
    {
        coneImage: 'refilled_cone.png',
        heading: 'Refilled Cone',
        message: 'The cone is now refilled.',
        backgroundColor: '#e0e0e0' // Background color after refilling
    }
];

// Initial state index
let currentStateIndex = 0;

// Function to update the page content based on the current state
function updatePageContent() {
    const currentState = states[currentStateIndex];

    // Update cone image
    const coneImage = document.createElement('img');
    coneImage.src = currentState.coneImage;
    document.body.style.background = currentState.backgroundColor;

    // Update heading
    const heading = document.getElementById('heading');
    heading.textContent = currentState.heading;

    // Update message
    const message = document.getElementById('message');
    message.textContent = currentState.message;

    // Increment state index for the next click
    currentStateIndex = (currentStateIndex + 1) % states.length;
}

// Event listener for click on the link
document.getElementById('clickLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    updatePageContent(); // Update page content
});
