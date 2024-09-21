/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  console.log("opened");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  console.log("closed")
}

/* SLIDESHOW --------------------------------------DONE I THINK?----------------------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetInterval();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetInterval();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
function autoSlides() {
  plusSlides(1);
}

// Set the interval for the automatic slideshow
let slideInterval = setInterval(autoSlides, 4000);

// Reset the interval for manual controls
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlides, 4000);
}

// COUNTDOWN TIMER ------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const targetDate = new Date("January 4, 2025 00:00:00").getTime();
  const countdownElement = document.getElementById('countdown');

  // Check if the countdown element exists
  if (countdownElement) {
      function updateCountdown() {
          const now = new Date().getTime();
          const distance = targetDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

          countdownElement.innerHTML = `${days} : ${hours} : ${minutes}`;

          if (distance < 0) {
              clearInterval(countdownInterval);
              countdownElement.innerHTML = "SEZON BAŞLADI";
          }
      }

      // Initial call to display countdown immediately
      updateCountdown();
      const countdownInterval = setInterval(updateCountdown, 60000);
  } else {
      console.warn("Countdown element not found, countdown script will not run.");
  }
});


//MAIL COPY TO CLIPBOARD -------------------------------------------------------------------

function copyToClipboard(text) {
  // Create a temporary textarea element
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  // Copy the text inside the textarea to the clipboard
  document.execCommand("copy");
  // Remove the temporary textarea element
  document.body.removeChild(textarea);
  // Optional: Alert the user that the text has been copied
  alert("Mail adresi panoya kopyalandı: " + text);
}

//SEASONS COLLAPSIBLES ------------------------------------------------------------------------

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}