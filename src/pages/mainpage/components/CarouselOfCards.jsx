import React, { useState, useEffect } from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import FloatingActionButton from "../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../icons/ArrowCircleRight.jsx";
import labtop from "../../../assets/images/laptop.jpg";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { fetchAllProducts } from "../../../API/urls/ApiUrls.jsx";
const CarouselOfCompanies = () => {
  let result = localStorage.getItem("user-info");
  let resultJson = JSON.parse(result);
  console.log(resultJson.response.token);
  const [data, setData] = useState([]);
  useEffect(async () => {
    let token = "Bearer " + resultJson.response.token;
    let result = await fetch(fetchAllProducts, {
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    setData(result.response.products.content);
    console.log(result.response.products.content);
  }, []);
  return (
    <div>
      <div className="container-for-companies">
        <div className="row">
          {data.map((item) => (
            <div className="col p-4">
              <BaseCard
                image={item.image}
                title={item.title}
                price={item.price}
                salePrice={item.salePrice}
                views={item.views}
                link={"/details/" + item.id}
                linkText="عرض التفاصيل"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselOfCompanies;
