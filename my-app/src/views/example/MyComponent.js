import React from 'react'
import AddComponent from './AddComponent'
import ChildComponent from './ChildComponent'

class MyComponent extends React.Component {

    state = {
        jobs: [
            { id: "1312asd", role: "Dev", salary: "2000$" },
            { id: "1232asd", role: "Test", salary: "3000$" },
            { id: "1a32asd", role: "Manager", salary: "20000$" },
        ]
    }

    addJob = (job) => {
        console.log(job);
        this.setState({
            jobs: [...this.state.jobs, job],
        })
    }

    render() {
        return (
            <>
                <AddComponent addJob={this.addJob} />
                <ChildComponent jobs={this.state.jobs} />
            </>
        )
    }
}

export default MyComponent;