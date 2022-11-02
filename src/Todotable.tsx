import React from "react";
import { Todo } from "./interfaces";


// Recieve the list of todos from Todolist.tsx
function Todotable( { todos }: { todos: Todo[] }) {
    return (
        <div>
            <table style={{ margin: '0 auto', width: '40%' }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Todotable;