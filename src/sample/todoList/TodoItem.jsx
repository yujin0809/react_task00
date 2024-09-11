import { useState } from 'react';

const TodoItem = ({ item, onDel, onEdit, onMode, onSave }) => {
    const { id, text, isDone, isMod } = item;
    const [txt, setTxt] = useState(text);
    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                <input type="checkbox" checked={isDone} onChange={(e) => onEdit(e, id)} />
                {/* true면 수정버튼, false면 저장버튼 */}
                {!isMod ? (
                    <p>
                        <em>{text}</em>
                        <button onClick={() => onMode(id)}>수정</button>
                    </p>
                ) : (
                    <p>
                        <input style={{ width: 300 }} type="text" name="" id="" value={txt} onChange={(e) => setTxt(e.target.value)} />
                        {/*  부모로 어떻게 보내지?? >> 함수 인자로 보내서 연결하면됨. */}
                        <button onClick={() => onSave(id, txt)}>저장</button>
                    </p>
                )}
            </div>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
