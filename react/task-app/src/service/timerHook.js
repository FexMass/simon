import React, { useEffect, useState } from "react";

export function MyTimerHook({ expiryTimestamp }) {

    const [disabled, setDisabled] = useState(true)

    const getDateSeconds = (data) => {
        // to timestamp 
        const dateNow = new Date(Date.now()).getTime()
        const requiredDate = new Date(Object.values(data) || "").getTime()
        return Math.round((requiredDate - dateNow) / 1000)
      }

      function clear(interval) {
        clearInterval(interval)
      }

    useEffect(() => {
        const timer = setInterval(() => {
                console.log(getDateSeconds(expiryTimestamp))          
                if(getDateSeconds(expiryTimestamp) < 0) {
                    setDisabled(true)
                    clear(timer)
                    return    
                } else {
                    setDisabled(false)            
                }
        }, 2000);
        return () => clear(timer)
    }, []);

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Disable button on date conditions </h1>
        <div style={{ fontSize: "100px" }}>
        <button disabled={disabled}>Submit</button>
      </div>
      </div>
    );
  }
 