import React, { Component } from "react";
import { BsFillTrash2Fill } from "react-icons/all";

class Contact extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.contact._id);
  };
  componentWillUnmount() {
    console.log("Unmount phase called");
  }
  render() {
    // console.log(this.props);
    return (
      <div className="card w-50 mx-auto mt-4">
        <div className="card-header">
          <h5>
            {this.props.contact.name}{" "}
            <div className="float-right">
              <BsFillTrash2Fill onClick={this.handleDelete} />
            </div>
          </h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">{this.props.contact.email}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
