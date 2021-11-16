# Getting Started with this project

Pull down the project and create a .env file in the root.

This .env file must contain

API_KEY = "your_api_key"

with "your_api_key" representing your individual yelp fusion api key.

Once this is set up, navigate to the project directory in your terminal, and type node index.js

then navigate to the front-end folder, and enter the command npm run start in the terminal to start the project front end.

If the project does not open your browser automatically, open your browser and navigate to http://localhost:3000/. You will then see the top 5 ice cream shops in Alpharetta GA, as determined by Yelp. Yelp considers frozen custard to be ice cream, and has sorted the businesses but by an adjusted rating value that takes into account the number of ratings, similar to a Bayesian average. This is to prevent skewing results to businesses with a single review. As such, you may see a 5 star shop listed underneath a 4 star shop.
