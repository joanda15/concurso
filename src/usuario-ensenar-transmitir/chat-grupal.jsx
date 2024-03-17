import '../index.css';
import userIcon from '../../src/images/user_icon.png';

export function ChatGrupal() {
  return (
    <div className="container border-primary rounded-55">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <h3>Chat destacado</h3>
          <span>
            <i class="bi bi-three-dots-vertical"></i>
          </span>
          <span>
            <i class="bi bi-x"></i>
          </span>
        </div>
        <hr />
        <div id="messages" className="d-flex flex-column">
          <div id="message" className="d-flex flex-row">
            <img
              className="rounded"
              src={userIcon}
              width={"50px"}
              height={"50px"}
              alt="user profile"
            />
            <p>Nombre de usuario</p>
            <strong>Wow, muy interesante</strong>
          </div>
        </div>
        <div className="input-group mb-3">
            <hr/>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe un mensaje para el anfitrion"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}
