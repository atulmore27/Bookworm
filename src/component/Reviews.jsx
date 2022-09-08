import React from 'react';
import ReactDOM from 'react-dom';

function Reviews(){
    return(
        <section id="testimonials">

    <div id="testimonial-carousel" class="carousel slide" data-ride="False">
        <div class="carousel-inner">

            <div class="carousel-item active">
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                <img class="testimonial-img" src="" alt="dog-profile"/>
                <em>JK Rowling, New York</em>
            </div>
            <div class="carousel-item">
                <h2> It has survived not only five centuries, but also the leap into electronic.</h2>
                <img class="testimonial-img" src="" alt="lady-profile"/>
                <em>Shashi Tharoor, India</em>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
    
  </section>

    

    );
}

export default Reviews;