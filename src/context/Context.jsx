import { createContext, useEffect, useState } from "react";
import run from "../config/jemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setInput]=useState("");
    const [recentprompt,setRecentPrompt]=useState("");
    const [previousprompt,setPreviousPrompt]=useState([]);
    const [showPrompt,setShowPrompt]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultdata,setResultData]=useState("");

    const delayPara = (index,nextWord) =>{
        setTimeout(function() {
            setResultData(prev=>prev+nextWord);
        }, 75*index);
    }
  const onsent = async (prompt) => {
    setLoading(true);
    setResultData("");
    setShowPrompt(true);
    setRecentPrompt(input);
    setPreviousPrompt(prev=>[...prev,input])
    const response = await run(input);
    // response=response.substring(7);
    let responsearray = response.split("**");
    let newresposne;
    for(let i=0;i<responsearray.length;i++){
        if(i === 0 || i%2 !== 1){
            newresposne+=responsearray[i];
        }
        else{
            newresposne+= "<b>"+responsearray[i]+"</b>";
        }
        // responsearray[i]
    }
    let newresposne2= newresposne.split('*').join("</br>")
    
    let newresposnearray = newresposne2.split(" ");
    for(let i=0;i<newresposnearray.length;i++){
        if(i === 0){
            newresposnearray[i]= newresposnearray[i].slice(9);
        }
        const nextword=newresposnearray[i];
        delayPara(i,nextword+" ");
    }
    setLoading(false);
    setInput("")
  };
  


  const contextValue = {
    previousprompt,
    setPreviousPrompt,
    onsent,
    setRecentPrompt,
    recentprompt,
    showPrompt,
    loading,
    resultdata,
    input,
    setInput,

};

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
