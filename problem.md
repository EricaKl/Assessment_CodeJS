# Assessment1

## Objective

The Objective of this #asessment is to work with ReST API's , understand asynchronous programming and build interactive web pages using Javascript.  

## Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies. The idea here is to use json-server to serve static pages and data for movies.  

```
  npm install
  npm run start or json-server db.json -s ./public
```

## Coding Guidelines

1. All your HTML code resides in public/index.html  
2. All your JavaScript code resides in the public/js folder  
3. All your CSS code resides in the public/css folder  
4. All your images resides in the public/images folder  
5. HTML, Javascript, CSS code should be well indented and commented  
6. You shall use Bootstrap to style your pages and elements   

## Requirement

1. Populate data for ***Products*** collection in db.json while another ***saveforlater*** collection could be left empty initially.  
2. Create Two Sections/List ***Products*** and ***saveforlater*** in your HTML page.  
3. ***Products*** and the ***saveforlater*** section of the page should populate all the movies and favourites from the db.json using AJAX calls.  
4. Every ***Product*** item should have a ***Add to saveforlater*** button.  
5. On click of the ***Add to saveforlater*** button the copy of the movie item should be moved to the ***saveforlater*** list/section. The movie added to ***saveforlater*** section should also be added to the ***saveforlater*** collection of db.json using AJAX calls.  

## Instructions 

 1. Each Product item in db.json to have atleast  `id, title,description,price,rating,stock,category,         thumbnail`
2. It is mandatory to use Fetch API and Promises for all the HTTP calls   
 3. `public/js/script.js` is expected to have three functions -  
 	a. `getProducts()` - to fetch movies from `http://localhost:3000/products`, populate them in DOM under `<ul id="products">` and returns a promise with the JSON response from API  
	b. `getsaveforlater()` - to fetch favourites from `http://localhost:3000/saveforlater`, populate them in DOM under `<ul id="favouritesList">` and returns a promise with the JSON response from API  
	c. `addsaveforlater()` - as the click event handler for the button `Add to saveforlater` corresponding to each movie listed under `Products` on page, this shall take `id` of a movie as input, copy the respective movie to `Favourites` section, post the movie to db.json via `http://localhost:3000/saveforlater` and returns a promise with the complete list of favourites been loaded on the page  
 4. `public/index.html` - Products list to be populated under `<ul id="products">`
 	and Favourites list to be populated under `<ul id="saveforlater">`, `getProducts()` and `getsaveforlater()` to be invoked as shown in the file  
  