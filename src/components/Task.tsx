import React from 'react';

import styles from './Task.module.css';

import { Trash } from 'phosphor-react'

const Task: React.FC = () => {
  return (
    <div className={styles.taskContainer}>
      <input type="radio" />
      <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</span>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}

export { Task };