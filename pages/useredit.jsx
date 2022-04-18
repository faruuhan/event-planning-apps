import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Styles.module.css";

export default function myevent() {
  const [getUser, setGetUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetchUser();
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

  const handleSubmit = () => {
    const authToken = localStorage.getItem("authEvent");
    fetch(`https://syuruqoutfit.store/users/${getUser.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        city: city,
      }),
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("success update user!");
        window.location.href = "/eventmy";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delAccount = () => {
    const authToken = localStorage.getItem("authEvent");
    fetch(`https://syuruqoutfit.store/users/${getUser.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("success delete user!");
        window.location.href = "/";
        localStorage.removeItem("authEvent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="#" aria-describedby="#" placeholder="name" defaultValue={getUser.name}></input>
            </div>
            <div className="mb-3">
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="#" aria-describedby="#" placeholder="email" defaultValue={getUser.email}></input>
            </div>
            <div className="mb-3">
              <input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="#" aria-describedby="#" placeholder="city" defaultValue={getUser.city}></input>
            </div>
            <div className="d-flex gap-2">
              <button className={`btn ${styles.btnBlues} mt-4`} onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
              <button className={`btn btn-danger mt-4`} onClick={() => delAccount()} style={{ borderRadius: "28px" }}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  );
}