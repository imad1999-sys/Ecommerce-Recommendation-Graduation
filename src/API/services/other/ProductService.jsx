import { del, get, post } from "../../functions/BaseAxiosFunctions.jsx";
import { addProduct, deleteAllProducts, deleteProductById, fetchAllProducts, fetchProduct } from "../../urls/ApiUrls.jsx";
  export const getProductService = (id , data , headers) => {
    return get(fetchProduct + id , data , headers);
  };
  export const getAllProductsService = (data , headers) => {
    return get(fetchAllProducts, data , headers);
  };
  export const addProductService = (data) => {
    return post(addProduct, data).then((res) => {
      this.resolveResponse(
        res,
        "تمت عملية إضافة منتج بنجاح",
        "حدث خطأ أثناء عملية الإضافة"
      );
      return res;
    });
  };
  export const deleteProductService = (id) => {
    return del(deleteProductById, id).then((res) => {
      this.resolveResponse(
        res,
        "تمت عملية حذف منتج بنجاح",
        "حدث خطأ أثناء عملية الحذف"
      );
      return res;
    });
  };
  export const deleteAllProductService = () => {
    return get(deleteAllProducts).then((res) => {
      this.resolveResponse(
        res,
        "تمت عملية ارسال تنبيه أسعار بنجاح",
        "حدث خطأ أثناء عملية الإرسال"
      );
      return res;
    });
  };
