"use client";

import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getTasks } from "@/services/api";
import styles from "./page.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📝 Todo App</h1>
      <TaskForm onAdd={loadTasks} />
      <hr style={{ margin: "2rem 0" }} />
      <TaskList tasks={tasks} onDelete={loadTasks} />
    </div>
  );
}
