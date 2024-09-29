// Generate a random password between 4 and 8 digits
const generatePassword = () => {
  let passwordLength = Math.floor(Math.random() * 5 + 4); // Generates a length between 4 and 8
  let generatedPassword = Math.floor(Math.random() * Math.pow(10, passwordLength));
  return generatedPassword.toString();
}

// Check if the password is valid
const checkPassword = (password) => {
  if (password.length < 6) {
      throw new Error('Password is too short! Generate another password.');
  }
}

// Use these functions when the button is clicked
document.querySelector('button').addEventListener('click', () => {
  try {
      const password = generatePassword();
      document.getElementById('generatedPassword').innerText = `Generated Password: ${password}`;
      checkPassword(password);
      console.log('Password is valid!');
  } catch (error) {
      console.error(error.message);
      document.getElementById('generatedPassword').innerText = error.message;
  }
});
