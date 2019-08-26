import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const btn = <FontAwesomeIcon icon={['fal', 'spinner']} spin />

function Banner(){
    return (
        <section id="banner">
        <div className="content">
          <h1>Banner</h1>
          <p>Banner Banner Banner Banner Banner Banner Banner Banner  <br />sed arcu cras consecuat lorem ipsum dolor sit amet.</p>
          <ul className="actions">
            <li><a href="#one" className="button scrolly">Get Started</a></li>
            {btn}
          </ul>
        </div>
      </section>
    )
}

export default Banner;