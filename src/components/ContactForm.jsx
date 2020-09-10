import React, { Component } from "react";
import { Formik } from "formik";
import { initialValue, validationSchema } from "./validationSchema";

class ContactForm extends Component {
  render() {
    return (
      <div className="card w-50 mx-auto">
        <div className="card-header">
          <h6>Contact Form</h6>
        </div>
        <div className="card-body">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, resetForm) => {
              this.props.onSubmit(values, resetForm);
            }}
          >
            {(props) => {
              return (
                <form onSubmit={props.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="name"
                      value={props.values.name}
                    />
                    {props.errors.name && props.touched.name && (
                      <span className="text-danger">{props.errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="email"
                      value={props.values.email}
                    />
                    {props.errors.email && props.touched.email && (
                      <span className="text-danger">{props.errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="phone"
                      value={props.values.phone}
                    />
                    {props.errors.phone && props.touched.phone && (
                      <span className="text-danger">{props.errors.phone}</span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Submit
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default ContactForm;
