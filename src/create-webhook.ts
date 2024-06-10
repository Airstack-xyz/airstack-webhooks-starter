import axios from "axios";
import { config } from "dotenv";

config();

const WEBHOOK_BASE_URL = "https://ab97-91-73-184-78.ngrok-free.app";

const url = "https://webhooks.airstack.xyz/api/v1/webhooks";
const headers = {
  accept: "application/json",
  Authorization: process.env.AIRSTACK_API_KEY,
  "Content-Type": "application/json",
};
const data = {
  endpoint: `${WEBHOOK_BASE_URL}/webhook`, // your endpoint
  filter_config: {
    event_type: "profile.created",
  },
};

axios
  .post(url, data, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was an error!", error);
  });
