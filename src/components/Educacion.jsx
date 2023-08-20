import "../style/Educacion.css";
import henry from "../assets/certHenry.png";
import argentina from "../assets/certificadoYoProgramo.png";

const Educacion = () => {
  return (
    <div id="educacion">
      <h1>EDUCACIÓN</h1>
      <div className="educ">
        <p>
          • Full Stack Web Developer <br /> • Henry Bootcamp <br /> • Sep 2021 -
          Abr 2022
        </p>
        <img src={henry} alt="" />
      </div>
      <div className="educ">
        <p>
          • Perfil Web Full Stack Junior <br /> • Argentina Programa 4.0 <br />{" "}
          • Feb 2022 - Ago 2022
        </p>
        <img src={argentina} alt="" />
      </div>
    </div>
  );
};

export default Educacion;
