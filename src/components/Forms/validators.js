export const required = value => !value || value === 'Select location' ? 'Required field' : undefined;

export const nonEmpty = value => !value.trim() ? 'Field cannot be empty' : undefined;

export const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const validEmail = value =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Please enter a valid email address'
    : undefined;

export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};

export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';
