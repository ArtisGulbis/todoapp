import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.scss";

import { check, remove } from "./redux/todo/todo.actions";

import TodoCard from "./components/todoCard/todoCard.component";
import Header from "./components/mainHeader/mainHeader.component";
import Form from "./components/form/form.component";
import SecondaryHeader from "./components/secondaryHeader/secondaryHeader.component.jsx";
import TodoList from "./components/todoList/todoList.component";

class App extends Component {
  handleEvent = (e) => {
    const { check, remove } = this.props;
    switch (e.target.dataset.type) {
      case "check":
        check(e.target.dataset.id);
        break;
      case "remove":
        remove(e.target.dataset.id);
        break;
      default:
        return;
    }
  };

  generateTodoCard = (list) => {
    return list.map(({ description, id, checked, createdAt }) => {
      switch (checked) {
        case true:
          return (
            <TodoCard
              description={description}
              key={id}
              id={id}
              createdAt={createdAt}
              handleEvent={(e) => this.handleEvent(e)}
              type={["check", "remove"]}
            >
              {["done", "remove"]}
            </TodoCard>
          );

        case false:
          return (
            <TodoCard
              description={description}
              key={id}
              id={id}
              createdAt={createdAt}
              handleEvent={(e) => this.handleEvent(e)}
              type={["check", "remove"]}
            >
              {["not done", "remove"]}
            </TodoCard>
          );

        default:
          return "";
      }
    });
  };

  render() {
    const {
      list: { list },
    } = this.props;

    return (
      <div>
        <Header>Create your TODO list</Header>
        <main>
          <Form
            handleSubmit={(e) => this.handleSubmit(e)}
            type="text"
            placeholder="Enter your task here"
          ></Form>
          <section>
            <SecondaryHeader>Your list:</SecondaryHeader>
            <TodoList>{this.generateTodoCard(list)}</TodoList>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ completeList: list }) => ({
  list,
});

const mapDispatchToProps = {
  check: check,
  remove: remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
