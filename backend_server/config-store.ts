import { config as dotenvConfig } from "dotenv";
import nconf from "nconf";

dotenvConfig();
nconf.env();

nconf.required([
  "WUFOO_BASE_URL",
  "WUFOO_API_KEY",
  "WUFOO_PASSWORD",
  "WUFOO_FORM_ID",
  "BACKEND_PORT",
  "PORT",
]);

export default {
  WUFOO_BASE_URL: nconf.get("WUFOO_BASE_URL"),
  WUFOO_API_KEY: nconf.get("WUFOO_API_KEY"),
  WUFOO_PASSWORD: nconf.get("WUFOO_PASSWORD"),
  WUFOO_FORM_ID: nconf.get("WUFOO_FORM_ID"),
  BACKEND_PORT: nconf.get("BACKEND_PORT"),
  PORT: nconf.get("PORT"),
};
