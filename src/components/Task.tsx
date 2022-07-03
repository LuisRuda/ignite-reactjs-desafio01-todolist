import { Trash } from 'phosphor-react'

import styles from './Task.module.css';

import { ITask } from '../App';

interface ITaskProps {
  data: ITask;
  onRemoveTask: (taskId: string) => void;
  onCheckOrUncheckTask: (taskId: string) => void;
}

const Task: React.FC<ITaskProps> = ({ data, onCheckOrUncheckTask, onRemoveTask }) => {
  return (
    <li className={styles.taskContainer}>
      <input 
        readOnly
        type="radio"
        checked={data.concluded}
        onClick={() => onCheckOrUncheckTask(data.id)} />
      <span 
        className={data.concluded ? styles.taskConcludedText : styles.taskText}>
          {data.text}
      </span>
      <button onClick={() => onRemoveTask(data.id)}>
        <Trash size={20} />
      </button>
    </li>
  );
}

export { Task };