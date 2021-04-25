import React from "react";
import "../../../assets/css/styles.css";

const productVideos = () => {
    return (
      <div className="videos">
          <p className="baloo-chettan-25">Demo Videos About The Product</p>
        <div className="row gy-5">
          <div className="p-3 col-sm">
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="p-3 col-sm">
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-3 col-sm">
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="p-3 col-sm">
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}
export default productVideos;