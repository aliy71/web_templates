import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { About, Home, Templates } from "../views";

const App = () => {
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exactly={true} path="/template" element={<Templates />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;