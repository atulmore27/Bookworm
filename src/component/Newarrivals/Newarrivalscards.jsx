import React from 'react';
import ReactDOM from 'react-dom';


function Card1(){
    return(
        <div class="book-column col-lg-3 col-md-6">
        <div class="card">
        <div class="card-body">
            <img class="book-img" src="Images/Marathi/aatank-1.jpg" alt=""/>
            <h3>Rs.49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <button type="button" class="btn btn-outline-dark">Buy</button>
            <button type="button" class="btn btn-dark">Rent</button>
        </div>
        </div>
    </div>
    );
}

function Card2(){
    return(
        <div class="book-column col-lg-3 col-md-6">
        <div class="card">
        <div class="card-body">
            <img class="book-img" src="Images/Hindi/Bhamati.jpg" alt=""/>
            <h3>Rs.49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <button type="button" class="btn btn-outline-dark">Buy</button>
            <button type="button" class="btn btn-dark">Rent</button>
        </div>
        </div>
    </div>
    );
}

function Card3(){
    return(
        <div class="book-column col-lg-3 col-md-6">
        <div class="card">
        <div class="card-body">
            <img class="book-img" src="Images/Kokani/Karvar cover.jpg" alt=""/>
            <h3>Rs.49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <button type="button" class="btn btn-outline-dark">Buy</button>
            <button type="button" class="btn btn-dark">Rent</button>
        </div>
        </div>
    </div>
    );
}

function Card4(){
    return(
        <div class="book-column col-lg-3 col-md-6">
        <div class="card">
        <div class="card-body">
            <img class="book-img" src="Images/English/TheStoryOfShivajiCover.jpg" alt=""/>
            <h3>Rs.49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <button type="button" class="btn btn-outline-dark">Buy</button>
            <button type="button" class="btn btn-dark">Rent</button>
        </div>
        </div>
    </div>
    );
}

export default {Card1, Card2, Card3, Card4};