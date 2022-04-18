import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function myevent() {
  const [getUser, setGetUser] = useState([]);
  const [eventsJoined, setEventJoined] = useState([]);

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
    const resEventJoined = await fetch(`https://syuruqoutfit.store/attendees/user`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const dataEventJoined = await resEventJoined.json();
    setEventJoined(dataEventJoined.data);
  };

  const goingEvent = (events) => {
    const authToken = localStorage.getItem("authEvent");
    fetch(`https://syuruqoutfit.store/attendees/${events.event_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(() => {
        alert("Success leave event");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(eventsJoined);

  return (
    <Layout>
      <div className="container">
        <div className="row gap-5">
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
                    <a href="/useredit" className={`btn ${styles.btnBlues}`} style={{ width: "115px" }}>
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
            <a href="eventmy">My Event</a>
            <a href="eventjoined">
              <b>Joined Event</b>
            </a>
          </div>
        </div>
      </div>

      {/* my events */}
      <div className="container mt-4">
        {eventsJoined
          ? eventsJoined.map((events) => {
              return (
                <div className="row gap-5" key={events.event_id}>
                  <div className="col-lg">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} style={{ borderRadius: "28px" }} width={174} height={151} />
                          </div>
                          <div className="col-lg">
                            <h2>{events.event.name_event}</h2>
                            <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                            <p>
                              Hosted by {events.event.hosted_by} - {events.event.location}
                            </p>
                            <button className={`btn ${styles.btnBlues}`} style={{ width: "115px" }} onClick={() => goingEvent(events)}>
                              Going
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "Not yet joined any event!"}
      </div>
    </Layout>
  );
}