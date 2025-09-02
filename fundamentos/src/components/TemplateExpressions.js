const TemplateExpressions = () => {
   const name = "Mateus"
   const idade = 27
   const data = {
        age: 27,
        job: "Dev Front"
   }

      console.log("Teste de console");
            console.log("Teste de console2");
    return(
        <div>
            <h1> <strong> Nome: </strong> {name},
            <br/><strong>Idade: </strong>{idade}</h1>
            <p>Você atua como: {data.job}</p>
         
        </div>
    )
}

export default TemplateExpressions;