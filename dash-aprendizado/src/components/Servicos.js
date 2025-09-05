
const servicos = [
  'Iluminação',
  'Drenagem',
  'Limpeza',
  'Tapa Buraco',
  'Manutenção',
  'Metralha',
  'Pavimentação',
];

const dadosTabela = [
  { nome: 'Controle Urbano', finalizados: 0, emAberto: 4, emAtendimento: 3 },
  { nome: 'Defesa Civil', finalizados: 3, emAberto: 8, emAtendimento: 5 },
  { nome: 'Drenagem/Canal', finalizados: 652, emAberto: 1855, emAtendimento: 322 },
  { nome: 'Geral', finalizados: 0, emAberto: 3, emAtendimento: 1 },
  { nome: 'Iluminação Pública', finalizados: 22129, emAberto: 1178, emAtendimento: 759 },
  { nome: 'Jurídico', finalizados: 5, emAberto: 4, emAtendimento: 1 },
  { nome: 'Limpeza Urbana', finalizados: 288, emAberto: 1856, emAtendimento: 3 },
  { nome: 'Manutenção', finalizados: 26, emAberto: 434, emAtendimento: 50 },
];

const Servicos = () => {
  return (
    <div className="col bg-dark text-white shadow p-3" style={{ borderRadius: '40px' }}>
      <div className="row">
        {/* Lista de serviços */}
        <div className="col-sm-1">
          <div className="fw-bold mb-2" style={{ fontWeight: 700 }}>
            Serviços
          </div>
          <div className="text-nowrap">
            {servicos.map((servico) => (
            <p key={servico}>{servico}</p>
          ))}
          </div>
          
        </div>

        {/* Tabela de dados */}
        <div className="col-sm-8">
          <table className="table table-sm table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Serviços</th>
                <th scope="col">Finalizados</th>
                <th scope="col">Em Aberto</th>
                <th scope="col">Em Atendimento</th>
              </tr>
            </thead>
            <tbody>
              {dadosTabela.map((item) => (
                <tr key={item.nome}>
                  <th scope="row" style={{ fontWeight: 400 }}>{item.nome}</th>
                  <td>{item.finalizados}</td>
                  <td>{item.emAberto}</td>
                  <td>{item.emAtendimento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
