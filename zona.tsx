interface Propiedades {
    num_zona: number;
    descrip: string;
    estado: boolean;
    lastOn: number;
    sensores: {
      temperatura: number;
      aceleracion: number;
      voltaje: number;
      distancia: number;
    };
  }
  
  function Zona({ num_zona, descrip, estado, lastOn, sensores }: Propiedades) {
    return (
      <div className="card h-90">
        <div className={estado ? "card-body text-bg-primary" : "card-body"}>
          <h5 className="card-title">Zona {num_zona}</h5>
          <p className="card-text">{descrip}</p>
          <ul>
            <li>Temperatura: {sensores.temperatura} °C</li>
            <li>Aceleración: {sensores.aceleracion} m/s²</li>
            <li>Voltaje: {sensores.voltaje} V</li>
            <li>Distancia: {sensores.distancia} cm</li>
          </ul>
          {estado ? (
            <a href="#" className="btn btn-secondary">
              Detener
            </a>
          ) : (
            <a href="#" className="btn btn-primary">
              Iniciar
            </a>
          )}
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            Última actualización: hace {lastOn} minutos
          </small>
        </div>
      </div>
    );
  }
  
  export default Zona;
  