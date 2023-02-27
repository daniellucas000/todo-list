import { BsTrash } from 'react-icons/bs';
import style from '../components/Task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Task({ task, onDeleteTask, onCompletedTaks }) {
  function handleClick() {
    onDeleteTask(task.id);
  }

  function handleCheckedTask() {
    onCompletedTaks(task.id);
  }

  return (
    <div className={style.task}>
      <div>
        <button className={style.checkButton} onClick={handleCheckedTask}>
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>
        <p className={task.isCompleted ? style.isCompleted : ''}>
          {task.title}
        </p>
      </div>

      <button onClick={handleClick}>
        <BsTrash size={20} />
      </button>
    </div>
  );
}
