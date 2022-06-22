import React from "react";
import Task from './tasks'
import AddTask from "./add-task";
import './App.css'

class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    componentDidMount () {
        this.setState({tasks:[
            {
                task_id: 1,
                task_title: "Learn React",
                task_created: Date.now(),
                task_completed: false
            },
            {
                task_id: 2,
                task_title: "learn Route in react",
                task_created: Date.now(),
                task_completed: false
            },
            {
                task_id: 3,
                task_title: "learn state management in react",
                task_created: Date.now(),
                task_completed: false
            },
            {
                task_id: 4,
                task_title: "learn redux in react",
                task_created: Date.now(),
                task_completed: false
            },
            {
                task_id: 5,
                task_title: "learn nodejs for api creation",
                task_created: Date.now(),
                task_completed: false
            },
            {
                task_id: 6,
                task_title: "learn PHP for API creation",
                task_created: Date.now(),
                task_completed: false
            }

        ]})
    }
    render () {
        const tasks = this.state.tasks.map((task) => {
            return <Task key={task.task_id} task_id={task.task_id} task_title={task.task_title} task_created={task.task_created} task_completed={task.task_completed}></Task>
        })
        return (
            <div className="todo-list">
                {tasks}
                <AddTask></AddTask>
            </div>
        )
    }
    
}

export default TodoList