import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Styles.module.css";
import { AuthContext } from "../utils/Context";

export async function getServerSideProps() {
  const resDataCategory = await fetch(`https://syuruqoutfit.store/catagories`);
  const dataCategory = await resDataCategory.json();

  return {
    props: {
      dataCategory,
    },
  };
}

export default function EventAdd({ dataCategory }) {
  const auth = useContext(AuthContext);
  const [festivalName, setFestivalName] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [addImage, setAddImage] = useState("");
  const [categories] = useState(dataCategory.data);

  const handleSubmit = (e) => {
    e.preventDefault;

    fetch(`https://syuruqoutfit.store/events`, {
      method: "POST",
      body: JSON.stringify({
        name_event: festivalName,
        catagory_id: parseInt(category),
        date: dateAndTime,
        location: location,
        detail_event: description,
        max_participants: parseInt(maxParticipants),
        url_image: addImage,
      }),
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("success create event!");
        window.location.href = "/eventmy";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      {/* line */}
      <div className="container">
        <div className="row d-flex justify-content-center border-bottom border-dark">
          <div className="col-4 d-flex justify-content-center">
            <h5>
              <b>Add Event</b>
            </h5>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <input onChange={(e) => setFestivalName(e.target.value)} type="text" className="form-control" id="#" aria-describedby="#" placeholder="Festival Name"></input>
            </div>
            <div className="mb-3">
              <input onChange={(e) => setDateAndTime(e.target.value)} type="datetime-local" className="form-control" id="#" aria-describedby="#" placeholder="Date and Time"></input>
            </div>
            <div className="mb-3">
              <input onChange={(e) => setLocation(e.target.value)} type="#" className="form-control" id="#" aria-describedby="text" placeholder="location"></input>
            </div>
            <div className="mb-3">
              <input onChange={(e) => setMaxParticipants(e.target.value)} type="number" className="form-control" id="#" aria-describedby="#" placeholder="Max Participants"></input>
            </div>
            <div className="mb-3">
              <select onChange={(e) => setCategory(e.target.value)} className="form-control" id="#">
                {categories.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.catagory_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="#" onChange={(e) => setAddImage(e.target.value)} placeholder="image url"></input>
            </div>
            <div className="d-flex justify-content-end">
              <button className={`btn ${styles.btnBlues} mt-4`} onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add event */}

      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  );
}
