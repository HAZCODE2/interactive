// Get the form element
const form = index2.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the form data
  const formData = new FormData(form);
  
  // Validate the form data
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  if (!name || !email || !message) {
    alert('Please fill in all the required fields');
    return;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // If the form data is valid, submit the form
  form.submit();
});

// Function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}