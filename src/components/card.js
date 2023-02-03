import React, { useState } from 'react'
import { Description } from './description';

export const Card = ({name,contact,city,state,data}) => {

    let [collepse,setcollepse]=useState(0);
    let buttonevent=()=>{
        if(collepse){
            setcollepse(0);
        }else{setcollepse(1);   
        }
    }
 
  return (
    <div >
        <div style={{height:180, fontFamily:'sans-serif',display:'flex',padding:'12px',alignItems:'center',justifyContent:'space-between', backgroundColor:'white',margin:'25px',borderRadius:'10px'}}>
        <div>
            <h1 style={{fontSize:20}}>{name}</h1>
        </div>
        <div>
        <h1  style={{fontSize:20,fontWeight:600}}>CONTACT</h1>
            <h3  style={{fontSize:20}}>{contact}</h3>
        </div>
        <div>
        <h1  style={{fontSize:20,fontWeight:600}}>CITY</h1>
            <h3  style={{fontSize:20}}>{city}</h3>
        </div>
        <div>
            <h1  style={{fontSize:20,fontWeight:600}}>STATE</h1>
            <h3  style={{fontSize:20}}>{state}</h3>
        </div>
        <div style={{display:'flex',justifyContent:'center',flex:'column',padding:'20px'}}>
            <button style={{borderRadius:'10px',color:'white',height:'45px',width:'140px',cursor:'pointer',backgroundColor:'orange',borderWidth:'0px'}} onClick={()=>{buttonevent()}}>
           {collepse?'Hide Details':'View Details'}
        </button></div>
        </div>
        {collepse ?
        <div>
           <Description data={data}/>
        </div>:<></>
}
    </div>
  )
}
