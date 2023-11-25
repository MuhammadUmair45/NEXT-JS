import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import Link from 'next/link'

const icons = [
    {
        icon: <FaFacebookF />,
        href: "#"        
    },
    {
        icon: <FaInstagram />,
        href: "##"
    },
    {
        icon: <FaTwitter />,
        href: "###"
    },
    {
        icon: <FaLinkedin />,
        href: "####"
    }
];

export default function Footer () {
    return (
        <div>
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
                </p>

                <div className="icons flex items-center justify-center">
                    {icons.map((item)=>(<Link href={item.href} style={{"margin": "0 10px"}}>{item.icon}</Link>))}
                    {/* <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i> */}
                </div>
                <p>Made with <span className="inline-block"><FaHeart /></span> by <a href="index.html">Sagar Developer</a></p>
                <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
            </section>
        </div>
    )
}