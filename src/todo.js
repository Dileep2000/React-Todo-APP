import React from "react";
// import Search from "./search";
import TodoList from "./todo-list";

class Todo extends React.Component {
    componentDidMount () {
        
    };
    render () {
        return (
            <div>
                {/* <Search></Search> */}
                <TodoList></TodoList>
            </div>
        )
    }
}

export default Todo