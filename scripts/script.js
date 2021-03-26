// Get all 'input's
const inputs = document.querySelectorAll('input');

inputs.forEach(element => {

    // Create a simple div to hold the error text from
    // Also set the classname we want to use for styling the div.
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';

    element.oninput = (e) => {
        // When the user starts filling in the field
        // the 'input' event will fire.
        // Remove the errorDiv for that field or it
        // will continue to show as the user is typing.
        errorDiv.remove();
        e.target.classList.remove('has-validation-error');
    };

    // When the input fails html5 browser validation
    // the 'invalid' event will be fired.
    element.oninvalid = (e) => {
        if (!e.target.validity.valid) {
            // Prevent the default browser behaviour
            // for showing an invalid message
            e.preventDefault();

            // Add the text from the 'data-error' attribute in the html
            // to the errorDiv
            errorDiv.textContent = e.target.getAttribute('data-error');
            // Insert the errorDiv immediately after the 'input' element.
            e.target.insertAdjacentElement('afterend', errorDiv);
            e.target.classList.add('has-validation-error');
        }
    };
});