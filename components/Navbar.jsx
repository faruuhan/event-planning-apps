import React from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4">
      <div className="container">
        <a className="navbar-brand" href="">
          <div className="col-lg-4 d-flex justify-content-center order-sm-1">
            <Image src={"https://i.ibb.co/fC4S86z/logo.png"} width={150} height={150} />
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              <FaUser size={25} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
