---
title:  Building a Point of Sale system with Node & React
date: "2019-15-02T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/Building-a-Point-of-Sale-system-with-Node-&-React"
category: "React"
tags:
  - "React""
description: "this tutorial we gonna build simple POS with React and Node"
---
![](https://cdn-images-1.medium.com/max/2560/1*RNjNx81GWExB7DQfQuG2gQ.png)


This tutorial will comprise of two parts

#### **Part 1 (Back End)**

1.  Frameworks description
1.  Building the Node app from scratch
1.  Testing with Postman

#### **Part 2 (Front End)**

1. Creating a Template React app.

2. Creating Routes and Views.

*I recommend using the *[VSCode Editor](https://code.visualstudio.com/download)*
for this tutorial.*

#### **Frameworks Description and Installation**

Below are the libraries and frameworks we will be using:

[nedb](https://github.com/louischatriot/nedb): NeDB is much like SQLite in that
it is a smaller, embeddable version of a much larger database system.NeDB is a
smaller NoSQL datastore that mimics MongoDB.

[socket.io](https://socket.io/):Socket.IO enables real-time bidirectional
event-based communication. It works on every platform, browser or device,
focusing equally on reliability and speed.<br>
[express](https://expressjs.com/): Express is a Fast, unopinionated, minimalist
web framework for Node.js. express features will enable us to create our web
server.<br> **async**<br> [nodemon](https://nodemon.io/): Nodemon checks for
changes in your source and automatically restart your server.<br>
**body-parser**: body-parser extract the entire body portion of an incoming
request stream and exposes it on req.body .<br> **HTTP**: Http allows Node.js to
transfer data over the HyperText Transfer Protocol (HTTP).

Let’s continue by creating the backend with node.js, I will assume you have
[node and npm installed](https://nodejs.org/en/download/).

### Part 1: Back End

For this tutorial we are going to create the Node app (express app) from
scratch. it can also be done automatically using the [ejs
template](http://www.embeddedjs.com/).

Create a directory via your Command Line Interface (CLI) named
`real-time-pos-system`

`mkdir real-rime-pos-system`

Access the folder via CLI thus:

`cd real-time-pos-system`

Inside your `real-time-pos-system` folder create new folder named `server` from
CLI

`mkdir server`

Let’s install our dependencies:

`npm init`

Press `enter` button for the following asked questions:


you will be shown the following message:


#### **Install the following dependencies**:

`npm install express --save`

`npm install http --save`

`npm install nodemon --save`

`npm install nedb --save`

Create a file named `index.js` in your `real-time-pos-system` folder using your
Editor.

`index.js` is the entry point for our node app, as you can see it is located in
the root of our app.

insert the following code in your `index.js` file


#### **index.js Explained**

This file is the entry point to our node express app. it is comprised of routes
that will handle requests and responses to and from the browser.

Below are dependencies assigned to variables.


Below, The express variable `app` is used to allows data to be sent to the
database using http request body.


Below are imported files that will represent inventory and transaction routes.

`app.use("/api/inventory", require("./api/inventory"))`

`app.use("/api/transactions", require("./api/transactions"))`

Cross-origin resource sharing (CORS) is a mechanism that allows restricted
resources (e.g. fonts) on a web page to be requested from another domain outside
the domain from which the first resource was served. — Wikipedia

Below, the node app is restricted to resources within using CORS and allows
specified methods `GET` `PUT` `POST` `DELETE` and `OPTIONS` to be used.


Below is the Node app default route


The Websocket logic for Live Cart


On page load, give user current cart


On page load, make client update live cart


When the cart data is updated by the POS and keeps track of it


Broadcasts updated live cart to all WebSocket clients


Let’s continue, create a directory inside `server` directory:

`mkdir api`

Create two files named `inventory.js` and `transactions.js` in your api folder

insert the following code to your `inventory.js`:


#### **inventory.js Explained**

The necessary dependencies are assigned to variables `app`, `server`,
`bodyParser` and `Datastore`. The `app.use(bodyParser.json())` will allow the
body of a HTTP request to sent to the database.

An inventory variable `inventoryDB` is assigned with an instance of<br> **nedb**
variable `Datastore` we created earlier. The `DataStore`<br> an instance has two
options `filename` which specifies the path of the database and autoload, which
automatically loads the database if set to true.

The `app.get("/, function(req, res)` function is the default path for the
inventory database.

The `app.get("/product/:/productId` function enables the app to get a product
from the inventory database using it's ID.

The `app.get("/products", function(req, res)` function gets all products from
the inventory database.

The `app.post("/product", function(req, res)` function is used to save an
inventory product to the database.

The `app.delete("/product/:productId", function(req, res)` is used to delete
product using product ID.

The `app.put("/product", function(req, res)` updates a product using it product
ID.

Let’s continue, insert the following code to your `transaction.js` file:


#### **transaction.js Explained**

The necessary dependencies are assigned to variables as was done previously.

A Transaction’s variable is created with filename and autoload using the
**nedb**variable `Datastore` as done earlier.

The `app.get("/, function(req, res)` function is the default path for the
`transactions` database.

The `app.get('/all', function (req, res)` function retrieves all transactions
from the transactions database.

The `app.get('/limit', function (req, res)` function retrieves transactions with
specified limit.

The `app.get('/day-total', function (req, res)` function is gets total sales for
the current day.

The `app.get('/by-date', function (req, res)` function is used to get
transactions using a particular date

The `app.post('/new', function (req, res))` function is used to add new a
transaction

The `app.get('/:transactionId', function (req, res)` function is used to
retrieve a single transaction.

**To Start Node app from root directory using CLI , type command**:

`nodemon index.js`

And that is the Back End sorted!

### Part 2: Front End

We are going to accomplish the following:

1.Creating a Template React app.<br> 2.Creating Routes and Views with Code
Description.

See[ here](https://github.com/kels-orien/real-time-pos-system) for source
code<br> Frameworks we will be using:

**axios** is a Promise based HTTP client for the browser and node.js.

**Bootstrap** is a free open source library that contains HTML and CSS design
templates for designing websites and web applications.

**React-Bootstrap** is a Bootstrap 3 components built with React.

**moment** is a lightweight JavaScript date library for parsing, validating,
manipulating, and formatting dates.

**React** is a JavaScript library for building user interfaces.

#### **Creating a Template React App**

Make sure you have [Node and NPM](https://nodejs.org/en/download/) installed.

Check Node and Npm Version via Command Line Interface (CLI)

`node -v`

`npm -v`

Access the `real-time-pos-folder` we used in part 1 Using CLI to create react
app globally using npm:

For npm version 5.1 or earlier<br> `npm install -g create-react-app`

To create your app, run a single command<br> npm install create-react-app
react-pos

For npm version 5.2+ and higher<br> `npx install -g create-react-app`

To create our appointment scheduler app, run a single command<br> `npx install
create-react-app react-pos`

The Directory of your app will look something like this:

react-pos<br> `├── README.md`<br> `├── node_modules`<br> `├── package.json`<br>
`├── .gitignore`<br> `├── public`<br> `│ └── favicon.ico`<br> `│ └──
index.html`<br> `│ └── manifest.json`<br> `└── src`<br> `└── App.css`<br> `└──
App.js`<br> `└── App.test.js`<br> `└── index.css`<br> `└── index.js`<br> `└──
logo.svg`<br> `└── registerServiceWorker.js`

To start the project in development mode via CLI<br> `npm start`

Access your app directory using:<br> `cd react-pos`

Install the following dependencies:<br> `npm install bootstrap`

`npm install react-bootstrap`

`npm install axios`

`npm install moment`

**Creating Routes and Views**

We are going to start by creating our routes

Start by editing your `App.js` in your root directory with following code:

Also update your `index.js` in your root directory:

You maybe wondering about the `Main` and `Header` Components, but we will create
them shortly:

Create the following path in your “src” folder directory of your react-pos app:

`js/components`

Create Main.js in the `js/components` folder with the following code:


Notice that our `Main.js` component is not a class; rather it is a functional
component,. Arrow function to be precise. we are creating our routes using
functions.

Lets create our `Header.js` component for navigation of our app


you will notice as we continue that the `Header` component is included in all
parent components.

Now lets create our views, Let’s start with the `Inventory.js` component in the
`src/js/component/` folder.

Notice that We are using a class for the `inventory` component above.
`componentWillMount` is a Lifecycle method which is used to modify the component
state, in this particular situation we are retrieving products from the
inventory database by through our Node.js Express App We created in part 1. the
response is assigned to the product array using `setState` . All this is done
before the page is fully loaded.

The `render` function will display our UI elements in the DOM (Document Object
Model). The `renderFunction` checks the product array and display the result in
the DOM.

Let’s move on to the `POS.js` Component. The `Pos` component will allows the
user to add items to cart with prices. the cart will be updated in real time.

Create a `Pos.js` file in `src/js/component/` folder:



The `Pos` component enables the user to add items to cart, accept payment via
checkout, print the receipt and saves to the database.

The `componentDidUpdate` Lifecycle method is used to check the state of the
`items`array everytime the component has been updated. if the `item` array
contain one or more products the `LiveCart` is updated in real-time using
`socket.io`.

The `handleSubmit` function adds an item to the item array.

The `handlePrice` function assigns the current price of an item to the price
variable using the `setState`

The `handleName` function assigns the current name of an item to the name
variable using the `setState`

The `handlePayment` function checks the amount the customer payment paid for the
items against the total cost.

The `handleQuantityChange` function is a prop of the child component `LivePos`,
it updates the quantity of an item when the user increases or reduces it.

The `handleCheckout` function calculates the total cost of items purchased by
the customer and updates `total` using setState.

The `renderLivePos` function renders an item as it is added to the item array
using the child component `LivePos`.

The `renderReceipt` displays a modal confirming payment.

The `renderAmountDue` display a modal to inform the user of incomplete payment.

The `LivePos` is a child component of the `Pos` component. it display each item
as it added to the `Pos` component. The `LivePos` is also known as a
Presentation component. check the source
[code](https://github.com/kels-orien/real-time-pos-system/blob/master/react-pos/src/js/components/LivePos.js)
this component

The `handleSaveToDB` function saves the transaction to the database

Let’s proceed to the Livecart component:


The `LiveCart` component renders recent and current transactions.

On `ComponentWillMount` recent transactions are retrieved, followed by current
items on livecart using `socket.io-client`

`render` function display the user interface to DOM. `renderRecentTransactions`
child component is used to render recent transactions saved to the Database.
`renderLiveTransactions` is also a child component used to render current
transactions. Both `renderRecentTransactions` and `renderLiveTransactions` are
presentational components.

Let’s move on to the Transaction component:

On the `componentWillMount` all transactions and retrieved from the database.

The `rendertransactions` function displays all the transactions using the
`CompleteTransactions` presentional component. See the source code for more on
'CompleteTransactions.

We have succeeded in building The front and Backend of Real-time Point of Sale
System. I hope you had a blast.

[Get the source code](https://github.com/krissnawat/simple-pos-in-node)** and
see a **[demo](http://mysterious-plateau-79413.herokuapp.com/)** here**