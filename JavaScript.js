let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let eventSlides = document.getElementsByClassName("eventSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < eventSlides.length; i++) {
        eventSlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex > eventSlides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    eventSlides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
