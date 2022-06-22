import React from "react";

class CreatTask extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            task_title: "",
            task_description: "",
            task_completed : false,
            task_created_date : "",
        }
        this.handleCreate = this.handleSubmit.bind()
    }
    componentDidMount() {
        this.setState({task_title:"",task_description:"",task_completed:false,task_created_date:""})
    }
    handleSubmit(event) {

    }
    render () {
        return (
            <div>
                <div>Task title</div>
                <input type="text" value={this.state.task_title} id="title-input" />
                <br />
                <div>Task Description</div>
                <textarea value={this.state.task_description} id="descritpion_input" cols="30" rows="10"></textarea>
            </div>
        )
    }
}