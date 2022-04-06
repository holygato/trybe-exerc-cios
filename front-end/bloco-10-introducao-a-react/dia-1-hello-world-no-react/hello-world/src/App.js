import React from 'react';
import './App.css';

const Task = (value, index) => {
  return (
    <li className="task" key={index} >{value}</li>
  );
}

const compromissos = ['Meditar', 'Fazer exercício', 'Estudar', 'Se alimentar'];

// const teste = compromissos.map(compromisso => Task(compromisso));
// console.log(teste);

class App extends React.Component {
  render(){
    return (
      <ul>{ compromissos.map(compromisso => Task(compromisso)) }</ul> 
    );
  }
}

export default App;
