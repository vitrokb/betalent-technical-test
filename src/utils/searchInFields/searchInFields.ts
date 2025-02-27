import { EmployeeType } from '../../types/types';

const searchInFields = (employee: EmployeeType[], searchString: string): EmployeeType[] => {
  if (!employee) {
    return [];
  }

  return employee.filter(
    (person) =>
      person.job.includes(searchString) ||
      person.name.includes(searchString) ||
      person.phone.includes(searchString)
  );
};

export default searchInFields;
