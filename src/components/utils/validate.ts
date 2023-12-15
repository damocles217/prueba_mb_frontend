const validateJustLetters = (value: string, field: string) => {
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return {
      errorMessage: `El ${field} solo puede tener letras`,
    };
  }
};

const validateCurp = (value: string) => {
  if (value.length !== 18) {
    return {
      errorMessage: 'El CURP debe tener 18 caracteres',
    };
  }

  const regex = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/;

  if (!regex.test(value)) {
    return {
      errorMessage: 'El CURP no es valido',
    };
  }
  return {};
};

const validateRfc = (value: string) => {
  if (value.length !== 13) {
    return {
      errorMessage: 'El RFC debe tener 13 caracteres',
    };
  }

  const regex = /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/;

  if (!regex.test(value)) {
    return {
      errorMessage:
        'El RFC no es valido no es valido, verifique su longitud o formato',
    };
  }
  return {};
};

const validateOnlyNumbers = (value: string, field: string) => {
  if (!/\d{5}/.test(value)) {
    return {
      errorMessage: `El ${field} solo puede tener numeros`,
    };
  }
  return {};
};

const validateLength = (value: string, field: string) => {
  if (value.length > 10) {
    return {
      errorMessage: `El ${field} solo puede tener 10 caracteres`,
    };
  }

  if (value.length !== 0 && !/^[a-zA-Z0-9]{10}$/.test(value)) {
    return {
      errorMessage: `El ${field} solo puede tener numeros y letras`,
    };
  }
  return {};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allInputNamesObject: { [key: string]: any[] } = {
  firstSection: [
    {
      inputName: 'name',
      validation: validateJustLetters,
    },
    {
      inputName: 'firstSurname',
      validation: validateJustLetters,
    },
    {
      inputName: 'secondSurname',
      validation: validateJustLetters,
    },
  ],
  secondSection: [
    {
      inputName: 'curp',
      validation: validateCurp,
    },
    {
      inputName: 'rfc',
      validation: validateRfc,
    },
  ],
  thirdSection: [
    {
      inputName: 'postalCode',
      validation: validateOnlyNumbers,
    },
    {
      inputName: 'street',
      validation: () => ({}),
    },
  ],
  fourthSection: [
    {
      inputName: 'exteriorNumber',
      validation: validateOnlyNumbers,
    },
    {
      inputName: 'interiorNumber',
      validation: validateLength,
    },
    {
      inputName: 'state',
      validation: validateJustLetters,
    },
  ],
  fivethSection: [
    {
      inputName: 'region',
      validation: validateJustLetters,
    },
    {
      inputName: 'neighborhood',
      validation: validateJustLetters,
    },
  ],
};
