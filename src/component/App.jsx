import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

import Menu from "./Menu/Menu";
import Banner from "./Banner";
import Popularbooks from "./Popularbooks/Popularbooks";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Newarrivals from "./Newarrivals/Newarrivals";

function App() {
  return (
    <div>
      <Heading />
      <Menu />
      <Banner />
      <Popularbooks /><hr/>
      <Newarrivals/>
      <Reviews />
      <Footer/>

      
    </div>
  );
}

export default App;
