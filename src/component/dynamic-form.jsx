import React, { Component } from "react";
import Button from "../common/button";
import Input from "../common/input";

class DynamicForm extends Component {
  state = {
    fields: [{ task: "task 1" }, { task: "task 2" }],
  };

  handleRemoveField = (index) => {
    const fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  };

  handleAddField = () => {
    const fields = [...this.state.fields];
    this.setState({ fields: [...fields, { task: "" }] });
  };

  handleChange = (index, { currentTarget: input }) => {
    const { name, value } = input;
    let fields = [...this.state.fields];

    fields[index][name] = value;

    this.setState({ fields });
  };

  handleSubmit = () => console.log(this.state.fields);

  render() {
    const { fields } = this.state;
    return (
      <div className="w-50 m-auto">
        <h1>Dynamic Form</h1>
        <form>
          {fields.map((field, index) => (
            <div key={index} className="row align-items-end">
              <div className="col-10">
                <Input
                  name="task"
                  label="Task"
                  id={`taskInput-${index}`}
                  onChange={(event) => this.handleChange(index, event)}
                  value={field.task}
                />
              </div>
              <div className="col-2">
                <Button
                  label="Remove"
                  btnClass="btn-danger"
                  onClick={() => this.handleRemoveField(index)}
                />
              </div>
            </div>
          ))}
          <div className="d-flex">
            <Button
              label="Add More Tasks"
              btnClass="btn-success my-4"
              onClick={() => this.handleAddField()}
            />
            <Button
              label="Submit"
              btnClass="btn-primary my-4 mx-2"
              onClick={() => this.handleSubmit()}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default DynamicForm;
