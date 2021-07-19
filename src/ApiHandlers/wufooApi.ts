import axios from "axios";

const service = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true,
});

export async function submitForm(
  dataForm: Record<string, any>
): Promise<Record<string, any> | undefined> {
  console.log(dataForm);
  try {
    const data = await service.post("/api/submit-form", dataForm);
    // console.log("STATUS>>>>", status);
    console.log("DATA>>>>", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
