import Image from 'next/image'
import Link from 'next/link'
import about from '../../public/img/about.png'

function About() {
    return (
        <div>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the world's largest University</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                        <Link href="#" className="hero_btn btn">EXPLORE NOW</Link>
                    </div>
                    <div className="about-col">
                        <Image src={about} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;