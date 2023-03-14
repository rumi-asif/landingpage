import React from "react";
import Navbar from "./Navbar";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Fields from "./components/Fields";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  const contentArray = [
    {text: "The sun sets behind the distant mountains, casting a warm golden glow across the fields below. In the distance, a flock of birds takes flight, their wings beating in unison as they soar towards the horizon."},
    {text: "The cool breeze rustles through the leaves of the trees, creating a gentle whispering sound. A small stream trickles nearby, its clear waters reflecting the dappled sunlight filtering through the branches"}
  ];

  return (
  <>
    <Navbar/>
    <Header title={"The Heading is yet to came"}/>
    {contentArray.map((content, index) => (
        <Paragraph key={index} content={content} />
      ))}
    <Fields/>
    <Cards/>
    <Footer/>
      
    </>
  )
}
export default App;
