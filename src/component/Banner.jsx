import React from "react";
import ReactDOM from "react-dom";
function Banner(){
    return(
    
        <section id="title">
        <div class=" container-fluid row">
                <div class="col-lg-6">
                    <h1 class="title-text">TO SUCCEED YOU MUST READ</h1>
                    <button type="button" class="btn btn-dark btn-sm"> Explore now </button>
                </div>
                <div class="col-lg-6">
                    <img class="title-image" src="Images/English/InvestingInMutualFundsCover.jpg" alt=""/>
                    <img class="title-image" src="Images/Marathi/Baapu ekbhaashit Chintankaavy.jpg" alt=""/>
                    <img class="title-image" src="Images/Hindi/Har se ghar tak.jpg" alt=""/>
                    <img class="title-image" src="Images/English/The Lodger.jpg" alt=""/>
                </div>
            </div>
            </section>
    );
    
}
export default Banner;
