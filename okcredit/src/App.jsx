import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataProvider } from "./content/Data";

function App() {
  let [storedetails, setdtoredetails] = useState("");
  let { name, setname } = useContext(dataProvider);

  function handelList() {
    if (storedetails.trim() == "") {
      alert("Please Enter a Name");
      return;
    }
  //  let newdata=name.filter((val)=>
  //      val.userName.toLowerCase()==.toLowerCase
  //   ) 
let newdata= name.filter(val => val.userName.toLowerCase == storedetails.toLowerCase)
    console.log(newdata)
    if(newdata.length > 0){
       console.log("already register")
       return ;
    }
    setname([...name, { userName: storedetails, UserAmount: 0 }]);
    console.log(name);
  }

  return (
    <>
      <div className="Navbar">
        <div className="totalamoumnt">
          <h1>
            Recieve:<span>2200</span>
          </h1>
          <h1>
            Given:<span>1100</span>
          </h1>
        </div>
        <div className="form">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
      <div className="coustomer">
        <div className="add">
          <input
            type="text"
            placeholder="Enter Name"
            value={storedetails}
            onChange={(e) => {
              setdtoredetails(e.target.value);
            }}
          />
          <button onClick={handelList}>Add Customer</button>
        </div>

        <div className="search">
          <input type="text" placeholder="search" />
          <button>Search Customer</button>
        </div>
      </div>
      {name.map(({ userName, UserAmount }) => {
        return (
          <Link to={`/${userName}`} key={Math.random()}>
            <div className="users">
              <h1>{userName}</h1>
              <h1>{UserAmount}</h1>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default App;
