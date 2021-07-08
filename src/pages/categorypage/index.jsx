import React from "react";
import { Component , useState , useEffect } from "react";
import BaseNavbar from "../../base/BaseNavbar";
import BaseCard from "../../base/BaseCard";
import BaseFooter from "../../base/BaseFooter";
import { fetchAllProducts, searchByCategory } from "../../API/urls/ApiUrls";
import { useParams } from "react-router-dom";
const CategroyPage = () => {
  const {name} = useParams();
  console.log(name);
  let result = localStorage.getItem("user-info");
  let resultJson = JSON.parse(result);
  console.log(resultJson.response.token);
  const [data, setData] = useState([]);
  useEffect(async () => {
    let token = "Bearer " + resultJson.response.token;
    let result = await fetch(searchByCategory + name, {
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    setData(result.response.results);
    console.log(result.response.results);
  }, []);
  return (
    <div>
      <div className="row">
        <BaseNavbar />
      </div>
      <div className="row">
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
      <div className="row">
        <BaseFooter />
      </div>
    </div>
  );
};
export default CategroyPage;
