import styles from './Header.module.css';

import todoLogo from '../assets/todo-logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Todo" />
    </header>
  );
}

export default Header;