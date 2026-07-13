import React, { useState } from "react";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Random</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>

        <button
          className="enquire-btn"
          onClick={() => setShowForm(true)}
        >
          Enquire Now
        </button>
      </header>

      {/* Enquiry Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h2>Enquiry Form</h2>

            <form className="enquiry-form">
              <input type="text" placeholder="Full Name" required />

              <input type="email" placeholder="Email Address" required />

              <input type="tel" placeholder="Phone Number" required />

              <textarea
                rows="4"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Segoe UI, sans-serif;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:18px 8%;
          background:#0f172a;
          color:white;
          position:sticky;
          top:0;
          z-index:100;
          box-shadow:0 4px 15px rgba(0,0,0,0.2);
        }

        .logo{
          font-size:28px;
          font-weight:700;
          color:#38bdf8;
        }

        .nav-links{
          display:flex;
          gap:30px;
        }

        .nav-links a{
          text-decoration:none;
          color:white;
          font-weight:500;
          transition:0.3s;
        }

        .nav-links a:hover{
          color:#38bdf8;
        }

        .enquire-btn{
          background:#38bdf8;
          color:white;
          border:none;
          padding:12px 24px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
          transition:0.3s;
        }

        .enquire-btn:hover{
          background:#0ea5e9;
          transform:translateY(-2px);
        }

        .modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.65);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:999;
        }

        .modal-box{
          width:90%;
          max-width:500px;
          background:white;
          padding:30px;
          border-radius:16px;
          position:relative;
          animation:popup .3s ease;
        }

        @keyframes popup{
          from{
            opacity:0;
            transform:scale(.8);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .close-btn{
          position:absolute;
          right:15px;
          top:15px;
          width:35px;
          height:35px;
          border:none;
          border-radius:50%;
          background:#ef4444;
          color:white;
          cursor:pointer;
          font-size:18px;
        }

        .close-btn:hover{
          background:#dc2626;
        }

        .modal-box h2{
          margin-bottom:20px;
          color:#0f172a;
        }

        .enquiry-form{
          display:flex;
          flex-direction:column;
          gap:15px;
        }

        .enquiry-form input,
        .enquiry-form textarea{
          padding:14px;
          border:1px solid #d1d5db;
          border-radius:8px;
          outline:none;
          font-size:15px;
        }

        .enquiry-form input:focus,
        .enquiry-form textarea:focus{
          border-color:#38bdf8;
        }

        .submit-btn{
          background:#0f172a;
          color:white;
          border:none;
          padding:14px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
          transition:.3s;
        }

        .submit-btn:hover{
          background:#1e293b;
        }

        @media(max-width:768px){
          .navbar{
            flex-direction:column;
            gap:15px;
          }

          .nav-links{
            gap:15px;
            flex-wrap:wrap;
            justify-content:center;
          }
        }
      `}</style>
    </>
  );
};

export default Header;