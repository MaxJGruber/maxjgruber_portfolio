import axios from "axios";
import FormData from "form-data";

const service = axios.create({
  baseURL: process.env.WUFOO_BASE_URL,
  auth: {
    username: process.env.WUFOO_API_KEY,
    password: process.env.WUFOO_PASSWORD,
  },
});

export async function submitForm(
  dataForm: Record<string, any>
): Promise<Record<string, any>> {
  const url = `/api/v3/forms/${process.env.WUFOO_FORM_ID}/entries.json`;
  const formData = new FormData();
  for (var key in dataForm) {
    formData.append(key, dataForm[key]);
  }
  const { data } = await service.request({
    method: "post",
    url,
    data: formData,
  });
  return data;
}
