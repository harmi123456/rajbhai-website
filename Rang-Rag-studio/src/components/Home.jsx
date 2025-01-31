import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState("");


    const toggleNavbar = () => {
        setNavVisible(!isNavVisible);
    };

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    //QUIZ

    const handleNext = (question, answer) => {
        setAnswers({ ...answers, [question]: answer });
        if (step < 3) {
            setStep(step + 1);
        } else {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const styles = {
            Modern: answers.q1 === "Living Room 1" && answers.q3 === "Functionality",
            Rustic: answers.q2 === "Wood",
            Minimalist: answers.q3 === "Aesthetics",
        };
        const matchedStyle = Object.keys(styles).find((style) => styles[style]) || "Eclectic";
        setResult(matchedStyle);
    };


    const styleImages = {
        Modern: "/img/23.jpg",
        Rustic: "/img/36.jpg",
        Minimalist: "/img/3.jpg",
        Eclectic: "/img/28.jpg",
    };


    //WhatsApp icons
    const phoneNumber = "919328623606";

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
    };

    const makeCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };


    const [showIcons, setShowIcons] = useState(false);

    const toggleIcons = () => {
        setShowIcons(!showIcons);
    };



    //privacy
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e) => {
            e.preventDefault();
            alert("🔒 Content Protected!");
        };

        document.addEventListener("contextmenu", handleContextMenu);


        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };

    }, []);

    

    return (
        <div id='sec1'>

            <header>

                <div className="bars" onClick={toggleNavbar}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>

                <div className="logo">
                    <img src="/img/logo.png" alt="Protected" />
                </div>

                <nav className={isNavVisible ? 'show' : ''}>
                    <Link to='/' style={{ color: 'green', fontWeight: 'bold' }}>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/aboutUs'>About us</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contactUs'>Contact us</Link>
                </nav>

                <div className="icon">

                    <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target='_blank'>
                        <div className='insta'><i class="fa-brands fa-instagram"></i></div>
                    </a>
                    <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target='_blank'>
                        <div className="insta"><i class="fa-brands fa-facebook-f"></i></div>
                    </a>
                    <a href="https://www.linkedin.com/company/rangrag-studio/" target='_blank'>
                        <div className="insta"><i class="fa-brands fa-linkedin-in"></i></div>
                    </a>
                    <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target='_blank'>
                        <div className="insta"><i class="fa-brands fa-youtube"></i></div>
                    </a>

                </div>

            </header>


            <div className="home-sec1">
                <h1>Step Inside RangRag intirior studio !!</h1>

                <p>Whether you’re planning a cozy home makeover or envisioning a luxurious commercial project, our expertise <br /> in modern interiors and cutting-edge 3D visualization ensures your design dreams become a reality.</p>
                <h1 >✨ Explore. Inspire. Create. ✨</h1>
            </div>

        


            <div className="sec2">

                <section class="services-overview">
                    <div class="container">
                        <h2 class="section-title">Our Interior Design Services</h2>
                        <p class="section-subtitle">Transforming your spaces with creativity, functionality and elegance.</p>
                        <div class="services-grid">
                            <div class="service-box">
                                <img src="/img/23.jpg" alt="Residential Design" class="service-img" />
                                <h3 class="service-title">Residential Interior Design</h3>
                                <p class="service-description">
                                    Elevate your home with tailored designs that blend aesthetics and functionality for a cozy living space.
                                </p>
                            </div>
                            <div class="service-box">
                                <img src="/img/15.jpg" alt="Commercial Design" class="service-img" />
                                <h3 class="service-title">Commercial Interior Design</h3>
                                <p class="service-description">
                                    Create professional and inspiring workspaces with modern and efficient design solutions.
                                </p>
                            </div>
                            <div class="service-box">
                                <img src="/img/26.jpg" alt="Space Planning" class="service-img" />
                                <h3 class="service-title">Space Planning</h3>
                                <p class="service-description">
                                    Maximize the potential of your space with smart and strategic planning for every corner.
                                </p>
                            </div>
                            <div class="service-box">
                                <img src="/img/Scene 1.jpg" alt="Customized Design" class="service-img" />
                                <h3 class="service-title">Customized Design Solutions</h3>
                                <p class="service-description">
                                    Enjoy bespoke designs tailored to your unique needs, preferences, and personality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <div className="sec4">

                <section class="design-process">

                    <div class="container">

                        <h2 class="section-title">Our Design Process</h2>

                        <p class="section-subtitle">We bring your vision to life with a seamless and collaborative approach.</p>

                        <div class="process-grid">

                            <div class="process-step">
                                <div class="step-icon">
                                    <img src="/img/consult.png" alt="Consultation Icon" />
                                </div>
                                <h3 class="step-title">Initial Consultation</h3>
                                <p class="step-description">
                                    Discuss your ideas, needs, and preferences in a one-on-one meeting.
                                </p>
                            </div>

                            <div class="process-step">
                                <div class="step-icon">
                                    <img src="/img/planning.png" alt="Planning Icon" />
                                </div>
                                <h3 class="step-title">Design Concept & Planning</h3>
                                <p class="step-description">
                                    Develop a detailed design plan tailored to your space and lifestyle.
                                </p>
                            </div>

                            <div class="process-step">
                                <div class="step-icon">
                                    <img src="/img/3d.png" alt="Rendering Icon" />
                                </div>
                                <h3 class="step-title">3D Rendering & Visualization</h3>
                                <p class="step-description">
                                    Experience your design through realistic 3D renderings.
                                </p>
                            </div>

                            <div class="process-step">
                                <div class="step-icon">
                                    <img src="/img/execute.png" alt="Delivery Icon" />
                                </div>
                                <h3 class="step-title">Execution & Project Delivery</h3>
                                <p class="step-description">
                                    Implement the design with precision and deliver on time.
                                </p>
                            </div>

                        </div>

                        <div class="cta-button">
                            <Link to="/contactUs" className="button">Schedule a Consultation</Link>
                        </div>
                    </div>

                </section>

            </div>


            <div className="sec5">

                <section className="ar-vr-zigzag-section">
                    <h2 className="ar-vr-title">Explore AR & VR Services</h2>

                    <div className="zigzag-container">

                        {/* Feature 1 */}
                        <div className="zigzag-row">

                            <div className="zigzag-text">
                                <h3>Virtual Walkthroughs</h3>
                                <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
                                    <p>
                                        Dive into a fully immersive 360° VR experience where you can visualize every corner of your dream space.
                                        Walk through meticulously designed interiors, such as a cozy dining area with an elegant dining table, perfectly set to reflect your unique style and taste.
                                    </p>
                                    <p>
                                        This advanced technology allows you to experience realistic textures, lighting, and spatial arrangements,
                                        giving you a true-to-life preview of your design before construction even begins. It's the ultimate way to ensure every detail aligns with your vision.
                                    </p>
                                </div>
                                <span className="read-more" onClick={toggleContent}>
                                    {isExpanded ? "Show Less" : "READ MORE..."}
                                </span>
                            </div>

                            <div className="zigzag-image">
                                {/* <img
                                    src="/img/26.png"
                                    alt="Virtual Walkthrough"
                                /> */}
                                <div style={{ width: "110%", height: "400px" }}>
                                    <a-scene embedded arjs>
                                        <a-assets>
                                            <img id="MySky" crossorigin src="/img/panorama-home.png" alt="360 Panorama" />
                                        </a-assets>

                                        <a-sky src="#MySky"></a-sky>
                                    </a-scene>
                                </div>
                            </div>

                        </div>

                        {/* Feature 2 */}
                        <div className="zigzag-row">

                            <div className="zigzag-image">
                                <img
                                    src="/img/33.jpg"
                                    alt="AR Models"
                                />
                            </div>

                            <div className="zigzag-text">

                                <h3>AR Models</h3>

                                <div className={`content ${isExpanded ? "expanded" : "collapsed"}`} >

                                    <p>
                                        Visualize your designs in real-world environments using Augmented
                                        Reality on your mobile devices.
                                    </p>


                                    <div>
                                        <p>
                                            Augmented Reality helps bridge the gap between design and reality,
                                            enabling users to interact with 3D models in their own space.
                                        </p>
                                        <ul>
                                            <li>Test multiple layouts without moving a thing.</li>
                                            <li>Make informed design choices.</li>
                                            <li>Share your ideas with friends and family.</li>
                                        </ul>
                                    </div>

                                </div>

                                <span className="read-more" onClick={toggleContent}>
                                    {isExpanded ? "Show Less" : "READ MORE..."}
                                </span>

                            </div>

                        </div>

                        {/* Feature 3 */}
                        <div className="zigzag-row">

                            <div className="zigzag-text">
                                <h3>Interactive Decoration</h3>

                                <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
                                    <p>
                                        Enhance your hall with stunning decorative elements like flowerpots, vases, and plants.
                                        Visualize how they add charm and elegance to your space in real time.
                                    </p>
                                    <p>
                                        Experiment with different styles and arrangements to create a personalized ambiance.
                                        Whether it’s modern minimalism or a vibrant splash of colors, the choice is yours.
                                    </p>
                                    <p>
                                        Features:
                                        <ul>
                                            <li>Choose from a variety of flowerpot designs and materials.</li>
                                            <li>See how natural elements complement your hall decor.</li>
                                            <li>Adjust placement, lighting, and angles effortlessly.</li>
                                        </ul>
                                    </p>
                                    <p>
                                        Redefine your space with a touch of greenery and style that reflects your taste.
                                    </p>
                                </div>

                                <span className="read-more" onClick={toggleContent}>
                                    {isExpanded ? "Show Less" : "READ MORE..."}
                                </span>

                            </div>

                            <div className="zigzag-image">
                                <img
                                    src="/img/24.jpg"
                                    alt="Interactive Customization"
                                />
                            </div>

                        </div>

                        {/* Feature 4 */}
                        <div className="zigzag-row">

                            <div className="zigzag-image">
                                <img
                                    src="/img/15.jpg"
                                    alt="Immersive Storytelling"
                                />
                            </div>

                            <div className="zigzag-text">
                                <h3>Professional Workspace Simulation</h3>

                                <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
                                    <p>
                                        Redefine your company area with a sleek and modern setup. Visualize how elegant furniture and functional designs can enhance your workspace.
                                    </p>
                                    <p>
                                        Imagine a space with two sophisticated white chairs, a polished table, and a seamlessly integrated AC system—perfectly tailored for productive meetings and a professional atmosphere.
                                    </p>
                                    <p>
                                        Features:
                                        <ul>
                                            <li>Explore various furniture arrangements to optimize space.</li>
                                            <li>Test different table designs, from minimalist to executive styles.</li>
                                            <li>Visualize temperature control solutions for comfort and efficiency.</li>
                                        </ul>
                                    </p>
                                    <p>
                                        With our tools, create a workspace that reflects your brand's professionalism and innovation.
                                    </p>
                                </div>

                                <span className="read-more" onClick={toggleContent}>
                                    {isExpanded ? "Show Less" : "READ MORE..."}
                                </span>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

            {/* //Quiz */}

            <div className='sec6'>

                <div className="quiz-container">
                    <h2>Discover Your Perfect Interior Design Style</h2>
                    <p>Take our quiz to find your ideal style and transform your space!</p>
                    <img src="/img/quiz.gif" alt="" className='quiz_gif' />

                    {result ? (
                        <div className="quiz-result">
                            <h3 className="result-heading">
                                Your Style Is: <span>{result}</span>
                            </h3>
                            <img
                                src={styleImages[result]}
                                alt={result}
                                className="result-image"
                                style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '10px 0' }}
                            />
                            <p className="result-description">
                                {result === "Modern" && "You love clean, functional designs with a contemporary touch."}
                                {result === "Rustic" && "You enjoy natural materials and a warm, earthy feel in your spaces."}
                                {result === "Minimalist" && "You prefer simplicity, clean lines, and a clutter-free environment."}
                                {result === "Eclectic" && "Your style is unique and blends elements from various styles."}
                            </p>
                            <button className="quiz-btn" onClick={() => { setStep(1); setResult(""); }}>
                                Retake Quiz
                            </button>
                        </div>
                    ) : (

                        <div className="quiz-step">

                            {step === 1 && (
                                <>
                                    <h4>Question 1: Which living room design do you prefer?</h4>
                                    <div className="quiz-options">
                                        <button onClick={() => handleNext("q1", "Living Room 1")}>
                                            <img src="/img/14.jpg" alt="Living Room 1" />
                                        </button>
                                        <button onClick={() => handleNext("q1", "Living Room 2")}>
                                            <img src="/img/30.jpg" alt="Living Room 2" />
                                        </button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h4>Question 2: Which material appeals to you most?</h4>
                                    <div className="quiz-options">
                                        <button onClick={() => handleNext("q2", "Wood")}>
                                            <p>Wood</p>
                                            <img src="/img/wood1.gif" alt="" className='quiz_icon' />
                                        </button>
                                        <button onClick={() => handleNext("q2", "Glass")}>
                                            <p>Glass</p>
                                            <img src="/img/glass.png" alt="" className='quiz_icon' />
                                        </button>
                                        <button onClick={() => handleNext("q2", "Metal")}>
                                            <p>Metal</p>
                                            <img src="/img/metal.gif" alt="" className='quiz_icon' />
                                        </button>
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <h4>Question 3: What do you value most in home design?</h4>
                                    <div className="quiz-options">
                                        <button onClick={() => handleNext("q3", "Functionality")}>Functionality</button>
                                        <button onClick={() => handleNext("q3", "Aesthetics")}>Aesthetics</button>
                                        <button onClick={() => handleNext("q3", "Comfort")}>Comfort</button>
                                    </div>
                                </>
                            )}

                        </div>
                    )}
                </div>

            </div>


            {/* //YouTube Link */}
            <div className="sec3">

                <h2 className="sec3-title">Watch Our Featured Video</h2>

                <p className="sec3-description">
                    Explore our latest interior design trends and projects in action!
                </p>

                <div className="Yt_links">

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/l6qmQw3Wdms?autoplay=1&loop=1&playlist=l6qmQw3Wdms&mute=1"
                        title="Modern Living Room Interior Design | Stunning 3D Visualization Ideas for Your Home #home#homedesign"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/0wShAiKXd6k?autoplay=1&loop=1&playlist=0wShAiKXd6k&mute=1"
                        title="Modern Bedroom Interior Design | Stunning 3D Visualization &amp; Decor Ideas #3dvisualization #home"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/GEkfH8Bjhv0?autoplay=1&loop=1&playlist=GEkfH8Bjhv0&mute=1"
                        title="Stunning Interior Walkthrough | 3D Architectural Visualization | Modern Interior Design Tour"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/g-BIU2sPbQw?autoplay=1&loop=1&playlist=g-BIU2sPbQw&mute=1"
                        title="Stunning Interior Walkthrough | 3D Architectural Visualization | Modern Interior Design Tour"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/_nJVACqt_8E?autoplay=1&loop=1&playlist=_nJVACqt_8E&mute=1"
                        title="Stunning Exterior Walkthrough | 3D Architectural Visualization | Modern Exterior Design Tour"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <iframe
                        className="youtube-link"
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/0eX1GyYuxwU?autoplay=1&loop=1&playlist=0eX1GyYuxwU&mute=1"
                        title="Stunning Interior Walkthrough | 3D Architectural Visualization | Modern Interior Design Tour"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                </div>

            </div>


            <div className="sec8">

                <div className="image_insta button button2">
                    <img src="/img/40.jpg" alt="Instagram" />
                </div>
                <div className="image_insta button button2">
                    <img src="/residential/b3.jpg" alt="" />
                </div>
                <div className="image_insta button button2">
                    <img src="/img/35.jpg" alt="" />
                </div>
                <div className="image_insta button button2">
                    <img src="/img/44.jpg" alt="" />
                </div>

            </div>


            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-about">
                        <h2>About Us</h2>
                        <p>
                            We specialize in creating unique and stunning interior designs that transform your spaces into luxurious and comfortable havens.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to='/projects'>PROJECTS</Link></li>
                            <li><Link to='/services'>SERVICES</Link></li>
                            <li><Link to='/aboutUs'>AboutUs</Link> </li>
                            <li> <Link to='/contactUs'>ContactUs</Link></li>

                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h2>Contact Us</h2>
                        <p>Email: contanct@rangragstudio.in</p>
                        <p>Phone: +91 9328623606</p>
                        <p>Address: 203 possible Triangle, rajkot, Gujarat</p>
                    </div>

                    <div className="footer-newsletter">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our newsletter for design tips and updates!</p>
                        <form>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Interior Design Co. All Rights Reserved.</p>
                    <div className="footer-social">

                        <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.justdial.com/Rajkot/Rangrag-Studio-Near-Haridarshan-School-Mavdi/0281PX281-X281-240707141959-Z2N8_BZDET?catid=&checkin=&checkout=&vpfs=&stxt=%20Interior%203D%20Visualization%20Services&nid=11466419&stype=category_list&search=Interior-3D-Visualization-Services&area=Near%20Haridarshan%20School%20Mavdi&type=Architectural%20Walkthroughs&totalJdReviews=undefined&bdmsgtype=7&bdcaptiontype=6&bdpage=rsltpge&slectedDimgTag=&show_open_abd=0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i></a>

                    </div>
                </div>
            </footer>

            <div className="parent-div">

                {/* Divs to show/hide */}
                {showIcons && (

                    <div className="h-icons">
                        <div className="hidden-icons" onClick={makeCall}>
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="hidden-icons" onClick={openWhatsApp}>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>

                )}

                <div className="icon-div" onClick={toggleIcons}>
                    <i className="fa-brands fa-whatsapp  whatsapp-icon"></i>
                    <i className="fa fa-phone call-icon"></i>
                </div>

            </div>

            <div className="up">
                <a href="#sec1"><img src="/img/chervon.png" alt="" /></a>
            </div>

        </div>
    )
}
