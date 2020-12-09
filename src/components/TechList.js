import React , {Component} from 'react'
import TechItem from './TechItem'

class TechList extends Component {
  //static defaultProps ={
   // tech: 'outro'
  //}
state = {
  newTech: '',
  // techs: ['Node','React','mobile']
  techs: []
}
//-- Ciclos de vida dos componentes --

// executado assim q o componente aparece em tela
// geralmente usado pra pegar dados da api
componentDidMount(){
  const techs = localStorage.getItem('techs')

  if(techs){
    this.setState({techs: JSON.parse(techs)})
  }
}

// executao sempre q houver alteracoes nas props ou estado
//this.props, this.state
// prevProps,prevState
componentDidUpdate(_,prevState){
  if(prevState.techs !== this.state.techs){
  localStorage.setItem('techs', JSON.stringify(this.state.techs))
  }
}

// executado qdo o componente deixa de existir
// usado para parar event  listen
//componentWillUnmount(){
//}

  handleinputChange = e => {
    // console.log(e.target.value);
    this.setState({ newTech:e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech:''
    })
  }
  handleDelete = (val) => {
    this.setState({techs: this.state.techs.filter(t => t !== val)})
  }
  render(){
  return (
    <>
    <form onSubmit={this.handleSubmit}>
    <h1>{this.state.newTech}</h1>
    <ul>
      <li>linha 1 </li>
      <li>linha 2</li>
      <li>linha 3</li>
    </ul>
    <input type="text"  onChange={this.handleinputChange}  value={this.state.newTech}/>
    {/** tem q criar uma funcao para chamar outra funcao, caso contrario ela auto executara */}
    <ul>
      {this.state.techs.map(val => 
      <TechItem key={val} tech={val} onDelete={() => this.handleDelete(val)} />
      )}
    </ul>
    <button type="submit" >Enviar</button>
    </form>
    </>
  );
}
}

export default TechList;