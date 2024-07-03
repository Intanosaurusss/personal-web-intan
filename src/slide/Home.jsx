import React from 'react';
import 'daisyui/dist/full.css'; // Pastikan Anda mengimpor CSS daisyUI
import intanoImage from '../assets/intano.png'; // Impor gambar

const Home = () => {
  return (
    <>
    <style>{`
    .title {
    font-weight: bold;
    font-size: 50px;
    }
    .hallo {
    font-weight: bold;
    font-size: 30px;
    }
    .container3 {
    margin-top: 60px;
    margin-bottom: 50px;
    }
    `}</style>
    <div className="hero min-h-screen bg-base-200 pt-20 z-0" section id="home">
      <div className="container3 hero-content flex-col lg:flex-row ">
        <div className="order-2 lg:order-1">
        <p className="hallo">Hi,</p>
          <h1 className="title">Saya Intan Nuraeni</h1>
          <p className="py-6">Seorang siswi jurusan Pengembangan Perangkat Lunak dan Game di SMKN 1 Ciomas</p>
          {/* <p className="py-6">Saya memiliki minat yang besar dalam dunia teknologi dan bermimpi menjadi seorang developer</p>
          <p className="py-6">yang mampu menciptakan kode - kode brilian yang bermanfaat bagi banyak orang.</p> */}
          <br></br>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <img src={intanoImage} className="max-w-sm rounded-lg shadow-2xl order-1 lg:order-2" alt="Hero" />
      </div>
    </div>
    </>
  );
}

export default Home;
