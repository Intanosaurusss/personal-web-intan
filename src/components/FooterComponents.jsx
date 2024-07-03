import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterComponents = () => {
  return (
    <>
      <style>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #333; /* Sesuaikan dengan warna teks */
          padding: 20px;
          border-radius: 8px;
        }

        .footer-nav {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .footer-link {
          color: oklch(0.746477 0.0216 264.436); /* Menetapkan warna teks dengan OKLCH */
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #555; /* Sesuaikan dengan warna saat link dihover */
        }

        .footer-social {
          display: flex;
          gap: 20px;
          color: oklch(0.746477 0.0216 264.436); /* Menetapkan warna teks dengan OKLCH */
        }

        .footer-social-link {
          color: oklch(0.746477 0.0216 264.436); /* Menetapkan warna teks dengan OKLCH */
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-social-link:hover {
          color: #555; /* Sesuaikan dengan warna saat link dihover */
        }

        .footer-icon {
          fill: currentColor;
        }

        .footer-copyright {
          text-align: center;
          margin-top: 2px;
          color: oklch(0.746477 0.0216 264.436); /* Menetapkan warna teks dengan OKLCH */
        }

        @media (max-width: 768px) {
          .footer-nav,
          .footer-social {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
      <footer className="footer">
        <nav className="footer-social">
          <a className="footer-social-link" href="https://wa.me/+62895365544316" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="footer-icon" size={24}/>
          </a>
          <a className="footer-social-link" href="https://www.instagram.com/intarara_/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="footer-icon" size={24}/>
          </a>
          <a className="footer-social-link" href="https://www.youtube.com/channel/UCP821jY9ifIFDKmXgGSw_qw" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="footer-icon"size={24} />
          </a>
          <a className="footer-social-link" href="https://github.com/Intanosaurusss" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" size={24}/>
          </a>
        </nav>
        <aside className="footer-copyright">
          <p>Copyright © {new Date().getFullYear()} - Portfolio Intan</p>
        </aside>
      </footer>
    </>
  );
};

export default FooterComponents;
