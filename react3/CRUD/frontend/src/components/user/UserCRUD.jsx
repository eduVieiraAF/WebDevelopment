/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "user",
  subtitle: "Registration: Create, Read, Update and Delete",
};

const baseURL = "http://localhost:3001/users";
const initialStatte = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCRUD extends Component {
  state = { ...initialStatte };

  clear() {
    this.setState({ user: initialStatte.user });
  }

  updateFields(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="cal-12 col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateFields(e)}
                placeholder="Enter a name...."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateFields(e)}
                placeholder="Enter a valid email..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary m-2" onClick={(e) => this.save(e)}>
              SAVE
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={(e) => this.clear()}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderTable() {}

  renderRow() {}

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialStatte.user, list });
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    list.unshift(user);

    return list;
  }

  render() {
    return <Main {...headerProps}>
        {this.renderForm()}
    </Main>;
  }
}
