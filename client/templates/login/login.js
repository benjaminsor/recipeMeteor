Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
    requestPermissions: {},
    extraSignupFields: 
    [
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
