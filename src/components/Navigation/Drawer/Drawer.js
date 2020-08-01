import React, { Component } from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список", exact: true },
  { to: "/auth", label: "Авторизация", exact: false },
  { to: "/quiz-creator", label: "Создать тест", exact: false },
];

export default class Drawer extends Component {
  renderLinks = () => {
    return links.map((linksItem, index) => {
      return (
        <li key={index}>
          <NavLink
            to={linksItem.to}
            exact={linksItem.exact}
            activeClassName={classes.active}
            onClick={this.props.onClose}
          >
            {linksItem.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}
