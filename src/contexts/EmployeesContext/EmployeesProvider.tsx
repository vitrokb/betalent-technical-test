import React, { useReducer } from 'react';
import { EmployeesReducer } from './EmployeesReducer';
import { EmployeesContext } from './EmployeesContext';

type EmployeesProviderType = {
  children: React.ReactNode;
};

const initialState = {
  employees: null,
  error: null,
  loading: false,
  allEmployees: null,
};

const EmployeesProvider = ({ children }: EmployeesProviderType) => {
  const [state, dispatch] = useReducer(EmployeesReducer, initialState);

  return (
    <EmployeesContext.Provider value={{ state, dispatch }}>{children}</EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
