import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataProvider } from "./Data";
import { useContext } from "react";

function User() {
  const { id } = useParams();
  console.log(id)
  let { name, setname } = useContext(dataProvider);
  const [userAmt,setUserAmt]=useState('')

  const filterData = name.filter((val) => val.userName == id);

  return (
    <div className="mainuserss">

    <div className="mainuser">

      {filterData.map(({userName, UserAmount }) => {
        return (
          <div key={Math.random()} className="user">
           <div className="userData">
           <p>{userName}</p>
           <p>{UserAmount}</p>
           </div>
           ActiveNow
         
        
          </div>
        );
      })}
          {/* <div className="inputBtnsTrans">
                <input type="number" placeholder="Enter Amount" value={userAmt} onChange={(e)=>{setUserAmt(e.target.value)}}/>
                <div className="userBtns">
                <button className="send">Send</button>
                <button className="receive">Receive</button>
                </div>
                </div> */}
    </div>
                </div>
  );
}

export default User;
