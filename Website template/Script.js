
document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review-card");
    const carousel = document.querySelector(".review-carousel");

    if (reviews.length === 0 || !carousel) return;

    let currentReview = 0;
    let reviewInterval;

    reviews.forEach((review, index) => {
        review.classList.toggle("active", index === 0);
    });

    function showNextReview() {
        reviews[currentReview].classList.remove("active");

        currentReview = (currentReview + 1) % reviews.length;

        reviews[currentReview].classList.add("active");
    }

    function startCarousel() {
        clearInterval(reviewInterval);
        reviewInterval = setInterval(showNextReview, 5000);
    }

    function stopCarousel() {
        clearInterval(reviewInterval);
    }

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();
});
