import React from 'react';
import 'daisyui/dist/full.css'; // Pastikan Anda mengimpor CSS daisyUI

const Navbar = () => {
  return (
    <>
    <style>{`
    .navbar-start {
      z-index: 1000;
    }
    .navbar-end {
      z-index: 1000;
    }
    .navbar{
    position: fixed;
    }
    html {
      scroll-behavior: smooth;
    }
    `}</style>
    <div className="App">
      <header className="App-header">
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full" style={{ zIndex: 100 }}> {/* Tambahkan z-index di sini */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#galeriportfolio">Portfolio</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[60] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  </>
  );
}

export default Navbar;
