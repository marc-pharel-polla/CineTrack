export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password && password.length >= 8;
};

export const validateUsername = (username) => {
    return username && username.length >= 3 && username.length <= 30;
};