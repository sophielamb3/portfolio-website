(function (){
  var $form = document.querySelector('#contact-form');
  var $emailInput = document.querySelector('#contact-email');
  var $telephoneInput = document.querySelector('#contact-telephone');
  var $messageInput = document.querySelector('#contact-message');

  function showErrorMessage($input, message){
    var $container = $input.parentElement;

    //remove existing error
    var error = $container.querySelector('.error-message');
    if (error) {
      $container.removeChild(error);
    }

    if (message){
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      $container.appendChild(error);
    }
  }

  function validateEmail() {
    var value = $emailInput.value

    if (!value){
      showErrorMessage($emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage($emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  function validateTelephone(){
    var value = $telephoneInput.value;


    if (value.length < 10){
      showErrorMessage($telephoneInput, 'Your telephone number needs to have 10 numbers.');
      return false;
    }

    showErrorMessage($telephoneInput, null);
    return true;
  }

  function validateMessage(){
    var value = $messageInput.value;

    if (!value){
      showErrorMessage($messageInput, 'Make sure write a message so we have something to talk about!');
      return false;
    }

    showErrorMessage($messageInput, null);
    return true;
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidTelephone = validateTelephone();
    var isValidMessage = validateMessage();
    return isValidEmail && isValidTelephone && isValidMessage;
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()){
      alert('Success!');
    }
  });

  $emailInput.addEventListener('input', validateEmail);
  $telephoneInput.addEventListener('input', validateTelephone);
  $messageInput.addEventListener('input', validateMessage);

})();
