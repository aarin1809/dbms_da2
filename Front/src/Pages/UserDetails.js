import React, { useEffect } from "react";


const UserDetails = () => {
  const [user, setUser] = React.useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userDetails"));
    setUser(data);
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-y-5">
      <div className="top-0 left-0 absolute">
        <button
          className="btn btn-dark m-2 border-white border-2"
          onClick={() => {
            window.location.href = "/bankDashboard";
          }}
        >
          Go Back
        </button>
      </div>
      <p className="text-2xl font-semibold rounded-md text-white">
        User Details for {user?.user?.aadharNo}
      </p>
      <div className="w-3/4 h-fit p-5 gap-y-3 bg-black border-2 border-white text-white flex flex-col items-center justify-center">
        <p className="text-2xl text-center">
          <span className="font-semibold">Expenses:</span> {user?.user?.expense}
        </p>
        <p className="text-2xl text-center">
          <span className="font-semibold">Savings:</span> {user?.user?.savings}
        </p>
        <div className="border-2 border-black flex flex-col items-center rounded-md">
          <p className="text-2xl mt-3 font-bold">Tax</p>
          <img src={user?.user?.taxUrl} className="mt-2 w-1/2" alt="Tax_Image" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
