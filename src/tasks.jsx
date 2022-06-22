import React from "react";

class Task extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount () {

    }
    render () {
        return (
            <div className="task-box">
                <h4 className="task-title">{this.props.task_title}</h4>
                {/* <div>{}</div> */}
                <input type="checkbox" value={this.props.task_completed} id="task-completed-checkbox" />
            </div>
        )
    }
}

export default Task