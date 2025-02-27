import Header from './components/Header';
import EmployeesProvider from './contexts/EmployeesContext/EmployeesProvider';
import EmployeesTable from './pages/EmployeesTable';

function App() {
  return (
    <EmployeesProvider>
      <Header />
      <EmployeesTable />
    </EmployeesProvider>
  );
}

export default App;
