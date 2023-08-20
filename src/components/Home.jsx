import "../style/Home.css";
import perfil from "../assets/perfil4.jpg";
import Social from "./Social";

const Home = () => {
  return (
    <div id="home">
      <h2 className="tituloHome">
        Hola! 👋🏼
        <br />
        <br /> Me llamo <span>Cristian</span> <br />
        <br /> Full Stack <span>Web Developer</span>
      </h2>
      <Social />
      <img className="fotoPerfil" src={perfil} alt="" />
    </div>
  );
};

export default Home;
