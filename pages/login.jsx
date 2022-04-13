import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Styles.module.css";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();

  const loginAccount = () => {
    fetch("http://8.219.11.61:8080/login", {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("authEvent", JSON.stringify(result));
        alert("login success");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main role="main">
      <Head>
        <title>Event Planning App</title>
        <meta name="description" content="Event Planning Apps by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                        <input type="email" className={`form-control ${styles.auth}`} id="email" placeholder="Email" required />
                      </div>
                      <div className="mb-3">
                        <input type="password" className={`form-control ${styles.auth}`} id="password" placeholder="Password" required />
                      </div>
                      <div className="d-flex">
                        <button className={`ms-auto btn ${styles.btnBlues}`} style={{ borderRadius: "10px", width: "167px" }} onClick={() => loginAccount()}>
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="col-lg-4 d-flex justify-content-center order-sm-1">
                        <Image src={"https://i.ibb.co/fC4S86z/logo.png"} height={350} width={350} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
