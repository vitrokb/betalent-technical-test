import { useContext } from 'react';
import { EmployeesContextType } from '../../types/types';
import { EmployeesContext } from '../../contexts/EmployeesContext/EmployeesContext';

const useEmployees = (): EmployeesContextType => {
  const context = useContext(EmployeesContext);

  if (!context) {
    throw new Error('useEmployees must be used within a EmployeesProvider');
  }

  return context;
};

export default useEmployees;
