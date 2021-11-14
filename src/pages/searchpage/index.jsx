import React, { useEffect, useState } from "react";
import "../../assets/css/styles.css";
import "../../assets/css/fonts.css";
import { searchAction } from "../../API/actions/searchactions/SearchActions";
import { headers } from "../../API/tokens/tokens";
import BaseFooter from "../../base/BaseFooter";
import BaseDropDown from "../../base/BaseDropdown";
import BaseNavbar from "../../base/BaseNavbar";
import BaseCard from "../../base/BaseCard";
import BasePagination from "../../base/BasePagination";
import { EyeIcon, InfoIcon } from "../../icons/icons";
import { useParams } from "react-router";

const SearchPage = () => {
  const { query, category } = useParams();
  console.log(query + category);
  const [productsCategory, setProductCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsCategory.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const search = () => {
    searchAction(category, query, headers).then((res) => {
      console.log(res);
      setProductCategory(res.data.response.results);
    });
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      <div className="row">
        <BaseNavbar />
      </div>
      {/* <div className="row">
        <div className="filters-section">
          <div className="col">
            <BaseDropDown
              name={query}
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
      </div> */}
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
export default SearchPage;
