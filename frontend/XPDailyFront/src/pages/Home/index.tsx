import styles from './Home.module.css';

const Home = () => {
  const handleStart = () => {
    console.log('Iniciar clicado!');
    // Aqui você pode redirecionar ou iniciar algo no futuro
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Projeto</h1>
      <button className={styles.button} onClick={handleStart}>
        Iniciar
      </button>
    </div>
  );
};

export default Home;
