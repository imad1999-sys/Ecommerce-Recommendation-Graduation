import React, { useState } from "react";
import { useEffect } from "react";
import BaseNavbar from "../../base/BaseNavbar";
import BaseCard from "../../base/BaseCard";
import BaseFooter from "../../base/BaseFooter";
import { useParams } from "react-router-dom";
import { headers } from "../../API/tokens/tokens";
import { EyeIcon, InfoIcon } from "../../icons/icons";
import BasePagination from "../../base/BasePagination.jsx";
import BaseDropDown from "../../base/BaseDropdown";
import {
  searchByFilter,
  searchByLanguage,
  searchBySort,
} from "../../API/services/other/SearchService";
const SortPage = () => {
  const { name, filter } = useParams();
  console.log(name + filter);
  const [productsCategory, setProductCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsCategory.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const getProductsByCategory = () => {
    if (filter === "ar" || filter === "en") {
      searchByLanguage(name, filter, "", headers).then((resposne) => {
        console.log(resposne);
        setProductCategory(resposne.data.response.results);
      });
    }
    if (
      filter === "date_dt" ||
      filter === "sale_price_d" ||
      filter === "views_i"
    ) {
      searchByFilter(name, filter, "", headers).then((resposne) => {
        console.log(resposne);
        setProductCategory(resposne.data.response.results);
      });
    }
    if (filter === "asc" || filter === "desc") {
      searchBySort(name, filter, "", headers).then((resposne) => {
        console.log(resposne);
        setProductCategory(resposne.data.response.results);
      });
    }
  };
  useEffect(() => {
    getProductsByCategory();
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
        <div className="filters-section">
          <div className="col">
            <BaseDropDown
              name={name}
              isLang={false}
              isSort={false}
              isFilter={true}
            />
          </div>
          <div className="col">
            <BaseDropDown
              name={name}
              isLang={false}
              isSort={true}
              isFilter={false}
            />
          </div>
          <div className="col">
            <BaseDropDown
              name={name}
              isLang={true}
              isSort={false}
              isFilter={false}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container-for-cards">
          <div className="row row-cols-1 row-cols-md-4 g-4 gx-5">
            {currentProducts.map((product) => (
              <div className="col">
                <BaseCard
                  image={product.image}
                  title={product.title}
                  currency={product.currency}
                  salePrice={product.sale_price}
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
          total={productsCategory.length}
          paginate={paginate}
        />
      </div>
      <div className="row">
        <BaseFooter />
      </div>
    </div>
  );
};
export default SortPage;
