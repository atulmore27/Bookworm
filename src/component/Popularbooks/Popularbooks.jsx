import React from 'react';
import ReactDOM from 'react-dom';
import Popularbookcards,{Card1, Card2, Card3, Card4} from './Popularbookcards';

function Popularbooks(){
    return(
        <section id="book">
        <h3>Popular Books</h3>

            <div class="row">
            <Popularbookcards.Card1 />
            <Popularbookcards.Card2 />
            <Popularbookcards.Card3 />
            <Popularbookcards.Card4 />
            </div>
       </section>
    );
}

export default Popularbooks;