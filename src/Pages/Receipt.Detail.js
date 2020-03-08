import React, {  useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import ".././index.css"

function ReceiptDetails() {
    const { userId } = useParams()
    
    const [userDetail, setUserDetail] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [Generate,setGenerator] = useState("Not Genenrated")
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(response2 => {
                setUserDetail([response2])
                console.log(response2)
                setIsLoading(false)
               
            })
        // fetch("https://uitedemo.herokuapp.com/api/receipt")
        // .then((res)=>res.json())
        // .then((response)=>{
        //     console.log(response)
        // })    
    }, [])
//    const ChangeGenerator = (res) =>{
//        if(res.username === "Bret") return "true"
//        return "false"

//    }
  const ApproveData = (res)=>{
        if(res !== null){
            setGenerator("Generated")
        }
        
  }
 const disApproveData = (res)=>{
    if(res !== null){
        setGenerator("Not Generated")
    }
  }
    return (
        <div className="container">
             
{ userDetail.map((user,i) => {
        return (  
           <Table striped bordered hover>
               <tbody> <tr>
                        <th>#</th>
                        <td style={{"width":"550px"}}>{user.id}</td>
                    </tr>
                    <tr>
                        {/* <th>Name</th><td>{user.name}</td> */}
                    </tr>
                    <tr>
                        <th>Email</th>
                        {/* <td>{user.email}</td> */}
                    </tr>
                    <tr>    
                        <th>Phone</th>
                        {/* <td>{user.phone}</td> */}
                        </tr>
                    <tr>    
                        <th>Association Office Name</th>
                        {/* <td>{user.company.bs}</td> */}
                        </tr>
                    <tr>
                        <th>Year</th>
                        <td>{2003}</td>
                        </tr>
                    <tr>
                        <th>Street</th>   
                        {/* <td>{user.address.street}</td> */}
                        </tr>
                    <tr>
                        <th>City</th>   
                        {/* <td>{user.address.city}</td> */}
                        </tr>
                    <tr>
                        <th>Company</th> 
                        {/* <td>{user.company.name}</td> */}
                        </tr>
                    <tr>
                        <th>Status</th>
                    <td>
                        <p>{Generate}</p>
                        <button onClick={()=>ApproveData(user)}>Aproval</button>&nbsp;&nbsp;
                        <button onClick={()=>disApproveData(user)}>disApproval</button>&nbsp;&nbsp;
                        <button>History</button>
                     </td>
                        </tr>
                    <tr>
                        <th>Back</th><td><Link to="/receipt">Go Back</Link></td>
                        </tr>
                   </tbody>
                   
                  
                </Table> 
                
             
             
        )
    })
   

           
                }
        </div>
    )
}
export { ReceiptDetails } 