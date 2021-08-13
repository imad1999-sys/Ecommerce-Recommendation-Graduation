import React, { Component, useState, useEffect } from "react";
import ProductImage from "./ProductImage.jsx";
import MostRatedProducts from "./MostRatedProducts.jsx";
import BaseNavbar from "../../../base/BaseNavbar.jsx";
import BaseFooter from "../../../base/BaseFooter.jsx";
import ProductNameAndRate from "./ProductNameAndRate.jsx";
import "../../../assets/css/styles.css";
import ProductPrice from "./ProductPrice.jsx";
import Paper from "@material-ui/core/Paper";
import ProductDescription from "./ProductDescription.jsx";
import ProductOffers from "./ProductOffers.jsx";
import { headers } from "../../../API/tokens/tokens.jsx";
import { fetchProductAction } from "../../../API/actions/productactions/ProductActions.jsx";
const ProductDetails = (props) => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [currency, setCurrency] = useState("");
  const [status, setStatus] = useState("");
  const [brand, setBrand] = useState("");
  const [siteName, setSiteName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const getProduct = () => {
    fetchProductAction(id, "", headers).then((response) => {
      let product = response.data.response;
      setTitle(product.title);
      setViews(product.views);
      setSalePrice(product.salePrice);
      setSize(product.size);
      setPrice(product.price);
      setImage(product.image);
      setCurrency(product.currency);
      setStatus(product.status);
      setBrand(product.brand);
      setSiteName(product.siteName);
      setProductUrl(product.productUrl);
      setSiteUrl(product.siteUrl);
      setDescription(product.description);
      setEmail(product.email);
      console.log(response);
    });
  };
  useEffect(() => {
    getProduct();
  });
  // async function setLogForRecommend() {
  //   let token = localStorage.getItem("user-info");
  //   let tokenJson = JSON.parse(token);
  //   let t = "Bearer " + tokenJson.response.token;
  //   console.log(tokenJson.response.token);
  //   const query = "";
  //   const action = "recommend";
  //   const productId = id;
  //   let item = { query, action, productId };
  //   console.log(item);
  //   let result = await fetch(logApiUrl, {
  //     method: "POST",
  //     body: JSON.stringify(item),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: t,
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result);
  // }
  return (
    <>
      <div className="row">
        <BaseNavbar />
      </div>
      <Paper elevation={10}>
        <div class="row g-0 bg-light position-relative">
          <div class="col-md-6 p-4 ps-md-0 second-details-section">
            <div className="row">
              <ProductNameAndRate
                title={title}
                brand={brand}
                views={views}
                status={status}
              />
            </div>
            <hr className="me-4" />
            <div className="row">
              <ProductPrice
                salePrice={salePrice}
                currency={currency}
                email={email}
                id={id}
              />
            </div>
            <hr className="me-4" />
            <div className="row">
              <ProductDescription description={description} />
            </div>
            <hr className="me-4" />
          </div>
          <div class="col-md-6 mb-md-0 p-md-4 first-details-section">
            <div className="row">
              <ProductImage image={image} />
              <hr className="me-4" />
              <MostRatedProducts />
            </div>
            <hr className="me-4" />
            <div className="row">
              <ProductOffers
                productUrl={productUrl}
                siteName={siteName}
                title={title}
              />
            </div>
          </div>
        </div>
      </Paper>
      <div className="row">
        <BaseFooter />
      </div>
    </>
  );
};
export default ProductDetails;
