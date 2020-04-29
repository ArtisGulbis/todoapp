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

  newDate = () => {
    let date = new Date();
    const dtf = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const [
      { value: mo },
      ,
      { value: da },
      ,
      { value: ye },
      ,
      { value: ho },
      ,
      { value: min },
      ,
      { value: sec },
    ] = dtf.formatToParts(date);
    return `${mo}/${da}/${ye} ${ho}:${min}:${sec}`;
  };
  handleSubmit = (e) => {
    const { newItem } = this.props;
    e.preventDefault();
    newItem({
      description: this.state.description,
      checked: false,
      id: uniqid(),
      createdAt: this.newDate(),
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
