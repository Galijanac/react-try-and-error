import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';

function App() {
  return (
    <div className="App">
        {/* Accordian component */}
        {/* <Accordian/> */}

        {/* Random color component */}
        {/* <RandomColor/> */}

        {/* Star rating component */}
        {/* <StarRating noOfStars={10}/> */}

        {/* Image Slider component */}
        {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit = {"10"} page = {"1"}/> */}

        {/* Load More product components  */}
        <LoadMoreData />

    </div>
  );
}

export default App;
