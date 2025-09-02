const Events = () => {
    const botaoEvento = (e) =>{
        console.log(e);
    };

    return (

        <div>
            <div>
                <br/><br/>
                <button onClick={botaoEvento}>Clique aqui</button>
            </div>
        </div>
    );

};

export default Events;