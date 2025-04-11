"use client";

import styles from "./TaskList.module.css";

interface Task {
  id: number;
  title: string;
  description: string;
}

interface Props {
  tasks: Task[];
  onDelete: () => void;
}

export default function TaskList({ tasks, onDelete }: Props) {
  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    onDelete();
  };

  return (
    <div className={styles.list}>
      {tasks.length === 0 && <p>No tasks yet! 🎉</p>}
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskCard}>
          <h3 className={styles.taskTitle}>{task.title}</h3>
          <p className={styles.taskDescription}>{task.description}</p>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(task.id)}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
