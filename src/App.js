import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';

function App() {
  return (
    <div className="App">
        {/* Accordian component */}
        {/* <Accordian/> */}
        {/* Random color component */}
        {/* <RandomColor/> */}
        {/* Star rating component */}
        <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
