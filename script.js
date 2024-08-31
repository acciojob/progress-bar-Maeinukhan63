//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === circles.length - 1;
    }

    function updateCircles() {
        circles.forEach((circle, index) => {
            if (index <= currentIndex) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < circles.length - 1) {
            currentIndex++;
            updateCircles();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCircles();
            updateButtons();
        }
    });

    // Initialize
    updateButtons();
});
