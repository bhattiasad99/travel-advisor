import React from "react";
import Card from "../../components/ui/Card";

const SidebarItem = (props) => {
  return (
    <li className="container-list-item">
      <Card>
        <img src="/dist/img/food-1.jpg" alt="" className="card-img" />
        <div className="card-content">
          <h2>375 Chicken 'n' Fries</h2>
          <div className="card-ratings u-flex-aic-jcsw">
            <div className="ratings">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="ratings-label">7 reviews</div>
          </div>
          <div className="card-price u-flex-aic-jcsw">
            <div className="card-label">Price</div>
            <div className="card-value">$$</div>
          </div>
          <div className="card-ranking u-flex-aic-jcsw">
            <div className="card-label">Ranking</div>
            <div className="card-value">Value</div>
          </div>
          <div className="card-location u-flex-aic-jcsw">
            <div className="card-label icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="card-value">Nisa Nursing Home, Adyala Road</div>
          </div>
          <div className="card-contact u-flex-aic-jcsw">
            <div className="card-label icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="card-value">+923348506479</div>
          </div>
          <div className="card-buttons-container u-flex-aic-jcsw">
            <button className="btn">Trip Advisor</button>
            <button className="btn">Website</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default SidebarItem;
