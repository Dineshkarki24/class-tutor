import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

class UnControlForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleNameChange = createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.handleNameChange.current.value);
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                ref={this.handleNameChange}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

UnControlForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UnControlForm;
