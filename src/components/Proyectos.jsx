import "../style/Proyectos.css";
import country from "../assets/countriesSPA1.png";
import dogs from "../assets/dogsSPA1.png";
import pokemon from "../assets/pokemonSPA1.png";
import videogame from "../assets/videogamesSPA1.png";

const Proyectos = () => {
  return (
    <div id="proyectos">
      <h1>PROYECTOS ACADÉMICOS</h1>
      <div className="proyecto">
        <img src={country} alt="" />
        <p>
          SPA de tematica bandera de paises y actividades turisticas. En primera
          instacia consume datos de la api restcountries y los almacene en la
          base de datos. Se puede filtrar paises por actividad, continente.
          Ordenar por nombre y cantidad de poblacion. Realizar busqueda por
          nombre. Ver informacion mas detallada de cada pais y crear actividades
          turisticas. <br />
          <b>TECNOLOGÍAS:</b> Node, Express, React, Redux, Bootstrap, Postgres,
          Sequelize. <br />
          <b>DEPLOY:</b>{" "}
          <a href="https://countries-spa-plum.vercel.app/" target="_blank">
            https://countries-spa-plum.vercel.app/
          </a>
        </p>
      </div>
      <div className="proyecto">
        <img src={dogs} alt="" />
        <p>
          SPA sobre razas de perros. Consume datos de la api the dog api. Se
          puede filtrar por temperamento, origen (api o db). Ordenar por nombre
          y peso. Realizar busqueda por nombre. Ver informacion mas detallada de
          cada raza y crear nuevas razas. <br />
          <b>TECNOLOGÍAS:</b> Node, Express, React, Redux, Bootstrap, Postgres,
          Sequelize. <br />
          <b>DEPLOY:</b>{" "}
          <a href="https://dogs-spa-ten.vercel.app/" target="_blank">
            https://dogs-spa-ten.vercel.app/
          </a>
        </p>
      </div>
      <div className="proyecto">
        <img src={pokemon} alt="" />
        <p>
          SPA de Pokémon. Consume datos de la api pokeapi realizando subrequest.
          Se puede filtrar por tipo, origen (api o db). Ordenar por nombre y
          puntos de ataque. Realizar busqueda por nombre exacto. Ver informacion
          mas detallada de cada pokémon y crear nuevos pokémons. <br />
          <b>TECNOLOGÍAS:</b> Node, Express, React, Redux, Bootstrap, Postgres,
          Sequelize. <br />
          <b>DEPLOY:</b>{" "}
          <a href="https://pokemon-spa-sooty.vercel.app/" target="_blank">
            https://pokemon-spa-sooty.vercel.app/
          </a>
        </p>
      </div>
      <div className="proyecto box">
        <img src={videogame} alt="" />
        <p>
          SPA de tematica videojuegos. Consume datos de la api rawg. Se puede
          filtrar por genero, origen (api o db). Ordenar por nombre y
          puntuacion. Realizar busqueda por nombre. Ver informacion mas
          detallada de cada videojuego y crear nuevos videojuegos. <br />
          <b>TECNOLOGÍAS:</b> Node, Express, React, Redux, Bootstrap, Postgres,
          Sequelize. <br />
          <b>DEPLOY:</b>{" "}
          <a href="https://videogames-spa-seven.vercel.app/" target="_blank">
            https://videogames-spa-seven.vercel.app/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Proyectos;
