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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
