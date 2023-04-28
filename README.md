# About the Project

This is an assignment to create a RestFul API that returns the live price mentioned in the website - https://www.metal.com/Lithium-ion-Battery/202303240001

# How Was The Project Set Up

I first created a backend application using node.js which uses express,cors,axios and cheerio as the support packages to create a RestFul API to get the live price from the website.
Then I created the frontend using React.js to display the current price being fetched from the API.

# How does the API get the price from the website

The API gets the price by accessing the text of the element from the HTML structure of the page by the classname of the element the price is  being displayed in.

# How can the API be used

The user can make a get request to "https://lohum-assignment-gaurav.onrender.com/price" to get the current price mentioned on the website(i.e "https://www.metal.com/Lithium-ion-Battery/202303240001") of the Lithium-ion-Battery in a Json format.

# Project structure

The code for the backend application is present in the "index.js" file in the "Backend" directory.
The code for the front-end part is present in the "App.js" file in the "src" directory.

# Platforms used for deployment

I have used Render for deploying the backend server.
And I have used Netlify for deploying the frontend application.
