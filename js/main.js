let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// SUBSCRIBE SECTION VALIDATION
document.getElementById('subscribe-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var name = document.getElementById('enter-name').value.trim();
  var email = document.getElementById('enter-email').value.trim();
  
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  
  // Reset previous error messages
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  
  var isValid = true;

  // Validate Name
  if (name === '') {
      isValid = false;
      nameError.style.display = 'block';
  }

  // Validate Email
  if (email === '') {
      isValid = false;
      emailError.style.display = 'block';
  } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          isValid = false;
          emailError.textContent = 'Please enter a valid email address.';
          emailError.style.display = 'block';
      }
  }

  // If the form is valid, you can proceed
  if (isValid) {
      document.getElementById('enter-name').value = '';
      document.getElementById('enter-email').value = '';

       // Change button color
       var button = document.getElementById('subscribe-link-button');
       button.classList.add('button-clicked');
       
       // Optionally, you can remove the class after a few seconds
       setTimeout(function() {
           button.classList.remove('button-clicked');
       }, 2000); // Adjust the timeout duration as needed
  }
});


document.getElementById('subscribe-link-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var number = document.getElementById('enter-number').value.trim();
  var numberError = document.getElementById('number-error');
  
  // Reset previous error messages
  numberError.style.display = 'none';
  
  var isValid = true;

  // Validate Phone Number
  if (number === '') {
      isValid = false;
      numberError.style.display = 'block';
  } else {
      // Optional: Add phone number format validation if needed
      var phonePattern = /^\d{10,}$/;
      if (!phonePattern.test(number)) {
          isValid = false;
          numberError.textContent = 'Please enter a valid phone number (at least 10 digits).';
          numberError.style.display = 'block';
      }
  }

  // If the form is valid, you can proceed
  if (isValid) {
      document.getElementById('enter-number').value = '';

       // Change button color
       var button = document.getElementById('subscribe-link-button');
       button.classList.add('button-clicked');
       
       // Optionally, you can remove the class after a few seconds
       setTimeout(function() {
           button.classList.remove('button-clicked');
       }, 2000); // Adjust the timeout duration as needed
  }
});



// For FAQ Toggle
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.faq-toggle');
      
      if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          toggle.textContent = '+';
      } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          toggle.textContent = 'x';
      }
  });
});
