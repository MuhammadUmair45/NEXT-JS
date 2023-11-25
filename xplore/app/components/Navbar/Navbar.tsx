'use client'
import Link from 'next/link'
import BlogSlug from "../getRouter/getRouter";


function showMenu() {
    let navLinks = document.getElementById("navLinks");
    console.log("Show Menu");
    //navLinks.style.right = "0";
}

function hideMenu() {
    console.log("Hide Menu");
    //navLinks.style.right = "-200px";
}

export default function Header () {
    let routerValue = BlogSlug();
    console.log(routerValue);
    var pageTitle = ""; 
    if (routerValue === "/Course") {
        pageTitle = "Our Courses"
    }
    else if (routerValue === "/Blog") {
        pageTitle = "Our Post"
    }
    else if (routerValue === "/About") {
        pageTitle = "About Us"
    }
    else if (routerValue === "/Contact") {
        pageTitle = "Contact Us"
    }
    return (
        <div>

            {routerValue === "/"
                ? <section className="header">
                <nav>
                    <a href="index.html" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </a>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times ssss" onClick={hideMenu}></i>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/Course">Course</Link></li>
                            <li><Link href="/Blog">Blog</Link></li>
                            <li><Link href="/About">About</Link></li>
                            <li><Link href="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onClick={showMenu}></i>
                    
                </nav>

                <div className="text_box">
                    <h2>GET READY</h2>
                    <p id="headtext">TO DISCOVER CAMPUS</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                        <br /> esse blanditiis in quae perspiciatis quo.
                    </p>
                    <a href="#" className="hero_btn">Visit Us To Know More</a>
                </div>
            </section>
                : <section className="Sub-header">
                <nav>
                    <a href="index.html" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </a>
                    <div className="nav-links" id="navLinks">
                        
                        <i className="fa fa-times" onClick={hideMenu}></i>
                        <ul>
                        <li><Link href="/">Home</Link></li>
                            <li><Link href="/Course">Course</Link></li>
                            <li><Link href="/Blog">Blog</Link></li>
                            <li><Link href="/About">About</Link></li>
                            <li><Link href="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onClick={showMenu}></i>
                </nav>
                <h1>{pageTitle}</h1>
            </section>
            }
            
        </div>
    )
}
