import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../../styles/Styles.module.css";

export async function getServerSideProps(context) {
  const resDataEvent = await fetch(`http://8.219.11.61:8080/events/${context.params.id}`);
  const dataEvent = await resDataEvent.json();

  return {
    props: {
      dataEvent,
    },
  };
}

export default function DetailEvent({ dataEvent }) {
  const [getDataEvent, setDataEvent] = useState(dataEvent.data);

  console.log(getDataEvent);
  return (
    <Layout>
      <div className="container">
        <div className="row flex-column gap-5">
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={174} height={151} />
                  </div>
                  <div className="col-lg">
                    <h2>{getDataEvent.name_event}</h2>
                    <p>Sabtu, 16 Agustus 2022 @ 16.00 WIB</p>
                    <p>
                      Hosted by {getDataEvent.hosted_by} - {getDataEvent.location}
                    </p>
                    <button className={`btn ${styles.btnBlues}`} style={{ width: "102px" }}>
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4 border-bottom" id="detailEvent">
          <h3>Detail</h3>
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">{getDataEvent.detail_event}</div>
            </div>
          </div>
        </div>
        <div className="row py-4 border-bottom gap-3" id="attendansEvent">
          <h3>Attendees ({getDataEvent.attendees.length})</h3>
          {getDataEvent.attendees.map((attendees) => {
            return (
              <div key={attendees.id} className="card border-0 shadow-sm" style={{ borderRadius: "28px", width: "150px" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
                  </div>
                  <h5 className="text-center mt-3">{attendees.user.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row py-4 border-bottom gap-3 justify-content-center flex-wrap" id="attendansEvent">
          <h3>Comments</h3>
          <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
            <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} layout="fixed" className="rounded-circle" />
          </div>
          <div className="col-lg-8 col-sm">
            <textarea name="" id="" className="form-control" cols="10" rows="5" placeholder="Comment"></textarea>
          </div>
          <div className="col-lg-1 col-sm-2 d-flex align-items-center">
            <FaAngleDoubleRight size={50} />
          </div>
          {getDataEvent.comment.map((commentList) => {
            return (
              <div className="row justify-content-center" key={commentList.id}>
                <div className="col-lg-10">
                  <div className="card border-0 shadow-sm" style={{ borderRadius: "20px" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-2">
                          <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
                        </div>
                        <div className="col-lg-10">
                          <h3>{commentList.user.name}</h3>
                          <p>{commentList.comment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
