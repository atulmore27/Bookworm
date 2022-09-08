import React from 'react';
import ReactDOM from 'react-dom';
import Popularbookscards,{Card1, Card2, Card3, Card4} from './Popularbookscards';

function Popularbooks(){
    return(
        <section id="book">
        <h3>Popular Books</h3>

            <div class="row">
            <Popularbookscards.Card1 />
            <Popularbookscards.Card2 />
            <Popularbookscards.Card3 />
            <Popularbookscards.Card4 />
            </div>
       </section>
    );
}

export default Popularbooks;