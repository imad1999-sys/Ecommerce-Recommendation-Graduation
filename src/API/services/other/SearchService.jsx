import { get } from "../../functions/BaseAxiosFunctions.jsx";
import { searchFirst, searchAutoCompleteUrl, searchSecond } from "../../urls/ApiUrls.jsx";
import BaseServices from "../base/BaseServices.jsx";
export default class SearchService extends BaseServices {
  searchService = (queryParams) => {
    let searchUrl = searchFirst + queryParams + searchSecond;
    return get(searchUrl, queryParams).then((res) => {
      this.resolveResponse(
        res,
        "",
        ""
      );
      return res;
    });
  };
  searchAutoCompleteService = (data) => {
    return get(searchAutoCompleteUrl, data).then((res) => {
      this.resolveResponse(
        res,
        "",
        ""
      );
      return res;
    });
  };
}
