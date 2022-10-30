import axios from "~/axios";

export function getImageList() {
  return axios.get("/admin/image_class/:page?limit=10")
}