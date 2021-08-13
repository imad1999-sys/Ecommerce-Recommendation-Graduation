import { post , get, del } from "../../functions/BaseAxiosFunctions.jsx";
import { deleteLogApiUrl, getAllLogsApiUrl, logApiUrl } from "../../urls/ApiUrls.jsx";
import BaseServices from "../base/BaseServices.jsx";
export default class ReviewsService extends BaseServices {
  getUserLogService = () => {
    return get(logApiUrl).then((res) => {
      this.resolveResponse(
        res,
        "تم جلب إشعار المستخدم بنجاح",
        "حدث خطأ أثناء عملية الجلب"
      );
      return res;
    });
  };
  getAllLogsService = () => {
    return get(getAllLogsApiUrl).then((res) => {
      this.resolveResponse(
        res,
        "تم جلب كافة الإشعارات بنجاح",
        "حدث خطأ أثناء عملية الجلب"
      );
      return res;
    });
  };
  addLogService = (data) => {
    return post(logApiUrl, data).then((res) => {
      this.resolveResponse(
        res,
        "تمت عملية إضافة إشعار بنجاح",
        "حدث خطأ أثناء عملية الإضافة"
      );
      return res;
    });
  };
  deleteLogService = (id) => {
    return del(deleteLogApiUrl + id).then((res) => {
      this.resolveResponse(
        res,
        "تمت عملية حذف إشعار بنجاح",
        "حدث خطأ أثناء عملية الحذف"
      );
      return res;
    });
  };
}
