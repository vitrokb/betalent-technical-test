import './App.css';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow/TableRow';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title>Oi! :D</Title>
      <TableHeader>Oi! :D</TableHeader>
      <TableRow>Oi! :D</TableRow>
      <TableRow $bold>Oi! :D</TableRow>
    </>
  );
}

export default App;
