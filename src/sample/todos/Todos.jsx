import { useRef, useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const no = useRef(1);
    /* const [isMod, setIsMod] = useState(false); // 테스트 삭제 */

    // 추가
    const onAdd = (text) => {
        setTodos([...todos, { id: no.current++, text, isDone: false, isMod: false }]);
    };

    // 삭제
    const onDel = (id) => {
        // id 같은거 뺌
        setTodos(todos.filter((item) => item.id !== id));
    };

    // 수정
    const onEdit = (e, id) => {
        // e.target의 checked 구조분해
        const { checked } = e.target;
        setTodos(todos.map((item) => (item.id === id ? { ...item, isDone: checked } : item)));
    };

    // 데이터 수정
    const onMode = (id) => {
        // id가 같으면 isMod true
        setTodos(todos.map((item) => (item.id === id ? { ...item, isMod: true } : item)));
    };

    // 데이터 저장
    const onSave = (id, text) => {
        setTodos(todos.map((item) => (item.id === id ? { ...item, text, isMod: false } : item)));
    };

    return (
        <div className="Todos">
            <h2>할일 만들기</h2>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onEdit={onEdit} onMode={onMode} onSave={onSave} />
        </div>
    );
};

export default Todos;

/* 

1. css 처리는 html/css 처럼 전체 스타일 style.css 만들고
연결해서 사용가능 (모든 css style.css 관리) : 나쁜예
<< 유지보수, 재사용 힘듦

2. 보통은 
    컴포넌트 하나에 css(scss) 하나씩 연결 처리

3. 이후 설명...

*/
