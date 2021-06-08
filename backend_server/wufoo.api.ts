import axios from "axios";
import config from "./config-store";

const { WUFOO_BASE_URL, WUFOO_API_KEY, WUFOO_FORM_ID, WUFOO_PASSWORD } = config;

const service = axios.create({
  baseURL: WUFOO_BASE_URL,
  auth: {
    username: WUFOO_API_KEY,
    password: WUFOO_PASSWORD,
  },
});

export async function submitForm(
  dataForm: Record<string, any>
): Promise<Record<string, any>> {
  const url = `/api/v3/forms/${WUFOO_FORM_ID}/entries.json`;
  const { data } = await service.request({
    method: "post",
    url,
    data: dataForm,
    headers: dataForm.getHeaders(),
  });
  console.log("DATA>>>>", data);
  return data;
}
