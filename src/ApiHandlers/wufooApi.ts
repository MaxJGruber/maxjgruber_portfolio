import axios from "axios";

const baseURL = "http://localhost:4000";

const service = axios.create({
  baseURL,
});

console.log("BACKEND_URL", baseURL);
export async function submitForm(
  dataForm: Record<string, any>
): Promise<Record<string, any> | undefined> {
  console.log(dataForm);
  try {
    const data = await service.post("/submit-form", dataForm);
    // console.log("STATUS>>>>", status);
    console.log("DATA>>>>", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
