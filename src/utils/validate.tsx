export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const checkValidData = (
  email: string | undefined,
  password: string | undefined,
  name?: string | undefined
): ValidationResult => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (name !== undefined) {
    if (!name || typeof name !== 'string') {
      return {
        isValid: false,
        error: 'Name is required and must be a string',
      };
    }

    if (name.length < 2) {
      return {
        isValid: false,
        error: 'Name must be at least 2 characters long',
      };
    }

    if (!nameRegex.test(name)) {
      return {
        isValid: false,
        error: 'Please enter a valid name',
      };
    }
  }
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      error: 'Email is required and must be a string',
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address',
    };
  }

  if (!password || typeof password !== 'string') {
    return {
      isValid: false,
      error: 'Password is required',
    };
  }

  if (!passwordRegex.test(password)) {
    return {
      isValid: false,
      error:
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
    };
  }

  return {
    isValid: true,
  };
};
