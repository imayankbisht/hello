import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Loginpage.css";

export default function Loginpage() {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  console.log("emaiddddddl", form["email"]);

  const [email, setEmail] = useState(null);
  console.log("email", email);
  useEffect(() => {
    const onRelode = () => {
      let email = JSON.parse(localStorage.getItem("email"));
      setEmail(email);
    };
    onRelode();
  }, []);
  const saveData = (e) => {
    e.preventDefault();
    console.log("submit");
    if (email && email.includes(form["email"])) {
      alert("successfully logedin");
      history.push("/list");
    } else {
      alert("User not found! Please create account first.");

      history.push("/register");
    }
  };
  return (
    <div className="loginpage">
      <div className="login__grid1">
        <img
          className="login__img"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className="login__grid2">
        <h3>Welcome Back !</h3>
        <p>Please login to your account.</p>
        <form onSubmit={saveData}>
          <div className="login__input">
            <input
              value={form["email"]}
              type="email"
              placeholder="Username"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              value={form["password"]}
              type="password"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="login__checkbox">
            <span>
              <input type="checkbox" value="remember" />
              <label style={{ paddingLeft: "6px" }}>Remember me</label>
            </span>
            <a href="/register">Forget password</a>
          </div>
          <button type="submit" className="button">
            login
          </button>
        </form>

        <div className="tnc">
          <span>Terms of use Privacy policy</span>
        </div>
      </div>
    </div>
  );
}
