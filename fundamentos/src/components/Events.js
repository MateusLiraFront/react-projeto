const Events = () => {
    const botaoEvento = (e) =>{
        console.log(e);
    };

    const renderSomething = (x) =>{
        if (x){
            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Infelizmente não posso renderizar isso!</h1>
        }
    }

    return (

        <div>
            <div>
                <br/><br/>
                <button onClick={botaoEvento}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true) {
                        console.log("Este botão não deveria existir =(")
                    }
                }}>Botao não</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};

export default Events;