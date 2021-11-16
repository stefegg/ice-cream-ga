const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const app = express();
app.use(cors());

app.get(`/rated`, cors(), async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=icecream&sort_by=rating&limit=5&latitude=34.075375&longitude=-84.294090&radius=4000`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    res.send(data.data.businesses);
  } catch (error) {
    console.log("Error", error);
  }
});

app.get(`/reviews`, cors(), async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.yelp.com/v3/businesses/${req.query.id}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    res.send(data.data.reviews[0]);
  } catch (error) {
    console.log("Error", error);
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000");
});
