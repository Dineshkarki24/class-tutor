import React from "react";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import UnControlForm from "./components/unControlForm";
import Counter from "./components/counter";
import AddToCart from "./components/AddToCartCount";
const OtherComponents = React.lazy(() =>
  import("./components/OtherComponents")
);

// import Modal from "./components/Modal";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactList: [],
      count: 0,
      isLoading: true,
    };
    console.log("Constructoe pahase run!!");
  }

  handleClick = () => {
    console.log("Click");
    // this.state.count = 1;
    // state update method
    this.setState({ count: this.state.count + 10 });
  };

  // parent ma data lerako child bata
  handleSubmit = (formData, { resetForm }) => {
    let newId = this.state.contactList.length + 1;
    let newFormData = { id: newId, ...formData };
    this.setState({ contactList: [newFormData, ...this.state.contactList] });
    resetForm();
    toast.success("Inserted Successfully");

    // methods
    // post , put ,delete,get
    // sending data to backend

    Axios.post("http://localhost:5000/api/v1/contacts", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    console.log("called from parent");
    console.log(id);
    // let filterContact = this.state.contactList.filter((contact) => {
    //   return contact.id !== id;
    // });
    // console.log(filterContact);
    // this.setState({ contactList: filterContact });
  };
  componentDidMount() {
    this.getContact();
    console.log("COmponent did mount called");
  }
  getContact = () => {
    Axios.get("http://localhost:5000/api/v1/contacts")
      .then((res) => {
        this.setState({ contactList: res.data.data });
        console.log(res.data.data);
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };
  componentDidUpdate(prevProps, preState) {
    console.log("Upldate called ");
    console.log(preState);
    console.log(prevProps);
  }
  render() {
    console.log("Render called");
    return (
      <div>
        <AddToCart />
        <Counter name="hello" />
        <UnControlForm name={[]} age={22} />
        <ContactForm name={222} onSubmit={this.handleSubmit} />
        {this.state.isLoading && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {this.state.contactList.map((data) => {
          return (
            <Contact
              onDelete={this.handleDelete}
              key={data._id}
              contact={data}
            />
          );
        })}
        {/* <Contact contact={this.state.contactList[0  ]}>Hello</Contact> */}
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClick}> Increment</button>
        {/* <h1>{this.state.contactList[0].email} </h1> */}
        {/* {this.state.contactList.map(function (contact) {
          console.log(contact);
          return (
            <div>
              <h6>{contact.name}</h6>
              <h6>{contact.email}</h6>
            </div>
          );
        })} */}
        <ToastContainer />
        <React.Suspense fallback={<h1>Loding ....</h1>}>
          <OtherComponents />
        </React.Suspense>
      </div>
    );
  }
}

// ReactDOM.createPortal(<Modal />, <App />);
export default App;
// let numbers = [1, 2, 3, 4]
// console.log(numbers[0])
