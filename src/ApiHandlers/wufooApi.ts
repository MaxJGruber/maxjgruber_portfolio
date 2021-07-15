import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const service = axios.create({
  baseURL,
});

console.log(baseURL);
export async function submitForm(
  dataForm: Record<string, any>
): Promise<number | undefined> {
  console.log(dataForm);
  try {
    const { status } = await service.post("/submit-form", dataForm);
    console.log("STATUS>>>>", status);
    return status;
  } catch (error) {
    console.log(error);
  }
}
