import React, { useState, useEffect, useRef } from "react";

function Login() {
  var initialState = {
    Username: "",
    Password: ""
  };

  var [toggle, setToggle] = useState(false);

  var [state, setState] = useState(initialState);
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);
  return (
    <div className="bg-orange-400 h-screen flex justify-center items-center">
      <form
        action=""
        className="bg-slate-200 flex flex-col w-3/6 h-1/3 rounded-md justify-evenly p-14 relative overflow-visible"
      >
        <h4 className="text-orange-400 font-bold">ACCOUNT LOGIN</h4>
        <div className="flex flex-col">
          <label className="mb-1 text-xs text-gray-400">USERNAME</label>
          <input
            type="text"
            name="Username"
            value={state.Username}
            className="focus:outline-none p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-xs text-gray-400">PASSWORD</label>
          <input
            type="password"
            name="Username"
            value={state.Password}
            className="focus:outline-none p-1 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-400 p-2 rounded-md text-white font-bold"
        >
          LOG IN
        </button>

        <div
          className={`absolute top-0 right-0 bottom-0  bg-orange-300 cursor-pointer transition-all  ${
            toggle ? "w-full" : "w-6"
          }  `}
          onClick={
            !toggle
              ? () => {
                  setToggle(!toggle);
                }
              : null
          }
        >
          <h4 className={`${toggle ? "text-white font-bold" : "hidden"}`}>
            REGISTER ACCOUNT
          </h4>
          <div className={toggle ? "flex flex-col" : "hidden"}>
            <label
              className={`${toggle ? "mb-1 text-xs text-gray-400" : "hidden"}`}
            >
              USERNAME
            </label>

            <input
              type="text"
              name="Username"
              value={state.Username}
              className={
                toggle ? "focus:outline-none p-1 rounded-md" : "hidden"
              }
            />
          </div>

          <div className={toggle ? "flex flex-col" : "hidden"}>
            <label
              className={`${toggle ? "mb-1 text-xs text-gray-400" : "hidden"}`}
            >
              PASSWORD
            </label>

            <input
              type="text"
              name="Password"
              value={state.Password}
              className={
                toggle ? "focus:outline-none p-1 rounded-md" : "hidden"
              }
            />
          </div>
          <button
            type="submit"
            className={
              toggle
                ? "bg-orange-400 p-2 rounded-md text-white font-bold"
                : "hidden"
            }
          >
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
