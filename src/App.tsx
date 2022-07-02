import { PlusCircle } from 'phosphor-react';

import Header from './components/Header';

import styles from './App.module.css';

import './global.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">Criar <PlusCircle size={20} /></button>
        </form>

        <main></main>
      </div>
    </div>
  );
}

export default App;