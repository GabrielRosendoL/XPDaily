import { useEffect, useState } from 'react';

const HelloMessage = () => {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:5274/api/hello')
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Mensagem do backend:</h2>
      <p>{mensagem}</p>
    </div>
  );
};

export default HelloMessage;
