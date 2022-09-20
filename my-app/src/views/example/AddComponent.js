import React from 'react';

class AddComponent extends React.Component {

    state = {
        role: '',
        salary: '',
    }

    handleRoleChange = (event) => {
        this.setState({
            role: event.target.value,
        })
    }

    handleSalaryChange = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleOnClick = (event) => {
        event.preventDefault();
        alert("Click me");
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addJob({
            id: Math.floor(Math.random() * 1001),
            role: this.state.role,
            salary: this.state.salary
        });
    }

    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Role:</label>
                    <input type="text" id="fname"
                        name="fname" value={this.state.role}
                        onChange={(event) => this.handleRoleChange(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label>
                    <input type="text" id="lname"
                        name="lname" value={this.state.salary}
                        onChange={(event) => this.handleSalaryChange(event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleOnSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;