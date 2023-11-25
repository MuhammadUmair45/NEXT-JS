import Image from 'next/image'
import Campus1 from '../../public/img/Campus1.png'
import Campus2 from '../../public/img/Campus2.png'
import Campus3 from '../../public/img/Campus3.png'

function Course() {
    return (
        <div>
            <section className="course">
                <h1>Course We Offer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <div className="course-col">
                        <h3>Undergraduate Programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                            soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.</p>
                    </div>
                    <div className="course-col">
                        <h3>Graduate Programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                            soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.</p>
                    </div>
                    <div className="course-col">
                        <h3>Adult Learning & Degree Completion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                            soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.</p>
                    </div>
                </div>
            </section>

            <section className="facilities">
                <h1>Best Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <div className="facilities-col">
                        <Image src={Campus1} alt="" />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                    </div>
                    <div className="facilities-col">
                        <Image src={Campus2} alt="" />
                        <h3>Artificial Intelligence</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                    </div>
                    <div className="facilities-col">
                        <Image src={Campus3} alt="" />
                        <h3>Data Science</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Course;