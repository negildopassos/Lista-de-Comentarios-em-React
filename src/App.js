import React, { Component } from 'react'
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: "Junior",
        email: "junior@mail.com",
        data: new Date(2022, 1, 31),
        mensagem: "Olá, tudo bem?"
      },
      {
        nome: "franciso",
        email: "francisco@mail.com",
        data: new Date(2022, 1, 29),
        mensagem: "Tudo e com você?"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key ={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data} >
            {comentario.mensagem}
          </Comentario>
        ))}

      </div>
    )
  };
}

export default App;
