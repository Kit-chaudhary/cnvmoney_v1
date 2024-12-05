const handleNoFill = () => {
    if (password === "") {
        setPasswordError("Please Create Password.");
    }
    if (confirmPassword === "") {
        setConfirmPasswordError("Please Confirm your Password.");
    }
    if (password !== "" && confirmPassword !== "") {
        setButtonDisabled(true);
    }
}

export { handleNoFill };