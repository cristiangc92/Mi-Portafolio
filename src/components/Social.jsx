import "../style/Social.css";

function Social() {
  return (
    <div className="social">
      <a
        className="icono"
        href="https://www.linkedin.com/in/cristiancacciolatti/"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="icono"
        href="https://github.com/cristiangc92"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="icono"
        href="https://drive.google.com/file/d/1A2PR-r9_Iw0JpIKbLGyAx09qg_7asCds/view?usp=sharing"
        target="_blank"
      >
        CV
      </a>
    </div>
  );
}

export default Social;
