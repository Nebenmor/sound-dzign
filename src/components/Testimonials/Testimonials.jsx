import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets/index";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          {/* Testimonial 1 */}
          <div className="testimonial">
            <img src={testimonial1} alt="testimonial-1" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial">
            <img src={testimonial2} alt="testimonial-2" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Instagram</div>
              <div className="review">
                I got to learn a lot about Music Production with thi course.
                Thanks :)
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial">
            <img src={testimonial3} alt="testimonial-3" />
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">
                Awesome! Great job!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
