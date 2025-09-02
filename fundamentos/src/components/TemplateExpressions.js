const TemplateExpressions = () => {
   const name = "Mateus"
   const idade = 27
   const data = {
        age: 27,
        job: "Dev Front"
   }
    return(
        <div>
            <h1> <strong> Nome: </strong> {name},
            <br/><strong>Idade: </strong>{idade}</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("Teste de console")}</p>
            {console.log("Teste de console2")}
        </div>
    )
}

export default TemplateExpressions