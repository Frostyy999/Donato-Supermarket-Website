// Task 1: Changing HTML Contents
// Function to dynamically update review titles and content
function updateReviewContent() {
    // Select all review cards
    const reviewCards = document.querySelectorAll('.review-card');
    
    // Modify the first review card's title and content
    reviewCards[0].querySelector('.review-title').textContent = 'Amazing Shopping Experience';
    reviewCards[0].querySelector('.review-content').textContent = 'K.D Gaile Supermarket continues to impress me with their exceptional service and product range.';
}

// Task 2: Changing Element Styles
// Function to style review cards dynamically
function styleReviewCards() {
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach((card, index) => {
        // Alternate background colors for review cards
        card.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff';
        card.style.transition = 'background-color 0.3s ease';
        card.style.borderRadius = '10px';
        card.style.padding = '15px';
    });
}

// Task 3: Updating User Interface
// Function to add hover effects and interactive elements
function addReviewInteractivity() {
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

// Task 4: Styling Group of Elements
// Function to modify all star ratings
function enhanceStarRatings() {
    const starRatings = document.querySelectorAll('.review-rating');
    
    starRatings.forEach(rating => {
        // Change color and size of star ratings
        rating.style.color = '#ffc107';
        rating.style.fontSize = '1.2em';
    });
}

// Task 5: Custom Feature - Dynamic Review Highlighting
function addReviewHighlighting() {
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        // Add a click event to highlight the most recent review
        card.addEventListener('click', () => {
            // Remove highlight from all cards
            reviewCards.forEach(c => c.style.border = 'none');
            
            // Add highlight to clicked card
            card.style.border = '2px solid #007bff';
            card.style.borderRadius = '10px';
        });
    });
}

// Function to initialize all JavaScript interactions
function initializeReviewInteractions() {
    updateReviewContent();
    styleReviewCards();
    addReviewInteractivity();
    enhanceStarRatings();
    addReviewHighlighting();
}

// Run interactions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeReviewInteractions);
