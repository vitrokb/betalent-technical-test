export type EmployeeType = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export type EmployeesStateType = {
  employees: EmployeeType[] | null;
  error?: string | null | boolean;
  loading: boolean;
  allEmployees: EmployeeType[] | null;
};

export type EmployeesActionType =
  | { type: 'SET_EMPLOYEES'; payload: EmployeeType[] | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_ALL_EMPLOYEES'; payload: EmployeeType[] };

export type EmployeesContextType = {
  state: EmployeesStateType;
  dispatch: React.Dispatch<EmployeesActionType>;
};
