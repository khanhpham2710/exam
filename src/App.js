import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import ChemicalApp from './components/ChemicalApp/ChemicalApp';
import { addChemical } from './global/chemicalSlice';


function App() {
  return (
      <ChemicalApp />
  );
}

export default App;
