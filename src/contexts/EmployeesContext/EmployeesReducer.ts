import { EmployeesActionType, EmployeesStateType } from '../../types/types';

export const EmployeesReducer = (
  state: EmployeesStateType,
  action: EmployeesActionType
): EmployeesStateType => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { ...state, employees: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_ALL_EMPLOYEES':
      return { ...state, allEmployees: action.payload };
    default:
      return state;
  }
};
