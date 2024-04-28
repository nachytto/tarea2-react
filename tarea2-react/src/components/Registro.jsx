import SocialButton from './SocialButton';
import Formulario from './Formulario';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Registro = () => {
  return (
    <div className="contenedor-principal">
      <main>
        <h1>Crea una cuenta</h1>
        {/* Pasa diferentes iconos como propiedades */}
        <section className="contenedor-iconos">

          <section className="icono">
            <SocialButton icon={faFacebook} />
          </section>
          <section className="icono">
            <SocialButton icon={faGithub} />
          </section>
          <section className="icono">
            <SocialButton icon={faLinkedin} />
          </section>
          
        </section>
        <p>O usa tu email para registrarte</p>
        <Formulario />
      </main>
    </div>
  );
};