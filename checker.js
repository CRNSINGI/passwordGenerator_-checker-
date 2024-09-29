const generatePassword = () => {
    let passwordLength = Math.floor(Math.random() * 5 + 4); // Generates a length between 4 and 8
    let generatedPassword = Math.floor(Math.random() * Math.pow(10, passwordLength));
    return generatedPassword.toString();
  }
  
  // Add a checkPassword function that throws an error when password length is less than 6
  const checkPassword = (password) => {
    if (password.length < 6) {
      throw new Error('Password is too short! Generate another password.');
    }
  }
  
  // Export generatePassword and checkPassword functions
  export { generatePassword, checkPassword };
  
  // Example usage
  try {
    const password = generatePassword();
    console.log(`Generated Password: ${password}`);
    checkPassword(password);
    console.log('Password is valid!');
  } catch (error) {
    console.error(error.message);
  }
  