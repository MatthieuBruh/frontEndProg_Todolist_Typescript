import { useState, useRef } from "react";
import Todotable from "./Todotable";
import { Todo } from "./interfaces";

function Todolist() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<Todo>({ description: "", date: "", priority: "" });

    const addToDo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "", priority: "" });
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
                <Todotable todos={todos} />
            </div>
        </div>
    );
}

export default Todolist;