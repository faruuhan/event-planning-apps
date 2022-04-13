import React,{useState} from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function eventadd() {
  const [festivalName,setFestivalName]=useState('')
  const [dateAndTime,setDateAndTime]=useState('')
  const [location,setLocation]=useState('')
  const [maxParticipants,setMaxParticipants]=useState('')
  const [category,setCategory]=useState('')
  const [description,setDescription]=useState('')
  const [addImage,setAddImage]=useState('')
  const [categories]=useState([
    {
      label:"Music", 
      value:"music"
    },
    {
      label:"Sport", 
      value:"sport"
    },
    {
      label:"Game", 
      value:"game"
    },
  ])
  
  const handleSubmit = (e)=>{
    e.preventDefault
  }
  return (
    <Layout>

        {/* line */}
      <div className="container">
        <div className="row d-flex justify-content-center border-bottom border-dark">
          <div className="col-4 d-flex justify-content-center">
            <h5><b>Add Event</b></h5>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div class="form-group">
                <label for="#"></label>
                <input onChange={(e)=>setFestivalName(e.target.value)} type="#" class="form-control" id="#" aria-describedby="#" placeholder="Festival Name"></input>
              </div>
              <div class="form-group">
                <label for="#"></label>
                <input onChange={(e)=>setDateAndTime(e.target.value)} type="#" class="form-control" id="#" aria-describedby="#" placeholder="Date and Time"></input>
              </div>
              <div class="form-group">
                <label for="#"></label>
                <input onChange={(e)=>setLocation(e.target.value)} type="#" class="form-control" id="#" aria-describedby="#" placeholder="location"></input>
              </div>
              <div class="form-group">
                <label for="#"></label>
                <input onChange={(e)=>setMaxParticipants(e.target.value)} type="#" class="form-control" id="#" aria-describedby="#" placeholder="Max Participants"></input>
              </div>
              <div className="form-group mt-4">
                <select onChange={(e)=>setCategory(e.target.value)} class="form-control" id="#">
                  {categories.map((item)=>(
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div class="form-group mt-4">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
              </div>
              <div class="form-group mt-4">
                <label for="exampleFormControlFile1">Add Image  :  </label>
                <input type="file" class="form-control-file" id="#"></input>
              </div>
              <button type="submit" class="btn btn-primary mt-4">Submit</button>
          </form>
          </div>
        </div>
      </div>

      {/* add event */}



      <div className="container mt-5">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>

    </Layout>
  );
}
