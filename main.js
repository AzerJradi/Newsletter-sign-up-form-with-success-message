document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const emailDisplay = document.getElementById('emailDisplay');
    const dismissBtn = document.getElementById('dismissBtn');
    const body = document.getElementById('body');
  
    subscribeBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        emailInput.style.borderColor = 'green';
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        emailDisplay.textContent = email;
        body.style.display = 'none';
      } else {
        emailInput.style.borderColor = 'red';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        emailInput.style.background = '#FFE8E6';
        emailInput.style.color = '#E97C71';
        emailInput.style.border = '1px #CBCBCB solid';
        emailInput.style.borderRadius = '6px';
      }
    });
  
    dismissBtn.addEventListener('click', function() {
      successMessage.style.display = 'none';
      body.style.display = 'block';
      emailInput.value = '';
      emailInput.style.borderColor = '';
      emailInput.style.background = '';
      emailInput.style.color = '';
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  