import axios from "axios";

const baseURL = "http://localhost:4000";

const service = axios.create({
  baseURL,
});

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
