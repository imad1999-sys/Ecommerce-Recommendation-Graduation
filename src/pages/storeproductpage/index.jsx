import React, { useState } from "react";
import { useEffect } from "react";
import BaseNavbar from "../../base/BaseNavbar";
import BaseCard from "../../base/BaseCard";
import BaseFooter from "../../base/BaseFooter";
import { useParams } from "react-router-dom";
import { headers } from "../../API/tokens/tokens";
import { EyeIcon, InfoIcon, PriceTagIcon } from "../../icons/icons";
import { fetchStoreProductsService } from "../../API/services/other/ProductService";
import BasePagination from "../../base/BasePagination";
const StoresProductPage = () => {
  const { name } = useParams();
  console.log(name);
  const [storeProducts, setStoresProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPage] = useState(12);
  const getProductByStore = () => {
    fetchStoreProductsService(name, "", headers).then((response) => {
      console.log(response.data.response.products.content);
      setStoresProducts(response.data.response.products.content);
    });
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = storeProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    getProductByStore();
  }, []);
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="row">
        <BaseNavbar />
      </div>
      <div className="row">
        <div className="container-for-cards">
          <div className="row row-cols-1 row-cols-md-4 g-4 gx-5">
            {currentProducts.map((product) => (
              <div className="col">
                <BaseCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  priceTag={<PriceTagIcon />}
                  salePrice={product.salePrice}
                  views={product.views}
                  viewTag={<EyeIcon />}
                  onClick={() => goToDetailsPage(product.id)}
                  btnText="عرض التفاصيل"
                  isFav={false}
                  isAlert={false}
                  icon={<InfoIcon />}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <BasePagination
          itemsPerPage={productsPerPage}
          total={storeProducts.length}
          paginate={paginate}
        />
      </div>
      <div className="row">
        <BaseFooter />
      </div>
    </div>
  );
};
export default StoresProductPage;
