import React from "react";
import { useNavigate } from "react-router-dom";

const AttendanceTable = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return <div>Attendance Table</div>;
};

export default AttendanceTable;
