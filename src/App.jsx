import React from 'react';
import Layout from './Layout';
import Banner from './components/Banner';

function App() {
  return (
    <Layout>
      <Banner />
      <section id="one" className="wrapper">
        <div className="inner flex flex-3">
          <div className="flex-item left">
            <div>
              <h3>Magna ultricies</h3>
              <p>Morbi in sem quis dui plalorem ipsum<br /> euismod in, pharetra sed ultricies.</p>
            </div>
            <div>
              <h3>Ipsum adipiscing lorem</h3>
              <p>Tristique yonve cursus jam nulla quam<br /> loreipsu gravida adipiscing lorem</p>
            </div>
          </div>
          <div className="flex-item image fit round">
            <img src="images/pic01.jpg" alt="" />
          </div>
          <div className="flex-item right">
            <div>
              <h3>Tempus nullam</h3>
              <p>Sed adipiscing ornare risus. Morbi estes<br /> blandit sit et amet, sagittis magna.</p>
            </div>
            <div>
              <h3>Suscipit nibh dolore</h3>
              <p>Pellentesque egestas sem. Suspendisse<br /> modo ullamcorper feugiat lorem.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <h2>Feugiat lorem</h2>
          <figure>
            <blockquote>
              "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra<br /> magna etiam lorem ultricies in diam. Sed arcu cras consequat."
					    </blockquote>
            <footer>
              <cite className="author">Jane Anderson</cite>
              <cite className="company">CEO, Untitled</cite>
            </footer>
          </figure>
        </div>
      </section>

      <section id="three" className="wrapper">
        <div className="inner flex flex-3">
          <div className="flex-item box">
            <div className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Consequat</h3>
              <p>Placerat ornare. Pellentesque od sed euismod in, pharetra ltricies edarcu cas consequat.</p>
            </div>
          </div>
          <div className="flex-item box">
            <div className="image fit">
              <img src="images/pic03.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Adipiscing</h3>
              <p>Morbi in sem quis dui placerat Pellentesque odio nisi, euismod pharetra lorem ipsum.</p>
            </div>
          </div>
          <div className="flex-item box">
            <div className="image fit">
              <img src="images/pic04.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Malesuada</h3>
              <p>Nam dui mi, tincidunt quis, accu an porttitor, facilisis luctus que metus vulputate sem magna.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
