import React from 'react'

export const Description = ({data}) => {
  return (
    <div className='ml-5 p-5 d-flex container flex-column' style={{backgroundColor:'#fcfafa',borderRadius:'10px',boxShadow:'5px 10px #888888'}}>
   
    <div class="bg pt-5 p">
            <div class='row'>
            <div class="col">
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
                    <div>
                        <h1 style={{fontSize:'20px' }}>Contact Person</h1>
                        <p >{data.company.name}</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
                    <div>
                        <h1 style={{fontSize:'20px' }}>Designation</h1>
                        <p >{data.company.bs}</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
        <div>
            <h1 style={{fontSize:'20px' }}>Emails</h1>
            <p >{data.email}</p>
        </div>
    </div>
    <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
        <div>
            <h1 style={{fontSize:'20px' }}>Phones</h1>
            <p >{data.phone}</p>
        </div>
    </div>
   
            </div>
            <div class="col">
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
                    <div>
                        <h1 style={{fontSize:'20px' }}>Address</h1>
                        <p >{`${data.address.street} ${data.address.suite}`}</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
                    <div>
                        <h1 style={{fontSize:'20px' }}>city</h1>
                        <p >{data.address.city}</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
        <div>
            <h1 style={{fontSize:'20px' }}>street</h1>
            <p>{data.address.street}</p>
        </div>
    </div>
    <div class="col-12 col-md-3 mb-3 d-flex flex-row justify-content-start">
        
        <div>
            <h1 style={{fontSize:'20px' }}>ZipCode</h1>
            <p >{data.address.zipcode}</p>
        </div>
    </div>
   
            </div>
            </div>
          

        </div>
    </div>



    // <div>
    //      <div>
    //         <h1>Description</h1>
    //         <p>{data}</p>
    //         </div>
    //         <div>
    //         <h1>Description</h1>
    //         <p>{data}</p>
    //     </div>
    //     <div>
    //         <div>

    //         </div>

    //     </div>
    // </div>
  )
}
