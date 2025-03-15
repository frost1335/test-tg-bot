import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const navigation = [
    {
      title: "Study now",
      path: "/studynow",
    },
    {
      title: "Add",
      path: "/add",
    },
    {
      title: "More",
      path: "/more",
    },
  ];

  return (
    <div className="menu">
      {navigation.map((item) => (
        <div className="menu-item">
          <Link to={item.path} className="menu-btn">{item.title}</Link>
        </div>
      ))}
    </div>
  );
}
