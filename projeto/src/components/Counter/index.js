import React from "react";

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `Houveram ${this.state.count} cliques`;
        console.log('início /  montagem');

    }

    componentDidUpdate() {
        document.title = `Houveram ${this.state.count} cliques`;
        console.log('atualização');
    }

    render() {
        return (
            <React.Fragment>
                <h2>Componente de Classe</h2>
                <p>Houveram {this.state.count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> Aumentar cliques </button>
            </React.Fragment>
        )
    }

}

export default Counter;