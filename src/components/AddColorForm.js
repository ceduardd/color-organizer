import React from 'react';
import useInput from '../hooks/useInput';
import 'bootstrap';

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const [propsTitle, resetTitle] = useInput('');
  const [propsColor, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(propsTitle.value, propsColor.value);
    resetTitle();
    resetColor();
  };

  return (
    <form className='form-group' onSubmit={submit}>
      <input
        {...propsTitle}
        type='text'
        placeholder='Type a color title'
        required
      />
      <input {...propsColor} type='color' required />
      <button>Add</button>
    </form>
  );
};

export default AddColorForm;
