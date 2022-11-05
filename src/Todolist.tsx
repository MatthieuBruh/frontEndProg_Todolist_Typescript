import { useState } from "react";
import Todotable from "./Todotable";
import { Todo } from "./interfaces";

function Todolist() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<Todo>({} as Todo);

    const addToDo = () => {
        setTodos([...todos, todo]);
        setTodo({description: '', date: '', priority: ''});
    };

    const deleteToDo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return(
        <div>
            <div>
                <input placeholder='description'
                    type="text"
                    value={todo.description}
                    onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                
                <input placeholder='date'
                    type="text"
                    value={todo.date}
                    onChange={(e) => setTodo({...todo, date: e.target.value})} />
                
                <input placeholder='priority'
                    type="text"
                    value={todo.priority}
                    onChange={(e) => setTodo({...todo, priority: e.target.value})} />
                
                <button onClick={addToDo}>Add</button>
            </div>

            <div>
                <Todotable todos={todos} deleteToDo={deleteToDo} />
            </div>
        </div>
    );
}

export default Todolist;