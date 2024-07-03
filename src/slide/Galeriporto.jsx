import React from 'react';
import frontendimage from '../assets/frontend.png'; // Impor gambar
import backendimage from '../assets/backend.png'; 
import designimage from '../assets/design.png';
import sertifikatimage from '../assets/sertifikat.png'

const Galeriporto = () => {
  return (
    <>
    <style>
    {`
        .content2 {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 25px; /* Jarak antar kartu */
          margin-top: 40px;
          padding-bottom: 60px;
        }
          .title1 {
          font-weight: bold;
          font-size: 50px;
          padding-top: 30px;
          }
        .card1, .card2, .card3 {
          flex: 1 1 100px; /* Memungkinkan ukuran kartu fleksibel, tadinya 300 */
          max-width: 20%; /* Membatasi lebar maksimal */
          padding: 20px;
          box-sizing: border-box;
          border-radius: 10px; /* Membuat sudut kartu melengkung */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Bayangan kartu */
          transition: box-shadow 0.3s ease; /* Transisi efek bayangan */
        }
        .card1 img, .card2 img, .card3 img {
          width: 100%; /* Membuat gambar responsif */
          height: auto;
          border-radius: 10px; /* Melengkungkan sudut gambar */
        }
        .card-body {
          text-align: left; /* Mengatur teks menjadi kiri */
        }
          .card1:hover, .card2:hover, .card3:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Efek bayangan saat dihover */
        }
        @media (max-width: 768px) {
          .card1, .card2, .card3{
            max-width: 100%;
          }
        }
        `}
    </style>
    <div className="about-container bg-base-200" section id="galeriportfolio">
    <h1 className="title1">Portfolio</h1>
    <div className="content2">
      <div className="card1 bg-base-100">
        <figure className="px-4 pt-4">
          <img
            src={frontendimage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title text-sm">Frontend</h2>
          <p className="text-xs">Ini adalah project frontend yang saya kerjakan saat ujilevel di sekolah</p>
          <div className="card-actions">
          <a href="https://github.com/Intanosaurusss/frontend-intan" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Check</a>
        </div>
        </div>
      </div>
      <div className="card2 bg-base-100">
        <figure className="px-4 pt-4">
          <img
            src={backendimage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title text-sm">Backend</h2>
          <p className="text-xs">Ini adalah project backend yang saya kerjakan saat ujilevel di sekolah</p>
          <div className="card-actions">
          <a href="https://github.com/Intanosaurusss/backend-intan" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Check</a>
        </div>
        </div>
      </div>
      <div className="card3 bg-base-100">
        <figure className="px-4 pt-4">
          <img
            src={designimage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title text-sm">Design</h2>
          <p className="text-xs">Ini adalah salah satu dari project design yang pernah saya buat di figma</p>
          <div className="card-actions">
          <a href="https://www.figma.com/design/FBTaZYRpMp79wcVMcDYqau/design-web%2Faplikasi-perpus?t=igJTxPUHzoCDQRHG-1" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Check</a>
        </div>
        </div>
      </div>
      <div className="card3 bg-base-100">
        <figure className="px-4 pt-4">
          <img
            src={sertifikatimage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title text-sm">Sertifikat</h2>
          <p className="text-xs">Ini adalah sertifikat yang saya dapat saat saya menjadi siswi jurusan PPLG</p>
          <div className="card-actions">
          <a href="https://drive.google.com/drive/folders/1Jhjl4jwvfDh-CVKog8P0EXN_Muuz8HE8?usp=sharing" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Check</a>
        </div>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default Galeriporto;
