import React, { useState, useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";
import moment from "moment";
import { AuthContext } from "../utils/Context";

export async function getServerSideProps() {
  const resDataEvent = await fetch("https://syuruqoutfit.store/events");
  const dataEvent = await resDataEvent.json();

  return {
    props: {
      dataEvent,
    },
  };
}

export default function Homepage({ dataEvent }) {
  const [getDataEvent, setDataEvent] = useState(dataEvent.data);
  const auth = useContext(AuthContext);

  const joinEvent = (events) => {
    fetch(`https://syuruqoutfit.store/attendees/${events.id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
      .then(() => {
        alert("Success join event");
      })
      .catch((err) => {
        console.log(err);
        alert("Join Event Failed or Need Access Login");
      });
  };

  return (
    <Layout>
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center flex-wrap gap-5 py-sm-3 my-5"
          style={{
            background: "#3586FF",
            minHeight: "52px",
            borderRadius: "28px",
            color: "#ffffff",
            fontSize: "20px",
          }}
        >
          <div>Games</div>
          <div>Art</div>
          <div>Sport</div>
          <div>Technology</div>
          <div>Music</div>
          <div>Education</div>
        </div>
        {getDataEvent
          ? getDataEvent.map((events) => {
              return (
                <div className="row mb-4" key={events.id}>
                  <div className="col-lg">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <Link href={`/event/${events.id}`}>
                              <a>
                                <Image src={events.url_image} width={174} height={151} />
                              </a>
                            </Link>
                          </div>
                          <div className="col-lg">
                            <h2>{events.name_event}</h2>
                            <p>{moment(events.date).format("LLLL")}</p>
                            <p>Hosted by {events.hosted_by}</p>
                            <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }} onClick={() => joinEvent(events)}>
                              Join
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "Event Empty!"}
      </div>
    </Layout>
  );
}
