import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Educacion from "./components/Educacion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <Home />
        <SobreMi />
        <Proyectos />
        <Educacion />
        <Contacto />
      </div>
      <Footer />
    </>
  );
}

export default App;
