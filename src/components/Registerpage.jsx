import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Registerpage.css";

export default function Registerpage() {
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });
  const saveData = (e) => {
    e.preventDefault();
    if (localStorage.getItem("email") === null) {
      localStorage.setItem("email", "[]");
    }
    console.log("lll", localStorage.getItem("email"));
    var old_email = JSON.parse(localStorage.getItem("email"));
    if (old_email.includes(form["email"])) {
      alert("Email already exist! try different email");
    } else {
      old_email.push(form["email"]);
      localStorage.setItem("email", JSON.stringify(old_email));
      alert("Yaaah! Account created successfully :)");
      history.push("/list");
    }
  };

  return (
    <div className="registerpage">
      <div className="register__grid1">
        <img
          className="register__img"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className="register__grid2">
        <h3>Welcome!</h3>
        <p>New user create your account.</p>
        <form onSubmit={saveData}>
          <div className="register__input">
            <input
              value={form["name"]}
              type="text"
              placeholder="Username"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              value={form["mobile"]}
              type="text"
              placeholder="Mobile"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />
            <input
              value={form["email"]}
              type="email"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              value={form["password"]}
              type="password"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit" className="button">
              register
            </button>
          </div>
        </form>

        <div className="tnc">
          <span>Terms of use Privacy policy</span>
        </div>
      </div>
    </div>
  );
}
