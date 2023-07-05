import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import ProductReviews from "./components/ProductReviews"
import Videos from "./components/Video.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"







function App() {

  return (
  <Router>
       <PreNavbar/>
       <Navbar />
       <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
       <Heading text="WELCOME TO MP STORE"/>
       <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu/>
       <Heading text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews={data.productReviews}/>
       <Heading text="VIDEOS"/>
       <Videos videos={data.videos}/>
       <Heading  text="IN THE PRESS"/>
       <Banner  banner={data.banner}/>
       <Footer footer={data.footer} />
       <Heading text="CREATED BY - MANISH PANWAR,FULL STACK DEVELOPER,THANKS !!!"/>

       
       


       
       

       
   </Router>

  );
}

export default App;