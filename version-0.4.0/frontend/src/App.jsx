// import React from 'react';
// import './App.css';
// // import Navigation from './components/Navigation';
// // // import Footer from './components/Footer';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './pages';
// // import About from './pages/about';
// // import Blogs from './pages/blogs';
// // import SignUp from './pages/signup';
// // import Contact from './pages/contact';
// // import Storefront from './pages/storefront';


// function App() {
//   return (
//     // <Router>
//     //   <Navigation/>
//     //   <Routes>
//     //     <Route exact path="/" element={<Home />} />
//     //     <Route path="/about" element={<About />} />
//     //     <Route path="/contact" element={<Contact />} />
//     //     <Route path="/blogs" element={<Blogs />} />
//     //     <Route path="/sign-up" element={<SignUp />} />
//     //     <Route path="/storefront" element={<Storefront />} />
//     //   </Routes>
//     //   {/* <Footer/> */}
//     // </Router>
//       <h1> hello world</h1>
  
//     );
// }

// export default App;

// import React, { Component, Fragment } from "react";
// import Header from "./components/Header";
// import Home from "./components/Home";

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Header />
//         <Home />
//       </Fragment>
//     );
//   }
// }

// export default App;


// import React, { Component } from "react"

// const todoItems = [
//   {
//     id: 1,
//     title: "Nature walk in the park",
//     description: "Visit the park with my friends",
//     completed: true
//   },

//   {
//     id: 2,
//     title: "Visit",
//     description: "Got to my aunt's place",
//     completed: true
//   },

//   {
//     id: 3,
//     title: "Write",
//     description: "Do an article about anthropology",
//     completed: true
//   },
// ];

// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {todoItems};
//     };

//     render() {
//       return (
//         <main className="content">
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <ul className="list-group list-group-flush">
//               {this.state.todoItems.map(item => (
//               <div>
//                 <h1>{item.title}</h1>
//                 <span>{item.description}</span>
//               </div>
//               ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//       )
//     }
//   }
  
// export default App;


import React, { Component } from "react"
import Modal from "./components/Modal"; 
import axios from "axios";

class App extends Component {
    state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
    };

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/todos/');
        const todoList = await res.json();
        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
    }
    }

    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };
  
    //Responsible for saving the task
    handleSubmit = item => {
      this.toggle();
      if (item.id) {
        axios
          .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        return;  
      }
      axios
        .post("http://localhost:8000/api/todos/", item)
    };

    createItem = () => {
      const item = {title: "", description: "", completed: false };
      this.setState({ activeItem: item, modal: !this.state.modal });
    };

    displayCompleted = status => {
      if (status) {
        return this.setState({ viewCompleted: true});
      }
      return this.setState({ viewCompleted: false});
    };
    renderTabList = () => {
      return (
        <div className="my-5 tab-list">
          <button 
            onClick={() => this.displayCompleted(true)}
            className={this.state.viewCompleted ? "active" : ""}
          >
            Complete
          </button>
          <button 
            onClick={() => this.displayCompleted(false)}
            className={this.state.viewCompleted ? "" : "active"}
          >
            Incomplete
          </button>
        </div>  
      );
    };

    renderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList.filter(
        item => item.completed === viewCompleted
      );
      return newItems.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span 
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.description}
            >
              {item.title}
            </span>
        </li>
      ));
    };

    render() {
      return (
        <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-success">Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ): null}
      </main>
      )
    }
  }
  
export default App;
