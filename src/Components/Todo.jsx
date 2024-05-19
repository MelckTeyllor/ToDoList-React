import React, { useState } from 'react';
import './Todo.css'; 

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="container">
      <h2 className="heading">Lista de Tarefas</h2>
      <div className="input-container">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          className="input-field"
        />
        <button onClick={adicionarTarefa} className="add-button">
          Adicionar
        </button>
      </div>
      <ul className="task-list">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{tarefa}</span>
            <button onClick={() => removerTarefa(index)} className="remove-button">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;