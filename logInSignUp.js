$(function () {
    resetModal();
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
    $('.back-to-top').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    }); 
  })
  
  // Login/Sign up validate
  
  $(document).on('click', function (e) {
    let target = e.target;
  
    // Validate sign in
    if (target.closest('.sign-in-btn')) {
      $('.invalid-feedback').css('display', 'none');
      let emailFormat = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
  
      let isValid = true;
      let signInEmail = $('.sign-in-email');
      let signInEmailValue = signInEmail.val();
      let signInEmailInvalid = $('.sign-in-email').next();
      let signInPassword = $('.sign-in-password');
      let signInPasswordValue = signInPassword.val();
      let signInPasswordInvalid = $('.sign-in-password').next();
  
  
      if (signInEmailValue == "") {
        signInEmailInvalid.css('display', 'block');
        signInEmailInvalid.html('Vui lòng nhập email');
        isValid = false;
      } else if (!emailFormat.test(signInEmailValue)) {
        signInEmailInvalid.css('display', 'block');
        signInEmailInvalid.html('Email không hợp lệ');
        isValid = false;
      }
      if (signInPasswordValue == "") {
        signInPasswordInvalid.css('display', 'block');
        signInPasswordInvalid.html('Vui lòng nhập password')
        isValid = false;
      }else if (signInPasswordValue.length < 6) {
        signInPasswordInvalid.css('display', 'block');
        signInPasswordInvalid.html('Password phải có ít nhất 6 kí tự')
        isValid = false;
      }
      if(isValid){
        let num = signInEmailValue.indexOf("@gmail.com");
        $('.account-setting').html("Xin chào " + signInEmailValue.slice(0,num));
        return isValid;
      }else{
        $('.account-setting').html("Tài khoản");
      }
      return isValid;
    }
    
    // Validate sign up
    if (target.closest('.sign-up-btn')) {
      let isValid = true;
      $('.invalid-feedback').css('display', 'none');
      let phoneFormat = new RegExp(/((09|03|07|08|05)+([0-9]{8})\b)/g);
      let emailFormat = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
  
      let fullName = $('.sign-up-full-name');
      let fullNameValue = fullName.val();
      let fullNameInvalid = fullName.next();
      let phone = $('.sign-up-phone');
      let phoneValue = phone.val();
      let phoneInvalid = phone.next();
      let email = $('.sign-up-email');
      let emailValue = email.val();
      let emailInvalid = email.next();
      let password = $('.sign-up-password');
      let passwordValue = password.val();
      let passwordInvalid = password.next();
      let confirmPassword = $('.sign-up-confirm-password');
      let confirmPasswordValue = confirmPassword.val();
      let confirmPasswordInvalid = confirmPassword.next();
  
      // Validate name
      if (fullNameValue == "") {
        fullNameInvalid.css('display', 'block');
        fullNameInvalid.html('Vui lòng nhập họ và tên');
        isValid = false;
      }
  
      // Validate phone
      if (phoneValue == "") {
        phoneInvalid.css('display', 'block');
        phoneInvalid.html('Vui lòng nhập số điện thoại');
        isValid = false;
      } else if (!phoneFormat.test(phoneValue)) {
        phoneInvalid.css('display', 'block');
        phoneInvalid.html('Số điện thoại không hợp lệ');
        isValid = false;
      }
  
      // Validate email
      if (emailValue == "") {
        emailInvalid.css('display', 'block');
        emailInvalid.html('Vui lòng nhập email');
        isValid = false;
      } else if (!emailFormat.test(emailValue)) {
        emailInvalid.css('display', 'block');
        emailInvalid.html('Email của bạn không hợp lệ');
        isValid = false;
      }
  
      // Validate password
      if (passwordValue == "") {
        passwordInvalid.css('display', 'block');
        passwordInvalid.html('Vui lòng nhập password');
        isValid = false;
      }else if(passwordValue.length<6){
        passwordInvalid.css('display', 'block');
        passwordInvalid.html('Password phải có ít nhất 6 kí tự');
        isValid = false;
      }
  
      // Validate confirm password
      if (confirmPasswordValue == "") {
        confirmPasswordInvalid.css('display', 'block');
        confirmPasswordInvalid.html('Vui lòng xác nhận lại password');
        isValid = false;
      } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordInvalid.css('display', 'block');
        confirmPasswordInvalid.html('Mật khẩu và xác nhận mật khẩu không giống nhau');
        isValid = false;
      }  
      return isValid;
    }
  
    if (target.closest('.product-link')) {
      localStorage.setItem('sessionsProduct', $(this).attr('id'));
  
      if (target !== $('.product-link')) {
        let productId = $(target).parents('.product-link').attr('id');
        localStorage.setItem('sessionsProduct', productId);
      }
    }
  })


  
  // Reset form after close modal
  
  function resetModal() {
    $('.modal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      $('.invalid-feedback').css('display', 'none');
    })
  }
  
