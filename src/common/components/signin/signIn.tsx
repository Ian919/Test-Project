import { Link } from "react-router-dom";
import Input from "../../UI/input_type";
import Input1 from "../../UI/Input1";
import ButtonSubmit from "../../UI/buttonSubmit";
import Link1 from "../../UI/link";
import Add from "../../UI/add+";
import api from "../../../API copy";
import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../context/AuthContexts";
import { useContext } from "react/cjs/react.development";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
// import useForm
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import store from "../../../core/redux/store";
import { useSelector } from "react-redux";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  let res;
  let name = useSelector((state: any) => state.auth.name);
  const [error, setError] = useState<string>("");
  const onSubmit = (data) => {
    api
      .login(data)
      .then((r) => {
        console.log(r);

        const token: string = r.token;
        console.log(token);
        const name: string = r.name;
        Cookies.set("token", token);
        //     console.log(Cookies.get('token'), 'cookies')
        localStorage.auth = JSON.stringify({ token: token, name: name });
        // localStorage.auth = JSON.stringify(r.data)
        console.log(localStorage.auth);
        store.dispatch({
          type: "auth/loaded",
          payload: {
            token: token,
            name: name,
          },
        });
          if (r.status === 401) {
          setError("Wrong login or password. Try again");
        } else {
          navigate('/AddNewTeam')
        }
      })
      .catch((e) => {
        res = e;
        console.log(e);
        // if (e.response.status === 401) {
        //   setError("Wrong login or password. Try again");
        // }
      })
      // .then(() => console.log(error));
  };

  interface valueOfNumberString {
    target: {
      value: string | number;
    };
  }
  const navigate = useNavigate();
  interface IFormInput {
    login: String;
    password: String;
  }
  return (
    <div className="SignIn">
      <div className="formSign1">
        <div className="formMargin">
          <h1 className="sign">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input1
              label="Login"
              onInput1={(e) => {
                setValue("login", e.target.value);
              }}
            />
            <p>{errors.login?.message || error}</p>
            <div className="password">
              <Input
                label="Password"
                seePassword="true"
                onInput={(e) => {
                  setValue("password", e.target.value);
                }}
              />
              <p>{errors.password?.message || error}</p>
              <a
                href="src/common/components/signin/signIn#"
                className="password-control"
              ></a>
            </div>

            <input type="submit" className="buttonSubmit" />
            <p className="notaMember">
              Not a member yet?
              <Link1 to="/signup" text="signup" />
            </p>
          </form>
        </div>
      </div>

      <div className="imgSign">
        <img src="assets/img/Group (1).png" className="imgSign1" />
      </div>
    </div>
  );
};

export default SignIn;
