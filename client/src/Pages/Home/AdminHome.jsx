import React, { useEffect, useState } from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './AdminHome.css'


const AdminHome = () => {
    const [data, setData]  = useState([]);
   

    useEffect(() => {
        fetch("http://localhost:5000/user/getAllUsers",{ method:"GET"})
        .then((res) => res.json()
            .then((data) => {
                console.log(data, "authData");
                setData(data);
            })
        )
    },[]);

    // useEffect(() => {  
    //     getAllUsers();
       
    //   }, []);

    // const getAllUsers = () => {
    //     fetch("http://localhost:5000/getAllUser", {
    //       method: "GET",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data, "userData");
    //         setData(data);
    //       });
    //   };

    const deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
          fetch(`http://localhost:5000/user/deleteUser?id=${id}`, {
            method: "POST",
            
            body: JSON.stringify({
              userid: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.data);
            //   getAllUsers();
            
            });
        } else {
           
        }
      };

    return (
        <div>
            <div className='adm1'>
                <h3>Users Details in Admin Section</h3>
            </div>
            <div className='adm2'>
            {data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>UserType</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((i) => (
                                <tr key={i.id}>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.userType}</td>
                                    <td>
                                        <FontAwesomeIcon 
                                        icon={faTrash} 
                                        onClick={() => deleteUser(i._id, i.name)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    
    )
}

export default AdminHome

