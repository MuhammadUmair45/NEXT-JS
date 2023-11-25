import Image from 'next/image'
import Campus1 from '../public/img/Campus1.png'
import Campus2 from '../public/img/Campus2.png'
import Campus3 from '../public/img/Campus3.png'
import library from '../public/img/library.png'
import playground from '../public/img/playground.png'
import food from '../public/img/food.png'
import user from '../public/img/user.png'

const courseCols = [
    {
        title: "Undergraduate Programs",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."        
    },
    {
        title: "Graduate Programs",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
    },
    {
        title: "Adult Learning & Degree Completion",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
    }
];

const campuses = [
    {
        image: Campus1,
        title: "DELHI"        
    },
    {
        image: Campus2,
        title: "HYDERABAD" 
    },
    {
        image: Campus3,
        title: "MUMBAI" 
    }
];

const facilities = [
    {
        image: library,
        title: "Best Libary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."        
    },
    {
        image: playground,
        title: "Athletics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." 
    },
    {
        image: food,
        title: "Tasty and Healthy Food",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." 
    }
];

const testimonials = [
    {
        image: user,
        name: "Student Name 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque adeserunt. In quia repellat maxime."        
    },
    {
        image: user,
        name: "Student Name 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque adeserunt. In quia repellat maxime." 
    }
];



export default function Home() {
  return (
    <div>
      <section className="course">
          <div className="PageBlock">
              <div className="verticalLine"></div>
              <div className="Clear"></div>
          </div>
          <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">

                {courseCols.map((item, index)=>(
                    <div className="course-col" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}

          </div>
      </section>
      

      <section className="campus">
          <div className="PageBlock">
              <div className="verticalLine"></div>
              <div className="Clear"></div>
          </div>
          <h1>TAKE OUR VIRTUAL TOUR</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">
                
                {campuses.map((item, index)=>(
                    <div className="campus-col">
                        <Image src={item.image} alt="" />
                        <div className="layer">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
                
          </div>
      </section>
      
      <section className="facilities">
          <div className="PageBlock">
              <div className="verticalLine"></div>
              <div className="Clear"></div>
          </div>
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">

            {facilities.map((item, index)=>(
                <div className="facilities-col" key={index}> 
                    <Image src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
                
          </div>
      </section>
      
      <section className="testimonials">
          <div className="PageBlock">
              <div className="verticalLine"></div>
              <div className="Clear"></div>
          </div>
          <h1>What Our Student Says</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">

                {testimonials.map((item, index)=>(
                    <div className="testimonials-col" key={index}>
                       <Image src={item.image} alt="oo.." />
                       <div>
                           <p>{item.desc}</p>
                           <h3>{item.name}</h3>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                       </div>
                   </div>
                ))}
          </div>
      </section>
      
      <section className="cta">
          <h1>GET READY FOR A BRIGHT FUTURE</h1>
          <a href="contact.html" className="hero_btn">CONTACT US</a>
      </section>
    </div>
  );
}
