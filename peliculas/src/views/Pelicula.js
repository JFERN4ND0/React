export default function Pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src="images/uploads/mv1.jpg" alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {props.titulo}
            {/*  <span>({props.anio})</span> */}
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.puntaje}</span> /10
        </p>
        <p className="describe">{props.children}</p>
        <p className="run-time">
          Duracion: {props.duracion} . <span>MMPA: PG-13 </span> .{" "}
          <span>Fecha: {props.fecha}</span>
        </p>
        <p>
          Director: <a href="#">{props.director}</a>
        </p>
        <p>
          Stars: <a href="#">{props.actores}</a>
          {/*  <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a>{" "}
          <a href="#"> Chris Hemsworth</a> */}
        </p>
      </div>
    </div>
  );
}
