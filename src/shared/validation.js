export const required = value => value ? undefined : 'Field required';

export const nameLenght = value => value.length < 3 ? 'Name needs to be at least three characters' : undefined;

export const passwordLenght = value => value.length < 6 ? 'Password needs to be at least six characters long' : undefined;

export const postcodeLenght = value => value && !(6 <= value.length <= 8) ? 'Incorrect format, the postcode must be between 6 and 8 characters long including the space' : undefined;

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const matchPassword = (value, allValues) => value === (allValues.password || allValues.newPassword1) ? undefined : 'Passwords must match';

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{10})$/i.test(value) ? undefined : 'Invalid phone number, must be 11 digits and start with 0';

export const isAlphaNumeric = value => value && /^[a-z0-9]+$/i.test(value) ? undefined : 'Must contain a mixture of letters and numbers';

export const isAlphabet = value => value && /[a-z]/i.test(value) ? undefined : 'Must contain only letters';
