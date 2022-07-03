import { useState, ChangeEvent, FormEvent, InvalidEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import listEmptyIcon from './assets/list-empty-icon.svg';

import styles from './App.module.css';

import './global.css';

export interface ITask {
  id: string;
  text: string;
  concluded: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: newTaskText,
      concluded: false,
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
    setNewTaskText('');
  }

  const checkOrUncheckTask = (taskId: string) => {
    setTasks(oldTasks => oldTasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          concluded: !task.concluded,
        }
      }
      return task;
    }));
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const tasksEmpty = tasks.length === 0;
  const newTaskEmpty = newTaskText.length === 0;
  const tasksConcludedCounter = tasks.filter(task => task.concluded).length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask}>
          <input
            required
            type="text"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            placeholder="Adicione uma nova tarefa" />
          <button type="submit" disabled={newTaskEmpty}>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.listHeader}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.concluded}>
            <strong>Concluídas</strong>
            <span>
              {tasksEmpty ? 0 : `${tasksConcludedCounter} de ${tasks.length}`}
            </span>
          </div>
        </div>

        <main>
          <ul>
            {!tasksEmpty && tasks.map(task => (
              <Task 
                key={task.id}
                data={task}
                onCheckOrUncheckTask={checkOrUncheckTask}/>
            ))}
          </ul>

          {tasksEmpty && (
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