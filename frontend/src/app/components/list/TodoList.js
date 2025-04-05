import styles from './TodoList.module.css';
function TodoItem({todo}) {
    return <div className={styles['todo-container']}>
        {todo.title}
    </div>;
}

export default function TodoList({todos})
{
    return(<div>
        {/*{
            todos.map(todo=><div className={styles['todo-container']} key={todo.id}>
                {todo.title}
            </div>)
        }*/}
        {
            todos.map(todo=><TodoItem
                                key={todo.id}
                                todo={todo}/>)
        }

    </div>);
}