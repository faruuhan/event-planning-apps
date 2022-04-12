import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../../styles/Styles.module.css";

export default function DetailEvent() {
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
        {/* <div className="row my-4">
          <div className="d-flex justify-content-center border-bottom py-3 gap-3">
            <div>Detail</div>
            <div>Attends</div>
            <div>Comment</div>
          </div>
        </div> */}
        <div className="row py-4 border-bottom" id="detailEvent">
          <h3>Detail</h3>
          <div className="col-lg">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "28px" }}>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit voluptate quia atque aspernatur neque animi earum ut repellendus recusandae et est, qui omnis esse fugiat pariatur voluptatibus aliquam ab rerum? Ipsum
                inventore aperiam pariatur vitae in soluta enim, sit cum ex autem nostrum dignissimos cupiditate modi veritatis saepe molestias fugit vel nemo. Sint odit, ratione cum asperiores quasi quis eius veniam excepturi porro
                molestiae accusamus, voluptatem esse iusto dolor placeat alias rem eos quod, sed id optio fugiat nulla? Dolorum illo laboriosam non omnis cupiditate dicta expedita provident, maiores, ullam ipsum similique aperiam
                accusantium atque. Recusandae, iste quis, quos nemo praesentium doloribus consequuntur deleniti nesciunt sunt odio explicabo. Laboriosam iure ipsa esse soluta deserunt nobis facere magnam enim quibusdam. Nihil atque beatae
                dolorum dolor mollitia inventore esse, ab ex excepturi itaque autem hic laudantium natus officia animi nesciunt minus odit illum cum accusantium ullam ad sit laborum rerum? Delectus exercitationem deleniti beatae
                consectetur, odit, impedit itaque officiis voluptatibus quae recusandae ut, doloremque ratione debitis expedita velit maiores culpa excepturi repellat? Nostrum iure ducimus laborum modi minima magnam! Nesciunt soluta dolorum
                cumque nulla alias atque dolores iusto odit aperiam? Praesentium, sapiente autem vel nemo distinctio architecto iure et id saepe ullam accusamus quos unde pariatur, soluta magnam omnis. Consectetur illum sint unde
                voluptatibus reiciendis recusandae aperiam dolore sit vel incidunt suscipit nesciunt inventore architecto, corporis laborum labore, magni possimus enim, vitae quas libero facilis ex? Totam ab, numquam tempora necessitatibus
                commodi, harum a, possimus distinctio odio alias quaerat. Ipsum, voluptas!
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4 border-bottom gap-3" id="attendansEvent">
          <h3>Attendans (8)</h3>
          <div className="card border-0 shadow-sm" style={{ borderRadius: "28px", width: "150px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
              </div>
              <h5 className="text-center mt-3">Jhon</h5>
            </div>
          </div>
          <div className="card border-0 shadow-sm" style={{ borderRadius: "28px", width: "150px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
              </div>
              <h5 className="text-center mt-3">Jhon</h5>
            </div>
          </div>
          <div className="card border-0 shadow-sm" style={{ borderRadius: "28px", width: "150px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
              </div>
              <h5 className="text-center mt-3">Jhon</h5>
            </div>
          </div>
          <div className="card border-0 shadow-sm" style={{ borderRadius: "28px", width: "150px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
              </div>
              <h5 className="text-center mt-3">Jhon</h5>
            </div>
          </div>
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
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm" style={{ borderRadius: "20px" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2">
                      <Image src={"https://i.ibb.co/Z2TCGbh/istockphoto-1147544807-612x612.jpg"} width={100} height={100} className="rounded-circle" />
                    </div>
                    <div className="col-lg-10">
                      <h3>John</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam eius placeat delectus optio temporibus aliquam voluptates non consectetur consequatur? Itaque autem, vel nemo eaque nobis fugit odit harum officiis.
                      </p>
                    </div>
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
