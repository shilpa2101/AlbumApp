import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [datas,changedata]=useState(
        [

        ]
           
    )
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(
          (response)=>{
            console.log(response.data)
              changedata(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
      
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Serial no</th>
      <th scope="col">user id</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
    </tr>
  </thead>
  {datas.map(
    (value,index)=>{
        return <tbody>
                <tr>
                  <td>{index+1}</td>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                </tr>
            
            </tbody>
    }
  )}
  
</table>
                </div>
            </div>
        </div>

    </div>
  )
}

export default View