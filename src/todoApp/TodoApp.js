import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions/TodoApp.action";

class TodoApp extends React.Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    this.props.updateTodoList(this.state.input);
    this.setState({ input: "" });
  };

  handleDelete = e => {
    this.props.deleteTodo(e.target.id);
  };

  render() {
    const input = this.state.input;
    const todos = this.props.todos;
    return (
      <div>
        <h1> Todo App </h1>
        <input onChange={this.handleChange} value={input} />
        <button onClick={this.handleClick}> ADD </button>
        <div>
          {todos.map(todo => {
            return (
              <div key={todo.todo}>
                <button
                  className="deleteButton"
                  id={todo.todo}
                  onClick={this.handleDelete}
                >
                  {" "}
                  X{" "}
                </button>
                {todo.todo}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapActionsToProps = {
  updateTodoList: addTodo,
  deleteTodo: deleteTodo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoApp);
