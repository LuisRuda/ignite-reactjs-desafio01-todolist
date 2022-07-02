import { useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import listEmptyIcon from './assets/list-empty-icon.svg';

import styles from './App.module.css';

import './global.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">Criar <PlusCircle size={20} /></button>
        </form>

        <div className={styles.listHeader}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.concluded}>
            <strong>Concluídas</strong>
            <span>{`0 de ${tasks.length}`}</span>
          </div>
        </div>

        <main>
          {tasks.length > 0 && tasks.map(task => (
            <Task />
          ))}

          {tasks.length === 0 && (
            <div className={styles.listEmptyContainer}>
              <img src={listEmptyIcon} alt="Lista vazia" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus items a fazer</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;