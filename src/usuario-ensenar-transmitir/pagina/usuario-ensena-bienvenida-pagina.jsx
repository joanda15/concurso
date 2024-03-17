import { ChatGrupal } from "../chat-grupal";
import { NavFooter } from "../componentes/nav-footer";

export function UsuarioEnsenaBienvenidaPagina() {
  return (
    <div className="container">
        {/* Pagina usuario ensena bienvenida */}
      <div className="row">
        <div className="col-7">
          <video width="100%" height="600px" controls>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-5">
            <ChatGrupal />
        </div>
      </div>
      <div className="col-12">
        <NavFooter />
      </div>
    </div>
  );
}
