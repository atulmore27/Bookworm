import React from 'react';
import ReactDOM from 'react-dom';
import Newarrivalscards,{Card1, Card2, Card3, Card4} from './Newarrivalscards';

function Newarrivals(){
    return(
        <section id="book">
        <h3>New Arrivals</h3>

            <div class="row">
            <Newarrivalscards.Card1 />
            <Newarrivalscards.Card2 />
            <Newarrivalscards.Card3 />
            <Newarrivalscards.Card4 />
            </div>
       </section>
    );
}

export default Newarrivals;