Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
    requestPermissions: {},
    extraSignupFields: 
    [
        {
            fieldName: 'email',
            fieldLabel: 'Email',
            inputType: 'text',
            visible: true,
            validate: function(value, errorFunction) {
                if (!value) {
                    errorFunction("Email is required!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            fieldName: 'firstName',
            fieldLabel: 'First Name',
            inputType: 'text',
            visible: true
        }, 
        {
            fieldName: 'lastName',
            fieldLabel: 'Last Name',
            inputType: 'text',
            visible: true
        }, 
        {
            fieldName: 'description',
            fieldLabel: 'About Me',
            inputType: 'textarea',
            visible: true
        }
    ]
});
