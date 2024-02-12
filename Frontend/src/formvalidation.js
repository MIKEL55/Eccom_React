

const formvalidation = (value) => {
    
    const errors = {};
    console.log(value)

    var validemailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var validusernameRegex = /^[a-zA-Z0-9]+$/;
    
    if (!value.firstname) {
        errors.firstname = 'First Name is required'
    } else if (value.firstname.length < 3) {
    errors.firstname = 'First Name must be at least 3 characters long'
    }

    if(!value.lastname) {
        errors.lastname = 'Last Name is required'
    } else if (value.lastname.length < 3) {
    errors.lastname = 'Last Name must be at least 3 characters long'
    }

    if(!value.username){
        errors.username = 'Username is required'
    } else if(value.username.length < 3 ) {
        errors.username = 'Username must be at least 3 characters long'
    } else if(value.username.match(validusernameRegex))
    {
        errors.username = 'Minimum one alphabet,digit and special character.'
    }

    if(!value.email){
        errors.email = 'Email is required'
    } else if(!value.email.match(validemailRegex)) 
    {
        errors.email = 'Not an email format'
    }

    if(!value.password){
        errors.password = 'Password is required'
    } else if(value.password.length < 5) {
        errors.password = 'Password must be atleast 5 characters'
    }

    if(!value.cnfpassword){
        errors.cnfpassword = 'Password is required'
    }
    else if(!(value.cnfpassword === value.password)) {
        errors.cnfpassword = 'Password do not match'
    }

    return errors



}

export default formvalidation