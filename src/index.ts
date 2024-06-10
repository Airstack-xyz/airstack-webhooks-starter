import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/webhook", (request, response) => {
  if (
    request?.headers?.["x-airstack-webhook"] !== process.env.AIRSTACK_AUTH_KEY
  ) {
    console.log("Unauthorized");
    return response.status(401).json("Unauthorized");
  }

  console.log(request?.body);

  // Add your business logic here

  return response.status(200).json("Success");
});

app.listen(4000, () => console.log("Running on port 4000"));
