// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import devTools from 'devtools-detect';

// export default function Vr2() {
//     const [isNavVisible, setNavVisible] = useState(false);
//     const [showIcons, setShowIcons] = useState(false);
//     const phoneNumber = "919328623606";

//     const toggleNavbar = () => {
//         setNavVisible(!isNavVisible);
//     };

//     const toggleIcons = () => {
//         setShowIcons(!showIcons);
//     };

//     const openWhatsApp = () => {
//         window.open(`https://wa.me/${phoneNumber}`, "_blank");
//     };

//     const makeCall = () => {
//         window.location.href = `tel:${phoneNumber}`;
//     };

//     useEffect(() => {
//         window.scrollTo(0, 0);

//         if (typeof window !== "undefined" && process.env.NODE_ENV === "development" && devTools.isOpen) {
//             alert("Developer tools are open! Be careful. 🚨");
//         }

//         const handleKeyDown = (e) => {
//             if (
//                 e.key === 'F12' ||
//                 (e.ctrlKey && e.shiftKey && e.key === 'I') ||
//                 (e.ctrlKey && e.shiftKey && e.key === 'J') ||
//                 (e.ctrlKey && e.key === 'U')
//             ) {
//                 alert("DevTools access is restricted!");
//                 e.preventDefault();
//             }
//         };

//         document.addEventListener('keydown', handleKeyDown);
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, []);

//     return (
//         <div>
//             <header>
//                 <div className="bars" onClick={toggleNavbar}>
//                     <i className="fa-solid fa-bars-staggered"></i>
//                 </div>

//                 <div className="logo">
//                     <img src="/img/logo.png" alt="Protected" />
//                 </div>

//                 <nav className={isNavVisible ? 'show' : ''}>
//                     <Link to="/">Home</Link>
//                     <Link to="/projects">Projects</Link>
//                     <Link to="/vr" style={{ color: 'green', fontWeight: 'bold' }}>Virtual Tour</Link>
//                     <Link to="/services">Services</Link>
//                     <Link to="/aboutUs">About us</Link>
//                     <Link to="/blog">Blog</Link>
//                     <Link to="/contactUs">Contact us</Link>
//                 </nav>

//                 <div className="icon">
//                     <a href="https://www.instagram.com/rangrag_studio" target="_blank" rel="noopener noreferrer">
//                         <div className="insta"><i className="fa-brands fa-instagram"></i></div>
//                     </a>
//                     <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer">
//                         <div className="insta"><i className="fa-brands fa-facebook-f"></i></div>
//                     </a>
//                     <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer">
//                         <div className="insta"><i className="fa-brands fa-linkedin-in"></i></div>
//                     </a>
//                     <a href="https://youtube.com/@rangraginterior" target="_blank" rel="noopener noreferrer">
//                         <div className="insta"><i className="fa-brands fa-youtube"></i></div>
//                     </a>
//                 </div>
//             </header>

//             <iframe
//                 src="https://vr1-nu.vercel.app/"
//                 width="100%"
//                 height="600px"
//                 style={{ border: 'none' }}
//                 allowFullScreen
//                 title="Virtual Tour"
//             />

//             <footer className="footer">
//                 <div className="footer-container">
//                     <div className="footer-about">
//                         <h2>About Us</h2>
//                         <p>We specialize in creating unique and stunning interior designs that transform your spaces into luxurious and comfortable havens.</p>
//                     </div>

//                     <div className="footer-links">
//                         <h2>Quick Links</h2>
//                         <ul>
//                             <li><Link to="/projects">PROJECTS</Link></li>
//                             <li><Link to="/services">SERVICES</Link></li>
//                             <li><Link to="/aboutUs">AboutUs</Link></li>
//                             <li><Link to="/contactUs">ContactUs</Link></li>
//                         </ul>
//                     </div>

//                     <div className="footer-contact">
//                         <h2>Contact Us</h2>
//                         <p>Email: contanct@rangragstudio.in</p>
//                         <p>Phone: +91 9328623606</p>
//                         <p>Address: 203 Sankar enclave, Rajkot, Gujarat</p>
//                     </div>

//                     <div className="footer-newsletter">
//                         <h2>Newsletter</h2>
//                         <p>Subscribe to our newsletter for design tips and updates!</p>
//                         <form>
//                             <input type="email" placeholder="Enter your email" required />
//                             <button type="submit">Subscribe</button>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="footer-bottom">
//                     <p>&copy; 2024 Interior Design Co. All Rights Reserved.</p>
//                     <div className="footer-social">
//                         <a href="https://www.instagram.com/rangrag_studio" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
//                         <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
//                         <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
//                         <a href="https://youtube.com/@rangraginterior" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
//                         <a href="https://www.justdial.com/Rajkot/.../" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google"></i></a>
//                     </div>
//                 </div>
//             </footer>

//             <div className="parent-div">
//                 {showIcons && (
//                     <div className="h-icons">
//                         <div className="hidden-icons" onClick={makeCall}><i className="fa fa-phone"></i></div>
//                         <div className="hidden-icons" onClick={openWhatsApp}><i className="fa-brands fa-whatsapp"></i></div>
//                     </div>
//                 )}

//                 <div className="icon-div" onClick={toggleIcons}>
//                     <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
//                     <i className="fa fa-phone call-icon"></i>
//                 </div>
//             </div>

//             <div className="up">
//                 <a href="#sec1"><img src="/img/chervon.png" alt="Up arrow" /></a>
//             </div>
//         </div>
//     );
// }
