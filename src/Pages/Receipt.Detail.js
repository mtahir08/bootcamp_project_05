import React, {Component} from 'react'
import { Table } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import Img from "./images/images.png"
import ".././index.css"

class ReceiptDetails extends Component {
    state = {
        isloading : false,
        data : []
    }
    // const [userDetail, setUserDetail] = useState([])
    //
    // setUserDetail(props.location.state.user)
    // console.log(userDetail)
    // const { userId } = useParams()
    
    // const [isLoading,setIsLoading] = useState(false)
    // const [Generate,setGenerator] = useState("Not Genenrated")
   async componentDidMount(){
         const {user} =await  this.props.location.state
         this.setState({data : [user] , isloading : true})
        }
        ApproveData = ()=>{
            const status = this.state.data[0].status
            fetch(`https://uitedemo.herokuapp.com//receipt/:${status}`, {
                method: "PUT",
                headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YTg0YWEyZDkwYTAwMDRhYmUxNjgiLCJleHAiOjE1ODM4NDIxMjcsImlhdCI6MTU4MzgzODUyN30.ZJWUawM29L-P6OZ9Z_cVZHA4iyvLAFRpiM8CF6R5Pj0"
                }
                })
                .then(response => response.json())
                .then(res2 => console.log(res2))
    }
    render(){
        return (
        <div className="container">
             
{this.state.isloading ? this.state.data.map((user,i) => {
    return (  
        <Table key={i} striped bordered hover>
               <tbody> <tr>
                        <th>#</th>
                        <td style={{"width":"550px"}}>{i}</td>
                    </tr>
                    <tr>
                        <th>ID</th><td>{user._id}</td>
                    </tr>
                    <tr>
                        <th>Sent At</th>
                        <td>{user.sentAt}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{user.sentBy.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.sentBy.email}</td>
                    </tr>
                    <tr>    
                        <th>Created At</th>
                        <td>{user.createdAt}</td>
                        </tr>
                    <tr>    
                        <th>updated At</th>
                        <td>{user.updatedAt}</td>
                        </tr>
                    <tr>
                        <th>Year</th>
                        <td>{user.year}</td>
                        </tr>
                    <tr>
                        <th>Month</th>   
                        <td>{user.month}</td>
                        </tr>
                    <tr>
                        <th>Status</th>   
                        <td>{user.status}</td>
                        </tr>
                    <tr>
                        <th>Image</th> 
                        <td>
                            {
                            this.state.isloading ?
                                user.url !== "" ?
                             <img src={Img} alt="Image" /> : <img src={user.url} alt="Image" />
                             : ""
                            }
                             
                            </td>
                        </tr>
                    <tr>
                        <th>Status</th>
                    <td>
                        <button onClick={()=>this.ApproveData()}>Aproval</button>&nbsp;&nbsp;
                        {/* <button onClick={()=>disApproveData(user)}>disApproval</button>&nbsp;&nbsp; */}
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
   
: "Loading"
           
                }
        </div>
    )
    }
    
}
export { ReceiptDetails } 