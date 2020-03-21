import React from 'react';
import "./footer.css";

function Footer(props) {
  return (

    <div class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Photography </h1>

        


      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Photography Styles</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Portrait Photography</a>
            </li>

            <li>
              <a href="#">Fashion Photography</a>
            </li>

            <li>
              <a href="#">Weeding / Event Photography</a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title"> </h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#"> Wildlife Photography </a>
            </li>

            <li>
              <a href="#">Landscape Photography</a>
            </li>

            <li>
              <a href="#">Travel Photography</a>
            </li>

            <li>
              <a href="#">Video Production </a>
            </li>

             

             
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">about us</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Email: Photography@yahoo.com</a>
            </li>

            <li>
              <a href="#">Phone: 123456789</a>
            </li>

            <li>
              <a href="#">Addres : 1234 nice street</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="legal">
        <p>&copy; We hope you like our website.</p>

        <div class="legal__links">
          <span>Made with <span class="heart">♥</span> HMCC team</span>
        </div>
      </div>
    </div>


  )
}

export default Footer;