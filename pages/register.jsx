import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Styles.module.css";
import { useRouter } from "next/router";

export default function register() {
  const router = useRouter();
  const createAccount = async () => {
    fetch("https://syuruqoutfit.store/users", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        city: document.getElementById("city").value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        alert("Account has created");
        router.push("/login");
      })
      .catch((err) => {
        alert("Account cannot create");
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
                        <input type="text" className={`form-control ${styles.auth}`} id="name" placeholder="Name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" className={`form-control ${styles.auth}`} id="email" placeholder="Email" required />
                      </div>
                      <div className="mb-3">
                        <input type="password" className={`form-control ${styles.auth}`} id="password" placeholder="Password" required />
                      </div>
                      <div className="mb-3">
                        <input type="text" className={`form-control ${styles.auth}`} id="city" placeholder="City" required />
                      </div>
                      <div className="d-flex">
                        <button className={`ms-auto btn ${styles.btnBlues}`} style={{ borderRadius: "10px", width: "167px" }} onClick={() => createAccount()}>
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
    </main>
  );
}
