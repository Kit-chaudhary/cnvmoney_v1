const handleNoFill = () => {
    if (fullName === "") {
        setFullNameError("Please fill your full name.");
    }
    if (phone === "") {
        setPhoneError("Please fill your phone number.");
    }
    if (email === "") {
        setEmailError("Please enter your email.");
    }
};

const handleNoFillTwo = () => {
    if (pan === "") {
        setPANError("Please fill your PAN.");
    }
    if (password === "") {
        setPasswordError("Please Create Password.");
    }
    if (confirmPassword === "") {
        setConfirmPasswordError("Please Confirm your Password.");
    }
    if (pan !== "" && password !== "" && confirmPassword !== "") {
        setButtonDisabled(true);
    } else {
        setButtonDisabled(false);
    }
};

export { handleNoFill, handleNoFillTwo };