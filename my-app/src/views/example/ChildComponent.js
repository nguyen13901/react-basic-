import React from 'react'

class ChildComponent extends React.Component {

    // a = ["Hello"];

    // handleFor = () => {
    //     console.log("Call func");
    //     for (let i = 0; i < this.data.jobs.length; i++) {
    //         this.a.push(<div>
    //             Id: {this.data.jobs[i].id},
    //             Role: {this.data.jobs[i].role},
    //             Salary: {this.data.jobs[i].salary}
    //         </div>)
    //     }
    // }
    state = {
        isShow: true,
    }

    handleShowAction = () => {
        this.setState({
            isShow: true
        })
    }

    handleHideAction = () => {
        this.setState({
            isShow: false
        });
    }

    handleDeleteAction = (job) => {
        this.props.deleteJob(job);
    }

    a = () => {
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);

        console.log(result);
        // expected output: Array ["exuberant", "destruction", "present"]

    }

    render() {
        let data = this.props.jobs;
        console.log(data);
        return (
            <>
                {!this.state.isShow &&
                    <div><button onClick={() => this.handleShowAction()}>Show</button></div>}
                {this.state.isShow &&
                    <>
                        <div>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            Id: {item.id},
                                            Role: {item.role},
                                            Salary: {item.salary}
                                            <button onClick={(item) => this.handleDeleteAction(item)}>X</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleHideAction()}>Hide</button></div>
                    </>
                }
                {/* <div>function: {this.a}</div> */}
            </>
        )
    }
}


// function component
/* const ChildComponent = (props) => {
    let data = props.data;
    return (
        <>
            <div>{console.log(props)}</div>
            <div>This is child.</div>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
            <div>
                {
                    data.jobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                Id: {item.id},
                                Role: {item.role},
                                Salary: {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
} */

export default ChildComponent;