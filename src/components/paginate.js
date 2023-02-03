// Navigate.js
 
import React from 'react';
 
const Paginate = ({ postsPerPage, totalPosts, paginate,curpage }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
 
   return (
      <div className="d-flex justify-content-center align-items-start">
         <ul className="pagination">
            {pageNumbers.map((number) => (
               <li  style={{fontSize:20,backgroundColor:number==curpage?'orange':'white',cursor:'pointer'}}
                  key={number}
                  onClick={() => paginate(number)}
                  className="m-1 p-3 page-number"
               >
                  {number}
               </li>
            ))}
         </ul>
      </div>
   );
};
 
export default Paginate;