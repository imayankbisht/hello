import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/List.css";

export default function List() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const onRelode = () => {
      const email = JSON.parse(localStorage.getItem("email"));
      setEmail(email);
    };
    onRelode();
  }, []);
  return (
    <div className="registerpage">
      <div className="register__grid1">
        <img
          className="register__img"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className="list__grid">
        <h3>USER DETAILS</h3>
        <div className="list">
          <ul>{email && email?.map((e) => <li>Email: {e}</li>)}</ul>
        </div>
        <button className="list__btn" onClick={() => history.push("/")}>
          Check another account? click here
        </button>
      </div>
    </div>
  );
}
