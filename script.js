$(document).ready(function() {
    initializeFormValidation();
    initializePasswordToggle();
    initializeRealTimeValidation();
});

function initializeFormValidation() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        clearMessages();
        const validationResults = validateAllFields();
        
        if (validationResults.isValid) {
            showSuccessMessage('Form submitted successfully! All validations passed.');
            console.log('Form data:', collectFormData());
        } else {
            showErrorMessage('Please correct the errors below before submitting.');
            $('.container').addClass('shake');
            setTimeout(() => $('.container').removeClass('shake'), 500);
        }
    });
    
    $('#resetBtn').on('click', function() {
        clearAllErrors();
        clearMessages();
    });
}

function initializePasswordToggle() {
    $('#togglePassword').on('click', function() {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? '👁️' : '🙈');
    });
    
    $('#toggleConfirmPassword').on('click', function() {
        const confirmPasswordField = $('#confirmPassword');
        const type = confirmPasswordField.attr('type') === 'password' ? 'text' : 'password';
        confirmPasswordField.attr('type', type);
        $(this).text(type === 'password' ? '👁️' : '🙈');
    });
}

function initializeRealTimeValidation() {
    $('#username').on('blur', function() {
        validateUsername($(this).val());
    });
    
    $('#email').on('blur', function() {
        validateEmail($(this).val());
    });
    
    $('#password').on('blur', function() {
        validatePassword($(this).val());
    });
    
    $('#confirmPassword').on('blur', function() {
        validateConfirmPassword($(this).val(), $('#password').val());
    });
    
    $('#phone').on('blur', function() {
        validatePhone($(this).val());
    });
    
    $('#country').on('change', function() {
        validateCountry($(this).val());
    });
    
    $('input[name="gender"]').on('change', function() {
        validateGender();
    });
}

function validateAllFields() {
    const username = $('#username').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();
    const phone = $('#phone').val().trim();
    const country = $('#country').val();
    
    let isValid = true;
    const errors = [];
    
    if (!validateUsername(username)) {
        isValid = false;
        errors.push('Username validation failed');
    }
    
    if (!validateEmail(email)) {
        isValid = false;
        errors.push('Email validation failed');
    }
    
    if (!validatePassword(password)) {
        isValid = false;
        errors.push('Password validation failed');
    }
    
    if (!validateConfirmPassword(confirmPassword, password)) {
        isValid = false;
        errors.push('Confirm password validation failed');
    }
    
    if (!validatePhone(phone)) {
        isValid = false;
        errors.push('Phone validation failed');
    }
    
    if (!validateCountry(country)) {
        isValid = false;
        errors.push('Country validation failed');
    }
    
    if (!validateGender()) {
        isValid = false;
        errors.push('Gender validation failed');
    }
    
    return { isValid, errors };
}

function validateUsername(username) {
    const usernameError = $('#usernameError');
    const usernameField = $('#username');
    
    clearFieldError(usernameField, usernameError);
    
    if (!username) {
        showFieldError(usernameField, usernameError, 'Username is required');
        return false;
    }
    
    if (username.length < 5 || username.length > 12) {
        showFieldError(usernameField, usernameError, 'Username must be between 5 and 12 characters');
        return false;
    }
    
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        showFieldError(usernameField, usernameError, 'Username can only contain letters, numbers, and underscores');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const emailError = $('#emailError');
    const emailField = $('#email');
    
    clearFieldError(emailField, emailError);
    
    if (!email) {
        showFieldError(emailField, emailError, 'Email is required');
        return false;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        showFieldError(emailField, emailError, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

function validatePassword(password) {
    const passwordError = $('#passwordError');
    const passwordField = $('#password');
    
    clearFieldError(passwordField, passwordError);
    
    if (!password) {
        showFieldError(passwordField, passwordError, 'Password is required');
        return false;
    }
    
    if (password.length < 8) {
        showFieldError(passwordField, passwordError, 'Password must be at least 8 characters long');
        return false;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showFieldError(passwordField, passwordError, 'Password must contain uppercase, lowercase, number, and special character');
        return false;
    }
    
    return true;
}

function validateConfirmPassword(confirmPassword, password) {
    const confirmPasswordError = $('#confirmPasswordError');
    const confirmPasswordField = $('#confirmPassword');
    
    clearFieldError(confirmPasswordField, confirmPasswordError);
    
    if (!confirmPassword) {
        showFieldError(confirmPasswordField, confirmPasswordError, 'Please confirm your password');
        return false;
    }
    
    if (confirmPassword !== password) {
        showFieldError(confirmPasswordField, confirmPasswordError, 'Passwords do not match');
        return false;
    }
    
    return true;
}

function validatePhone(phone) {
    const phoneError = $('#phoneError');
    const phoneField = $('#phone');
    
    clearFieldError(phoneField, phoneError);
    
    if (!phone) {
        showFieldError(phoneField, phoneError, 'Phone number is required');
        return false;
    }
    
    if (!/^\d{10}$/.test(phone)) {
        showFieldError(phoneField, phoneError, 'Phone number must be exactly 10 digits');
        return false;
    }
    
    return true;
}

function validateCountry(country) {
    const countryError = $('#countryError');
    const countryField = $('#country');
    
    clearFieldError(countryField, countryError);
    
    if (!country) {
        showFieldError(countryField, countryError, 'Please select a country');
        return false;
    }
    
    return true;
}

function validateGender() {
    const genderError = $('#genderError');
    const selectedGender = $('input[name="gender"]:checked');
    
    genderError.text('');
    
    if (selectedGender.length === 0) {
        genderError.text('Please select a gender');
        return false;
    }
    
    return true;
}

function showFieldError(field, errorElement, message) {
    field.addClass('error');
    errorElement.text(message);
}

function clearFieldError(field, errorElement) {
    field.removeClass('error');
    errorElement.text('');
}

function clearAllErrors() {
    $('.form-group input, .form-group select').removeClass('error');
    $('.error-text').text('');
}

function showSuccessMessage(message) {
    $('#successMessage').text(message).show();
    $('#errorMessage').hide();
    
    setTimeout(() => {
        $('#successMessage').fadeOut();
    }, 5000);
}

function showErrorMessage(message) {
    $('#errorMessage').text(message).show();
    $('#successMessage').hide();
}

function clearMessages() {
    $('#errorMessage, #successMessage').hide();
}

function collectFormData() {
    const formData = {
        username: $('#username').val().trim(),
        email: $('#email').val().trim(),
        password: $('#password').val(),
        phone: $('#phone').val().trim(),
        gender: $('input[name="gender"]:checked').val(),
        hobbies: $('input[name="hobbies"]:checked').map(function() {
            return $(this).val();
        }).get(),
        country: $('#country').val()
    };
    
    return formData;
}

$(document).ready(function() {
    $('#phone').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    $('#username').on('input', function() {
        this.value = this.value.replace(/\s/g, '');
    });
}); 