const phoneNumberFormat = (phoneNumber: string) => {
  const match = phoneNumber.match(/^(\d{2})(\d{2})(\d{8,9})$/);

  console.log(phoneNumber);
  if (!match) {
    return phoneNumber;
  }

  const [, countryCode, areaCode, number] = match;
  return `+${countryCode} (${areaCode}) ${number}`;
};

export default phoneNumberFormat;
