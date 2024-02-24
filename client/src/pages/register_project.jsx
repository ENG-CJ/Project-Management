import React from "react";
import CButton from "../components/utils/button";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function RegisterProject() {
  const navigate = useNavigate()
  return (
    <>
      <Toaster position="top-center" />
      <div className="container">
        <h3>Register New Project 📢</h3>
        <hr />

        <div className="form-group">
          <label>Project Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Owned</label>
          <input type="text" name="owned" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <div className="form-group">
          <label>Project Status</label>
          <select name="state">
            <option value={"Pending"}>Pending</option>
            <option value={"Completed"}>Completed</option>
            <option value={"InProgress"}>InProgress</option>
          </select>
        </div>
        <CButton
          fun={() => {
            navigate("/")
          }}
          width={"130px"}
          text={"submit ✅"}
        />
      </div>
    </>
  );
}
