import { Trash } from 'phosphor-react'

import styles from './Task.module.css';

import { ITask } from '../App';

interface ITaskProps {
  data: ITask;
  onCheckOrUncheckTask: (taskId: string) => void;
}

const Task: React.FC<ITaskProps> = ({ data, onCheckOrUncheckTask }) => {
  return (
    <li className={styles.taskContainer}>
      <input 
        readOnly
        type="radio"
        checked={data.concluded}
        onClick={() => onCheckOrUncheckTask(data.id)} />
      <span>{data.text}</span>
      <button>
        <Trash size={20} />
      </button>
    </li>
  );
}

export { Task };