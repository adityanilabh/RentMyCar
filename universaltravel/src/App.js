import React from "react";
import Navigation from "./Components/Navigation";
import Intro from "./Components/Intro";
import Testimonials from "./Components/Testimonials";
import { About } from "./Components/About";
import DownloadApp from "./Components/DownloadApp";
import Driver from "./Components/Driver";
import Registration from "./Components/Registration";
import "./Components/App.css";
function App() {
  return (
    <>
      <Navigation />
      <Registration />
      <Intro />
      <DownloadApp />
      <Driver />
      <Testimonials />
      <About />
    </>
  );
}

export default App;
