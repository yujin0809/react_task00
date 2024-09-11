import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, onDel, onEdit, onSave, onMode }) => {
    return (
        <ul className="TodoList">
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} onEdit={onEdit} onDel={onDel} onMode={onMode} onSave={onSave} />
            ))}
        </ul>
    );
};

export default TodoList;
