import { EmployeeType } from '../../types/types';
import phoneNumberFormat from '../phoneNumberFormat';

const searchInFields = (employee: EmployeeType[] | null, searchString: string): EmployeeType[] => {
  if (!employee) {
    return [];
  }

  return employee.filter(
    (person) =>
      person.job.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) ||
      person.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) ||
      phoneNumberFormat(person.phone).includes(searchString)
  );
};

export default searchInFields;
