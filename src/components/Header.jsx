import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import style from '../components/Header.module.css';
import todoLogo from '../assets/logo.svg';

export function Header({ onAddNewTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onAddNewTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <header className={style.header}>
        <div>
          <img src={todoLogo} alt="" />

          <form onSubmit={handleSubmit}>
            <input onChange={onChangeTitle} value={title} type="text" />
            <button>
              Criar
              <AiOutlinePlusCircle size={20}/>
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}
