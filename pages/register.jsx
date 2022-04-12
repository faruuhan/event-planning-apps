import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../styles/Styles.module.css";

export default function register() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#EEEEEE" }}>
      <div className="container my-auto">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "20px" }}>
              <div className="card-body py-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4">
                    <h1 style={{ color: "#4A94FC", fontWeight: "700" }}>Hallo</h1>
                    <div className="mb-3">
                      <input type="text" className={`form-control ${styles.auth}`} id="name" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className={`form-control ${styles.auth}`} id="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className={`form-control ${styles.auth}`} id="email" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className={`form-control ${styles.auth}`} id="city" placeholder="City" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className={`form-control ${styles.auth}`} id="image" placeholder="URL Profile Image" />
                    </div>
                    <div className="d-flex">
                      <button className={`ms-auto btn ${styles.btnBlues}`} style={{ borderRadius: "10px", width: "167px" }}>
                        Register
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center order-sm-1">
                    <Image src={"https://i.ibb.co/fC4S86z/logo.png"} width={337} height={337} layout="fixed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
