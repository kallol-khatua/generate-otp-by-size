exports.generateOTP = (size) => {
    const digits = '0123456789';
    let otp = '';

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits.charAt(randomIndex);
    }

    return otp;
}