// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import peliculasJson from "./peliculas.json";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;
  // ya no se ocupa esta variable
  // let peliculas = peliculasJson;

  // const buscarPelicula = async () => {
  //   let url = "https://lucasmoy.dev/data/react/peliculas.json";
  //   // let url =
  //   // ("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/blob/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json");
  //   // let url = "https://lucasmoy-dev.github.io/data/react/peliculas.json";

  //   const respuesta = await fetch(url, {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       Accept: "application/json",
  //       "content-Type": "application/json",
  //       // "Access-Control-Allow-Origin": "*",
  //       // Origin: "https://raw.githubusercontent.com",
  //       // Origin: "https://lucasmoy.dev",
  //     },
  //   });
  //   const json = await respuesta.json();
  //   alert(json);
  //   // debugger;
  // };

  //? Se ejecuta cada que se renderize la pagina web
  //? , [] es para que se ejecute unicamente con lamodificación de lo que esta en corchetes
  //? si los corchetes estan vacios solo se ejecuta cuando carge la pagina
  useEffect(() => {
    buscarPeliculas();
  }, []);
  const buscarPeliculas = () => {
    // let url = "https://lucasmoy.dev/data/react/peliculas.json";
    // let url =
    // ("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/blob/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json");
    // let url = "https://lucasmoy-dev.github.io/data/react/peliculas.json";

    fetch("https://lucasmoy.dev/data/react/peliculas.json")
      .then((res) => res.json())
      .then((data) => {
        let datos = data;
        setPeliculas(datos);
        // debugger;
      });
  };

  const getTotalPaginas = () => {
    // let cantidadTotalDePeliculas = peliculasJson.length;
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (
    <PageWrapper>
      {/* {<Pelicula
        titulo="OBLIVION"
        anio="2012"
        puntaje="8.0"
        duracion="2h31"
        fecha="2 May 2013"
        director="Antony Russo"
        actores="Robert Downey Jr.,Chris Evans, Chris Hemsworth"
      >
        Earth's mightiest heroes must come together and learn to fight as a team
        if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...
      </Pelicula>} */}

      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          puntaje={pelicula.puntaje}
          duracion={pelicula.duracion}
          fecha={pelicula.fecha}
          director={pelicula.director}
          actores={pelicula.actores}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      {/* {<Pelicula
        titulo="BLADE RUNNER"
        anio="2015"
        puntaje="7.3"
        duracion="2h15"
        fecha="2 June 2015"
        director="Antony Russo"
        actores="Robert Downey Jr.,Chris Evans, Chris Hemsworth"
      >
        When Tony Stark's world is torn apart by a formidable terrorist called
        the Mandarin, he starts an odyssey of rebuilding and retribution.
      </Pelicula> */}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
