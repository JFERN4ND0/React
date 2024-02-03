export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 1; i <= props.total; i++) {
      //   let pag = i + 1;
      resultado.push(
        <a
          onClick={() => props.onChange(i)}
          className={props.pagina === i ? "active" : ""}
          href="#"
        >
          {i}
        </a>
      );
    }
    return resultado;
  };

  return (
    // Para retornar varios elementos htm
    // <> etiquetas html </>
    <div className="topbar-filter">
      {/* <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select> */}
      <div className="pagination2">
        <span>
          Pagina {props.pagina} de {props.total}:
        </span>

        {getPaginas()}
      </div>
    </div>
  );
}
