import style from '../components/TaskList.module.css';
import { Task } from './Task';
import Clipboard from '../assets/Clipboard.svg';

export function TaskList({ tasks, onDeleteTask, onCompletedTaks }) {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={style.taksContainer}>
      <div className={style.taksHeader}>
        <div>
          <span>Tarefas criadas</span>
          <span>{tasksAmount}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>
            {completedTasks} de {tasksAmount}
          </span>
        </div>
      </div>

      <div className={style.tasksContent}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onCompletedTaks={onCompletedTaks}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={style.noTask}>
            <img src={Clipboard} alt="Clipboard" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
