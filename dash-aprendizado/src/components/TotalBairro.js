
const bairros = [
  { nome: 'ALDEIA', valor: 3167 },
  { nome: 'TIMBI', valor: 3153 },
  { nome: 'BAIRRO NOVO', valor: 2821 },
  { nome: 'TABATINGA', valor: 1943 },
  { nome: 'VERA CRUZ', valor: 1632 },
  { nome: 'SANTA MONICA', valor: 1538 },
  { nome: 'BAIRRO DOS ESTADOS', valor: 1335 },
];

const TotalPorBairro = () => {
  
  const maxValor = Math.max(...bairros.map(b => b.valor));

  return (
    <div className="col-sm-12 bg-dark text-white shadow p-3" style={{ borderRadius: '40px' }}>
      <span className="fw-bold" style={{ fontWeight: 700 }}>
        Total de Registros por Bairro
      </span>

      <div className="col-sm-12" id="bairros-container">
        {bairros.map((bairro) => (
          <div key={bairro.nome} className="row mt-2 barraProgresso">
            <div className="col-sm-1 text-nowrap text-end">
              <span className="bairro-nome">{bairro.nome}</span>
            </div>

            <div className="col-sm-10" style={{ height: '30px' }}>
              <div className="progress" style={{ height: '100%', backgroundColor: 'transparent'  }}> 
                <div
                  className="progress-bar bg-info" 
                  role="progressbar"
                  style={{ width: `${(bairro.valor / maxValor) * 100}%`,}}
                ></div>
              </div>
            </div>

            <div className="col-sm-1 text-start">
              <span
                className="bairro-valor"
                data-bairro={bairro.nome}
                data-value={bairro.valor}
              >
                {bairro.valor}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalPorBairro;
