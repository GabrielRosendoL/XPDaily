import { useEffect, useState } from 'react';
import styles from './HelloMessage.module.css';

const HelloMessage = () => {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:5274/api/hello')
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mensagem do backend:</h2>
      <p className={styles.text}>{mensagem}</p>
    </div>
  );
};

export default HelloMessage;
