import React, { Component } from 'react'
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: "Junior",
        email: "junior@mail.com",
        data: new Date(2022, 1, 31, 17,35,0),
        mensagem: "Olá, tudo bem?"
      },
      {
        nome: "franciso",
        email: "francisco@mail.com",
        data: new Date(2022, 1, 29, 14,25,0),
        mensagem: "Tudo e com você?"
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome:'',email:'', mensagem:''}
    })

  }


  removerComentario = comentario => {
    let lista= this.state.comentarios;
    lista = lista.filter(c=> c!== comentario)

    this.setState({comentarios: lista})
  }

  digitacao = evento => {
    const { name, value } = evento.target;

    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
  }




  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data} 
            onRemove={this.removerComentario.bind(this,comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}


        <form method='post' onSubmit={this.adicionarComentario} className = "Novo-Comentario" >
          <h2>Adicionar Comentario</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder='Digite Seu Nome' />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder='Digite Seu e-mail' />
            
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows="4" />
          </div>

          <button
            type="submit">Adicionar Comentário</button>

        </form>
      </div>
    )
  };
}

export default App;
