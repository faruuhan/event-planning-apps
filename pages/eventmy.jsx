import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function myevent() {
  return (
    <Layout>
      <div className="container">
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} style={{ borderRadius: "28px" }}  width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Tono Subagyo</h2>
                    <p>tonosubagyo@gmail.com</p>
                    <p>Jakarta</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "115px"}}>
                      Edit Profile
                    </button>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Add Event
                    </button>
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
            <a href="eventjoined">
              Joined Event
            </a>
          </div>
        </div>
      </div>

        {/* my events */}
        <div className="container mt-4">
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} style={{ borderRadius: "28px" }}  width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Dieng Culture Festival</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>Hosted by Lord - Banjarnegara</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "115px"}}>
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
      </div>
      <div className="container mt-4">
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} style={{ borderRadius: "28px" }}  width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Dieng Culture Festival</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>Hosted by Lord - Banjarnegara</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "115px"}}>
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
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>

    </Layout>
  );
}
