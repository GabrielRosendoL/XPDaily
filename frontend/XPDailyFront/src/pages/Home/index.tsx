import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/mainArea'); // Redireciona para a próxima página
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>XPDailyApp</h1>
      <button className={styles.button} onClick={handleStart}>
        Iniciar
      </button>
    </div>
  );
};

export default Home;