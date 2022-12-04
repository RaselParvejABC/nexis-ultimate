import React from "react";

const WaitDialog = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-primary opacity-50 flex justify-center items-center">
      <div
        className="animate-spin inline-block w-16 h-16 text-6xl border bg-secondary"
        role="status"
      ></div>
    </div>
  );
};

export default WaitDialog;
