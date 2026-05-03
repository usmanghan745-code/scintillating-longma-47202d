// ============================================
// BestSkillLab - Courses Filter Functionality
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter courses
        filterCourses(filterValue);
    });
});

function filterCourses(filter) {
    courseCards.forEach(card => {
        // Add fade out animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            if (filter === 'all') {
                // Show all courses
                card.style.display = 'block';
            } else {
                // Show only matching category
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
            
            // Add fade in animation
            card.offsetHeight; // Trigger reflow
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Scroll to courses section
    document.querySelector('.courses-grid').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add smooth transition to course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.style.transition = 'all 0.3s ease';
});

// Check if there's a filter parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const filterParam = urlParams.get('filter');

if (filterParam) {
    // Find and click the matching filter button
    const matchingButton = document.querySelector(`[data-filter="${filterParam}"]`);
    if (matchingButton) {
        matchingButton.click();
    }
}

console.log('Course Filter - Initialized');
