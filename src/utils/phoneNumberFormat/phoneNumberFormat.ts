const phoneNumberFormat = (phoneNumber?: string) => {
  if (!phoneNumber) {
    return '';
  }

  const match = phoneNumber?.match(/^(\d{2})(\d{2})(\d{8,9})$/);

  if (!match) {
    return phoneNumber;
  }

  const [, countryCode, areaCode, number] = match;
  return `+${countryCode} (${areaCode}) ${number}`;
};

export default phoneNumberFormat;
