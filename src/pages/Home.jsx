import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>
        Welcome to <span>YodOl</span>
      </h1>
      <Link to={"/studynow"}>
        <button>Study Now</button>
      </Link>
    </div>
  );
}
