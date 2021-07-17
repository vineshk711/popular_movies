import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber} from './actions/index'

function App() {

  const myState = useSelector( (state) => state.changeTheNumber);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Movies</h1>
        <h3>Add and remove</h3>
        <div className="quantity">
          <a className="decrement"
            onClick={ ()=> dispatch(decNumber())}><span> - </span></a>
          <input type="text" className="quantity"  value = {myState}/>
          <a  className="increment"
            onClick={ () => dispatch(incNumber())} ><span> + </span></a>
        </div>
      </header>
    </div>
  );
}

export default App;
