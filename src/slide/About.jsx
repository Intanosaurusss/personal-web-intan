import React from 'react';

const About = () => {
  return (
    <>
    <style>{`
    .about-container {
    text-align: center;
    margin-top: 40px;
    }
    .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    }
    .timeline-container {
    flex: 1;
    padding: 20px;
    padding-right: 110px;
    }
    .additional-text {
    flex: 1;
    padding: 20px;
    text-align: left;
    padding-right: 120px;
    }
    .title2 {
    font-weight: bold;
    font-size: 50px;
    padding-bottom: 30px;
    }
`}</style>
    <div className="about-container" section id="about">
      <h1 className="title2">About Me</h1>
      <div className="content">
        <div className="timeline-container">
          <ul className="timeline timeline-vertical">
            <p>Pendidikan</p>
            <br></br>
            <li> 
              <div className="timeline-start">2013</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">TK Raudhatul Hasanah</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2019</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">SDN 1 Ciomas</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2022</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">SMPN 2 Ciomas</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">Sekarang</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">SMKN 1 Ciomas</div>
              <hr/>
            </li>
          </ul>
        </div>
        <div className="additional-text">
          <p>Nama saya Intan Nuraeni, seorang siswi dari jurusan </p>
          <p>Pengembangan Perangkat Lunak dan Game di SMKN 1 Ciomas.</p>
          <p>Perjalanan saya di dunia pemrograman didorong oleh</p>
          <p>keinginan untuk mengembangkan kode yang brilian dan</p>
          <p>bermanfaat bagi banyak orang.</p>
          <br></br>
          <p>Selamat datang di ruang pribadi saya di mana saya</p>
          <p>berbagi proyek, pengalaman, dan aspirasi saya di industri</p>
          <p>teknologi yang terus berkembang.</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;
