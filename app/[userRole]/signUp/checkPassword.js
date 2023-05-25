export const checkPassword = (passwordToCheck, setErrorMessage) => {
  const errors = [];

  if (passwordToCheck.length < 8) {
    errors.push("Le mot de passe doit comporter au moins 8 caractères.");
  }

  if (!/[A-Z]/.test(passwordToCheck)) {
    errors.push("Le mot de passe doit contenir au moins une lettre majuscule.");
  }

  if (!/[a-z]/.test(passwordToCheck)) {
    errors.push("Le mot de passe doit contenir au moins une lettre minuscule.");
  }

  if (!/[!@#$%^&*]/.test(passwordToCheck)) {
    errors.push("Le mot de passe doit contenir au moins un caractère spécial.");
  }

  setErrorMessage(errors);
};
