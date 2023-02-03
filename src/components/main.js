import React, { useEffect, useState } from 'react'
import { Card } from './card';
import Paginate from './paginate';


const Main = () => {

    const [data,setdata]=useState([])   
    const [curdata,setcurdata]=useState([]) 
    const [pagenumber,setpagenumber]=useState(1)


    const url='https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
    fetch(url)
  .then((response) => response.json())
  .then((dat) =>{
    console.log(dat)
    setdata((dat));setcurdata(dat.slice(0,3))
  }
  ).catch((err)=>console.log(err))
    },[])

    const paginate = (pageNum) => {
        setpagenumber(pageNum);
        setcurdata(data.slice(pageNum*3-3,pageNum*3))
     };
  return (
    <div style={{backgroundColor:'#d0d8db', height:'100%' }} className='pt-5'>
        {curdata.length ? curdata.map((val)=>(
            <Card name={val.name} state={val.address.street} city={val.address.city} data={val} contact={val.company.name}/>
          )):<></>
        }
        <Paginate postsPerPage={3} totalPosts={data.length} paginate={paginate} curpage={pagenumber}/>
     
    </div>
  )
}

export default Main