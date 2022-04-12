import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function Homepage() {
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
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Dieng Culture Festival</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>Hosted by Ganjar Pranowo - Banjarnegara</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Dieng Culture Festival</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>Hosted by Ganjar Pranowo - Banjarnegara</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>Dieng Culture Festival</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>Hosted by Ganjar Pranowo - Banjarnegara</p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}