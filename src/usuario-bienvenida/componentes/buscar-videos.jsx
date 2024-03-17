import '../../index.css';

export function BuscarVideos() {
  return (
    <div className="container border-primary rounded-5 p-3">
      <div className="input-group mb-3">

        <input
          type="search"
          className="form-control rounded-pill"
          placeholder="Buscar un tema"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <strong>En vivo</strong>
      <div className="container">
        <div className="row row-cols-3">
            {/* Inicio del video card */}
          <div className="card border-none">
            <video width="100%" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <p className="card-text">
                Suma conocimientos de una manera sencilla y agradable.
              </p>
              <div className='d-grid'>
                <button className="btn btn-dark">Ver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
