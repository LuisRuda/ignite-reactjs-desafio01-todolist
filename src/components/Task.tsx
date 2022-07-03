import React from 'react';

import { Trash } from 'phosphor-react'

import styles from './Task.module.css';

import { ITask } from '../App';

interface ITaskProps {
  data: ITask;
}

const Task: React.FC<ITaskProps> = ({data}) => {
  return (
    <div className={styles.taskContainer}>
      <input 
        type="radio"
        checked={data.concluded}
        onChange={event => console.log(event)} />
      <span>{data.text}</span>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}

export { Task };