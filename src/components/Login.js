import {React} from "react";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Dashboard from "./Dashboard";
import './login.css';
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Form_ass = () => {
  const[msg,Changemsg]=useState("");
  const Navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formdata) => 
  {
    console.log(formdata)
    const username=localStorage.getItem("username",formdata.username);
    const password=localStorage.getItem("password",formdata.password);
    if(!(username==formdata.username && password==formdata.password))
    {
        Changemsg("incorrect credentials");
    }
    else{
      Changemsg(" ");
      Navigate('/Dash');
    }
  }
  return (
    <div>
      <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* fullname */}
        <div className="formitems">
        UserName:<input type="text" className="username" placeholder="enter text" {...register("username", 
        {
            required:{
              value:true,
              message:"please enter username"
            }
        })}
        />
        <br />
        <p style={{ color: "black" }}>{errors.fullname?.message}</p>
    Password:<input type="password" className="password" placeholder="enter password" {...register("password",
        {
          required:{
            value:true,
            message:"please enter password"
          }
        })}/><br/>
        <p style={{ color: "black" }}>{errors.password?.message}</p>
        <button type="submit" className="login">Login</button>
        <p>{msg}</p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Form_ass;
