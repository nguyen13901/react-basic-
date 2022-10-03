import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    detailUser: "",
    supportUser: "",
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      if (res && res.data && res.data) {
        this.setState({
          detailUser: res.data.data ? res.data.data : "",
          supportUser: res.data.support ? res.data.support : "",
        });
      }
    }
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    let { detailUser, supportUser } = this.state;
    let emptyObj = Object.keys(detailUser).length === 0;
    return (
      <>
        {emptyObj === false ? (
          <div className="child">
            <div>
              Name: {detailUser.first_name} {detailUser.last_name}
            </div>
            <div>Avatar: </div>
            <img src={detailUser.avatar} alt="avatar" />
            <div>
              <a href={supportUser.url} target="blank">
                Support: {supportUser.url}
              </a>
            </div>
            <div>Sologan: {supportUser.text}</div>
          </div>
        ) : (
          <div>User not found</div>
        )}
        <button onClick={() => this.handleGoBack()}>Go back</button>
      </>
    );
  }
}

export default withRouter(DetailUser);
