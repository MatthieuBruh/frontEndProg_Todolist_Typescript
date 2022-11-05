import { Todo } from "./interfaces";

function Todotable( props: { todos: Todo[], deleteToDo: (index: number) => void } ) {

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
                    props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <td>
                                <button onClick={() => { props.deleteToDo(index) }} >Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Todotable;