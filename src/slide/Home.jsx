import React from 'react';
import 'daisyui/dist/full.css'; // Pastikan Anda mengimpor CSS daisyUI

const Home = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200 pt-20 z-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl order-1 lg:order-2" alt="Hero" />
      </div>
    </div>
    </>
  );
}

export default Home;
