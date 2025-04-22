import { useState, useEffect } from 'react';
import styles from './MainArea.module.css';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TasksState = {
  notCompleted: Task[];
  completed: Task[];
};

const MainArea = () => {
  const [tasks, setTasks] = useState<TasksState>({ notCompleted: [], completed: [] });
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5274/api/tasks')
      .then((res) => res.json())
      .then((data: TasksState) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    fetch('http://localhost:5274/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask }),
    })
      .then((res) => res.json())
      .then((data: TasksState) => setTasks(data))
      .catch((err) => console.error(err));

    setNewTask('');
  };

  const handleCompleteTask = (taskId: number) => {
    fetch(`http://localhost:5274/api/tasks/${taskId}/complete`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data: TasksState) => setTasks(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Área Principal</h1>

      <div className={styles.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa"
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.addButton}>
          Adicionar Tarefa
        </button>
      </div>

      <div className={styles.lists}>
        <div className={styles.list}>
          <h2>Não Concluída</h2>
          <ul>
            {tasks.notCompleted.map((task: Task) => (
              <li key={task.id}>
                {task.title}
                <button
                  onClick={() => handleCompleteTask(task.id)}
                  className={styles.completeButton}
                >
                  Finalizar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.list}>
          <h2>Concluída</h2>
          <ul>
            {tasks.completed.map((task: Task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainArea;