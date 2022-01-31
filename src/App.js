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

  adicionarComentario = () => {
  console.log("Adicionando comentário")

    const novoComentario = {
      nome: "maria",
      email: "maria@mail.com",
      data: new Date(),
      mensagem: "olá pessoal" 
    }

   //let lista = this.state.comentarios
   //lista.push(novoComentario);

   //this.setState({
     //comentarios:lista
  // })
    this.setState({
      comentarios:[...this.state.comentarios, novoComentario]
    })

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

        <button onClick={this.adicionarComentario}>Adicionar um Comentário</button>
      </div>
    )
  };
}

export default App;
