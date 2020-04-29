import React from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";

import { addToList } from "../../redux/todo/todo.actions";

import CustomButton from "../customButton/customButton.component";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const { newItem } = this.props;
    e.preventDefault();
    newItem({
      description: this.state.description,
      checked: false,
      id: uniqid(),
    });

    const fields = document.querySelectorAll("input");
    fields.forEach((el) => {
      el.value = "";
    });
  };
  render() {
    const { type, placeholder } = this.props;
    return (
      <form>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e)}
        />
        <CustomButton type="submit" handleSubmit={(e) => this.handleSubmit(e)}>
          Add
        </CustomButton>
      </form>
    );
  }
}

const mapDispatchToProps = {
  newItem: addToList,
};

export default connect(null, mapDispatchToProps)(Form);
