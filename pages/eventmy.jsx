import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function myevent() {
  const [getUser, setGetUser] = useState([]);
  const [getMyEvents, setGetMyEvents] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchMyEvent();
  }, []);

  const fetchUser = async () => {
    const authToken = localStorage.getItem("authEvent");
    const resDataUser = await fetch(`https://syuruqoutfit.store/users/`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const dataUser = await resDataUser.json();
    setGetUser(dataUser.data);
  };

  const fetchMyEvent = async () => {
    const authToken = localStorage.getItem("authEvent");
    const resDataEventUser = await fetch(`https://syuruqoutfit.store/events/user/`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const DataEventUser = await resDataEventUser.json();
    setGetMyEvents(DataEventUser.data);
  };

  const delEvent = async (event) => {
    const authToken = localStorage.getItem("authEvent");
    fetch(`https://syuruqoutfit.store/events/${event.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(() => {
        alert("Success delete event");
      })
      .catch((err) => {
        console.log(err);
      });
    fetchMyEvent();
  };

  return (
    <Layout>
      <div className="container">
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} style={{ borderRadius: "28px" }} width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>{getUser.name}</h2>
                    <p>{getUser.email}</p>
                    <p>{getUser.city}</p>
                    <a href="" className={`btn ${styles.btnBlues}`} style={{ width: "115px" }}>
                      Edit Profile
                    </a>
                    <a href="/eventadd" className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Add Event
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="container">
        <div className="row d-flex justify-content-center border-bottom border-dark">
          <div className="col-4 mt-5 d-flex justify-content-evenly">
            <a href="eventmy">
              <b>My Event</b>
            </a>
            <a href="eventjoined">Joined Event</a>
          </div>
        </div>
      </div>

      {/* my events */}
      <div className="container mt-4">
        {getMyEvents
          ? getMyEvents.map((events) => {
              return (
                <div className="row gap-5" key={events.id}>
                  <div className="col-lg">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <Image src={events.url_image} style={{ borderRadius: "28px" }} width={174} height={151} />
                          </div>
                          <div className="col-lg">
                            <h2>{events.name_event}</h2>
                            <p>{events.date}</p>
                            <p>
                              Hosted {events.hosted_by} - {events.location}
                            </p>
                            <button className={`btn ${styles.btnBlues}`} style={{ width: "115px" }} onClick={() => delEvent(events)}>
                              Remove
                            </button>
                            <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No events"}
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  );
}