import { useRef, useState } from 'react';
import './TodoInput.scss';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef(null);

    const changeInput = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        // 공백이면 리턴.
        if (!text.trim()) return;

        onAdd(text);
        setText('');
        textRef.current.focus();
    };
    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input type="text" name="" id="" onChange={changeInput} value={text} ref={textRef} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
