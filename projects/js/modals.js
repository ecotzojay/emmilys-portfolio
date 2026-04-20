function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Stop scrolling background
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function moveCarousel(projectId, direction) {
    const carousel = document.getElementById(`${projectId}-carousel`);
    const progressBar = document.getElementById(`${projectId}-progress`);
    
    // Select the arrows specifically for this project
    const modal = carousel.closest('.modal');
    const leftArrow = modal.querySelector('.left-arrow');
    const rightArrow = modal.querySelector('.right-arrow');

    const items = carousel.querySelectorAll('.carousel-item');
    
    // Use clientWidth for a more stable measurement of the visible area
    const itemWidth = carousel.clientWidth; 
    
    // Calculate current index based on how far we've scrolled
    let currentIndex = Math.round(carousel.scrollLeft / itemWidth);
    let nextIndex = currentIndex + direction;

    // Boundary check: ensures we don't scroll past the first or last image
    if (nextIndex >= 0 && nextIndex < items.length) {
        carousel.scrollTo({
            left: nextIndex * itemWidth,
            behavior: 'smooth'
        });

        // Update Progress Bar
        const progressPercent = ((nextIndex + 1) / items.length) * 100;
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }

        // Update Arrow Visibility
        if (leftArrow) leftArrow.style.visibility = (nextIndex === 0) ? 'hidden' : 'visible';
        if (rightArrow) rightArrow.style.visibility = (nextIndex === items.length - 1) ? 'hidden' : 'visible';
    }
}

function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Reset carousel to the beginning
    const carousel = modal.querySelector('.image-carousel');
    const progressBar = modal.querySelector('.progress-bar');
    const leftArrow = modal.querySelector('.left-arrow');
    const rightArrow = modal.querySelector('.right-arrow');

    if (carousel) {
        carousel.scrollLeft = 0; // Snap back to first image
        if (progressBar) progressBar.style.width = `${(1 / carousel.querySelectorAll('.carousel-item').length) * 100}%`;
        if (leftArrow) leftArrow.style.visibility = 'hidden';
        if (rightArrow) rightArrow.style.visibility = 'visible';
    }
}

// Close if user clicks outside the white box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}