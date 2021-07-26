import * as React from "react";
import Navigation from '../components/navigation';
import Header from '../components/header';
import '../scss/main.scss';
import About from "../components/about";

// markup
const App = () => {
  return (
    <main className="huba">
      <Navigation />
      <Header />
      <About/>
    </main>
  )
}

export default App;
