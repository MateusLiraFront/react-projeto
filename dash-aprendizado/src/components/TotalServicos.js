
const bairros = [
  { nome: 'Iluminação Pública', valor: 23835 },
  { nome: 'Drenagem', valor: 2799 },
  { nome: 'Limpeza Urbana', valor: 2231 },
  { nome: 'Tapa Buraco', valor: 1959 },
  { nome: 'Manutenção', valor: 515 },
  { nome: 'Metralha/Barragem', valor: 422 },
  { nome: 'Pavimentação', valor: 263 },
  { nome: 'Outros', valor: 43 },
];

const TotalServicos = () => {
  
  const maxValor = Math.max(...bairros.map(b => b.valor));

  return (
    <div className="col-sm-12 bg-dark text-white shadow p-3" style={{ borderRadius: '40px' }}>
      <span className="fw-bold" style={{ fontWeight: 700 }}>
        Total de Registros por Serviços
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
                  style={{ width: `${(bairro.valor / maxValor) * 100}%`,}}>
                  </div>
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

export default TotalServicos;
