import React from 'react';
import 'daisyui/dist/full.css'; // Pastikan Anda mengimpor CSS daisyUI
import intanooImage from '../assets/intanoo.png'; // Impor gambar

const Home = () => {
  return (
    <>
    <style>{`
    .title {
    font-weight: bold;
    font-size: 50px;
    display: inline-block;
    overflow: hidden;
    border-right: .15em; /* Efek kursor */
    white-space: nowrap;
    margin: 0 auto;
    animation: 
      typing 3.5s steps(30, end),
      blink-caret .75s step-end infinite;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: transparent; }
    }
    @keyframes repeat-text {
      0% { opacity: 1; } /* Mulai dengan teks terlihat */
      90% { opacity: 1; } /* Teks tetap terlihat selama 8 detik */
      100% { opacity: 0; } /* Hilangkan teks sebelum animasi dimulai lagi */
    }
    .hallo {
    font-weight: bold;
    font-size: 30px;
    }
    .container3 {
    margin-top: 140px;
    margin-bottom: 80px;
    gap: 100px;
    }
    .intanoo {
    border-radius: 10px;
    }
    .intanoo:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Efek bayangan saat dihover */
    }
    `}</style>
    <div className="hero min-h-screen bg-base-200 pt-20 z-0" section id="home">
      <div className="container3 hero-content flex-col lg:flex-row ">
        <div className="order-2 lg:order-1">
        <p className="hallo">Hallo,</p>
          <h1 className="title">Saya Intan Nuraeni</h1>
          <p>Selamat datang di ruang pribadi saya di mana saya
          berbagi project, pengalaman, dan aspirasi saya di industri</p>
          <p>teknologi yang terus berkembang.</p>
          <br></br>
          < a href="#galeriportfolio"><button className="btn btn-primary">Learn More</button></a>
        </div>
        <img src={intanooImage} className="intanoo max-w-sm rounded-lg shadow-2xl order-1 lg:order-2" alt="Hero" />
      </div>
    </div>
    </>
  );
}

export default Home;
