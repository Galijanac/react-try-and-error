import logo from './logo.svg';
import './App.css';
import menus from './components/tree-view/data.js'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode/index.jsx';
import ScrollIndicator from './components/scroll-indicator/index.jsx';

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
        {/* <LoadMoreData /> */}

        {/* Tree View components */}
        {/* <TreeView menus = {menus}/> */}

        {/* QR Code Generator component */}
        {/* <QRCodeGenerator /> */}

        {/* Light Dark Mode component */}
        {/* <LightDarkMode /> */}

        {/* Scroll indicator component */}
        <ScrollIndicator url = "https://dummyjson.com/products?limit=100" />

    </div>
  );
}

export default App;
