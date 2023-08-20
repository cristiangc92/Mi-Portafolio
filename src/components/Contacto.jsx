import "../style/Contacto.css";
import qr from "../assets/qr-wpp.jpg";

const Contacto = () => {
  return (
    <div id="contacto">
      <h1>¡TRABAJEMOS JUNTOS!</h1>
      <h2>Email:</h2>
      <div className="contenedor">
        <h3>cristiangc92@gmail.com</h3>
      </div>
      <h2>Teléfono:</h2>
      <div className="contenedor">
        <h3>+543854836255</h3>
      </div>
      <img src={qr} alt="" />
    </div>
  );
};

export default Contacto;
