import React from "react";
import {GEV_Photos, GEV_1, GEV_2, GEV_3, GEV_4, GEV_5, GEV_6, GEV_7, GEV_8} from "../../img";
import './gallery.css';

function Gallery() {
  return (
    <div className="main">
      <h1>Gallery Page</h1>
      <div class="gallerybox">
      <div class="row">
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_Photos}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_1}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_2}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_3}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_4}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_5}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_6}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_7}></img>
        </div>
        <div class="col s4">
          <img class="responsive-img" style={{ height: '400px', width: '320px' }} src={GEV_8}></img>
        </div>
      </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Upload
      </button>
    </div>
  );
}

export default Gallery;
