import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import moment from 'moment/moment';

const TodoItem = ({ item, index, onDelete, onComplete }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  const handleComplete = () => {
    onComplete(index);
  };

  return (
    <div className='container todo todo-list d-flex' style={{ alignItems: 'center' }}>
      <div className='p1 p-2 m-4'>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div>
      <div className='p2 p-2 m-4'>
        <h5>Created at: </h5>
        <span>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
      <div className='icons p-2 '>
        <AiOutlineDelete className='delete icon' onClick={handleDelete} />
        <BsCheck2Circle className='check icon' onClick={handleComplete} />
      </div>
    </div>
  );
};

export default TodoItem;
