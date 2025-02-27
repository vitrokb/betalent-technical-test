import { createContext } from 'react';
import { EmployeesContextType } from '../../types/types';

export const EmployeesContext = createContext<EmployeesContextType | undefined>(undefined);
