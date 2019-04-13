---
title: "Clone Medium on Node.js and React.js"
date: "2019-04-10T22:12:03.284Z"
template: "post"
draft: false
slug: "/posts/Clone-Medium-on-Node.js-and-React.js"
category: "React"
tags:
  - "React"
  - "Nodejs"
description: "this post will go to try build medium with React and Node Really"
---

![](https://cdn-images-1.medium.com/max/1200/1*vXOiuzLafhCgu7_HOKM1Xg.png)


![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

#### Source code

You can get the source code of the app we will build
[here](https://github.com/krissnawat/medium-clone-on-node) and demo
[here](https://medium-clone-app.herokuapp.com/).

### What is Reactjs?

**Reactjs** is a Component-based JavaScript library built by **Facebook**.<br>
Open-sourced by Facebook in 2013, it has been met with excitement from a wide
community of developers. Corporate adopters have included the likes of Netflix,
Yahoo!, Github, and Codecademy.

Devs have praised **React** for its:

* Performance
* Flexibility
* Declarative, component-based approach to UI

**React** was designed for the needs of Facebook’s development team, and is
therefore suited particularly well to complex web applications that deal heavily
with user interaction and changing data.

### What is Node.js?

**Nodejs** is a server-side framework based on JavaScript built by Ryan Dahl in
2009. One of the great qualities of Node is its simplicity. Unlike PHP or ASP,
there is no separation between the web server and code, nor do we have to
customize large configuration files to get the behavior we want. With Node, we
can create the web server, customize it, and deliver content. All this can be
done at the code level.

### Environment Setup

Before we begin, we are going to go through this article in two stages:

1.  Server setup
1.  Client setup

The app consists of backend and frontend, the frontend will be built using React
and Redux and the backend, Expressjs, and Nodejs. So, we will build our backend
in the **Server setup** section and frontend in the **Client setup** section.

Next, if have neither [Nodejs](https://nodejs.org/) nor
[MongoDB](http://159.65.3.52/p/29257e12-bfd1-45e4-b682-00e85f62add2/) installed,
click on the links to download and install them.

Alright, let’s begin with our server.

We are going to use `create-react-app` to scaffold our project:

Then, run `create-react-app medium-clone` to generate our project folder.
`create-react-app` will install both `react` and `react-dom` libraries for us.

After this our folder would look this:

We are going to set up or server inside this folder. Go ahead and run the
following commands to scaffold our server:

Here, we moved into our project folder and created our server folder.

### Server setup

We are going to install dependencies we need:

* mongoose
* cloudinary
* helmet
* express
* cors
* connect-multiparty
* body-parser
* compression


open integrated terminal in VScode

To begin coding our backend, we are going to use best practices, and they
require we split our code into folders and files according to general work.

* Controllers: This will be responsible for our server actions.
* Models: This will hold all our app’s database Schemas and Models.
* Routes: This will hold our routes.

Go ahead and scaffold the following folders and files:

![](https://cdn-images-1.medium.com/max/800/1*3K-lZ78_1PYFfQNS5471Vg.png)

### Create Models

We will start by creating our database Schemas. Note, we are using mongoose, a
MongoDB connection utility. Let’s `touch` some files:

* touch server/models/Article.js
* touch server/models/User.js

We will be using two Schemas `Article` and `User.Article` represents articles
and `User` represents users

Now, make `server/models/User.js` to look like this:

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

#### Create Controllers

Here, we will create our controller files:

![](https://cdn-images-1.medium.com/max/800/1*g0gcvxP1OQh4JZF1hZujhg.png)

Open up `controllers/article.ctrl.js`, and paste the following code:

Looking at the above code, you can see we have `CRUD`y functions and helper
functions: `getArticle`, `addArticle`, `getAll`, `clapArticle`,
`commentArticle`.

We first imported our Article model, we defined earlier, then, we proceeded to
import cloudinary.

**Note** Cloudinary is an Image/Video service which handles media (Images,
Videos) sharing seamlessly. We will use it to upload our article feature image.
They will host the images for us and use their image url to display our images
on our frontend.

Let’s go through the functions to explain better what they do:

* getArticle
* addArticle
* getAll
* clapArticle
* commentArticle

and `user.ctrl.js` for handle user action

we create some basic CRUD like get and set for handle User data

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL[ Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Create Routes

We are going to create our routes. Run the following commands:

`article.js` will hold routes for our articles endpoint and `user.js` will hold
routes for our users.

We will create an index route function that will export all
routes(`routes/article.js`and `routes/user.js`) in our app.

* touch server/routes/index.js

We now open up `routes/article.js`, and paste the following code:

and route for a user

We now have our routes all defined, We are now going to create a function in
`routes/index.js` that takes the `Express.Router` instance

and paste code below to

### Creating server entry-point

Now, we are done setting up our routes, controllers, and models. It’s time to
add entry-point to our backend.

run the following command:


and paste code below to

We used several useful middlewares here.

* cors: It prevents cross-origin request errors.
* helmet: Like a real helmet, armors our API to prevent attacks.
* bodyparse.json: It is used to parse formdata in POST requests into
`req.body`object.

To run our server, type the following command:


You will see this on your terminal:


![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Test app API endpoints using cURL

We are done building our backend, we will test the API endpoints using **cURL**.

**NB:** MongoDB instance must be running before you begin the cURL test. To
start a MongoDB server, run the command: `mongod`.

#### TEST: GET A USER


#### TEST: GET ALL ARTICLES


#### TEST: GET AN ARTICLE


#### TEST: COMMENT ON AN ARTICLE


#### TEST: CLAP AN ARTICLE


### Client setup

We are done with our backend, its time to focus on our frontend. To recap on the
purpose of this article. React apps are made of components (Stateful and
Stateless). To make our app easier and readable we are going to break it down to
components.

We are building a [Medium.com](https://medium.com/) clone.
[Medium.com](http://medium.com/) is a story-telling service that allows uesrs to
write stories, articles, and tutorials. It has many features that we cannot
duplicate here, we will clone only the core features.

Here are some features we are going to implement:

* View articles
* Write article
* View article
* Social sign in
* Clap article
* Follow user
* View user

Also, our app will be broken into components. Following the above features we
can map out components from them:

* Feed component
* Editor component
* ArticleView component
* SignInWith component
* FollowButton component
* Profile component

Asides these components, we will add helper components that will come in handy
to avoid long and complex code:

* AsideFeed component
* Header component
* EditorHeader component

**Note:** The seemingly simple [Medium.com](http://medium.com/) features
implemented here, are quite a little bit complex and not to make this article a
long boring read, we will summarize the actions taken here. It is left for
readers to test it out and find how it works, while this article serving as a
reference.

### Install project (React, Redux) dependencies

We are now going to install NPM module dependencies we will need. Here are them:

* Axios
* history
* prop-types
* react-google-login
* react-redux
* react-router
* react-router-dom
* react-router-redux
* react-scripts
* redux
* redux-devtools-extension
* redux-logger
* redux-thunk
* medium-editor
* marked

**NB:** react and react-dom have been already been installed by create-react-app
when we scaffolded our project folder.


### Add State Management (Redux)

Before anything, it’s a good programmer’s first move to define his app data
structure.

> *Bad programmers think about their code, good programmers think about their data
> structure → > Linus Torvalds*

We will set up our reducers and state. We have an articles reducer and state
which will hold current article being viewed as an array of articles loaded from
our database:


Also, we will have authUser reducer and state:


OK, let’s create our reducers folder.


The command above creates `redux` folder in `src` directory. `redux` will house
our redux and state management files. Let's create a folder for our reducer
files:

* mkdir src/redux/reducers
* touch src/redux/reducers/articles.js
* touch src/redux/reducers/authUser.js
* touch src/redux/reducers/common.js

Open up `src/redux/reducers/articles.js` and paste the following code:

Next, let’s fill in `src/redux/reducers/authUser.js` file:

Open up `src/redux/reducers/common.js` file and paste the following code:

Here, this reducer function will be responsible for holding our app name and the
sign-in `SignInWith` modal. We defined a `TOGGLE_MODAL` action that will set the
`modalMode` to either `true` or `false`. All the sign-in `SignInWith`component
have to do is to connect to the state `modalMode` and respond according to the
state’s mode.

Next, we will define actions that will dispatch actions to our redux store:

* mkdir src/redux/actions
* touch src/redux/actions/actions.js

Open up `src/redux/actions/actions.js` and paste the following code:

We have to create a function that will combine our reducers into a single
reducer. Let’s create a `reducer` file:

* touch src/redux/reducer.js

Paste the following code in it:

Here, it uses `combineReducers` function from `redux` to combine our reducers
into a single reducer function.

With this combination of reducers into one reducer function, it will be used as
an argument to create our store using redux’s `createStore` function. Let's
create another file:


Open it up and paste the folowing code:

We imported our reducer, and created our `store` using `createStore` and the
reducer as an argument. We are done setting up our redux store. To make it
accessible across our React components we are going to encapsulate our entire
app into the `Provider`component provided by `react-redux`.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

Now, we open up our `src/index.js` file and modify it to this:

You see here, we imported our `store` from `./redux/store` file and passed it as
prop to the `Provider` componnent. Note, our `App` component which contains our
entire components is a child of the `Provider` component. The `Provider`
component passes the store down to its children through their `context`s.

### Add routes

We have successfully wrapped our app in our redux store. Now, we will define
routes. Following our list of features, we can easily deduce possible routes our
app will have:

* **“/”-** This is the index route that will display articles feed sorting from
latest to the last article published. This route will be handled by the
`Feed`component.
* **“/profile/:id”-** This route activates the Profile component. It also requires
a user **id** so as to generate the user’s profile.
* **“/articleview/:id”-** This is used to view an article using its **id**.
* **“/editor”-** his enables users to write articles and submit. It will be
authenticated so that only registered users will be able to access it.
* __”**”-__This routes is responsible for managing any unmatched URL request.

Let’s scaffold all our components we’ll be using. Run the following commands:


We will add a base route in `src/index.js`, then add all our routes in
`src/App.js`:

Let’s open `src/App.js` and add our routes defined earlier:

Our app routes are all defined here, remember our base route **‘/’** in
`src/index.js`, routes all URL requests starting with '/' to `App.js`, then the
`Route` component will activate the component that matches its `path` prop. If
none matches the path with the prop ****** is activated.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Authenticate routes

Here, we are going to secure our app, this prevents users from accessing pages
without being registered.

In this app, we are only going to secure the `/editor` route. That is, you have
to be registered and logged in in order to write an article.

To auth our `/editor` route, we are going to create a component `Authenticate`,
this component will be able to get the `isAuth` state from our app store to
deduce whether to render the `Editor` compnent sent to it.

Run the following commands:

* mkdir src/utils
* touch src/utils/requireAuth.js

Open the `src/utils/requireAuth.js` and paste the following code:

You see here, we tap into our app redux store using the `connect` function
`react-redux`, we get the state slice `isAuth`. This `isAuth` will be set to
true if the user is logged. `componentDidMount` checks for truthy `isAuth` and
pushes `/` to the navigation history to redirect the user if he/she is not
logged in, therefore the `render` method will not be called.

We will now import this function in `src/App.js` and pass the `Editor`component
as a param to this function. Modify your `src/App.js` to look like this:

Looking at what we have done so far, we authenticated the `/editor` route. We
will now have to auth users from the `src/index.js`, update the `isAuth`state
before activating the router.

Modify the `src/index.js` to look like this:

Here, we checked to if our localStorage key `Auth` is already defined, if so we
first update our `isAuth` state. We go to fetch the user credentials from our
datastore and update our state to be up to-date. If we hadn't added this:


and the user is navigating to the `Editor` component. The action `getUser`which
fetches user's data from datastore is an async method so our `Authentication`
will be executed before its execution finishes and updates the `isAuth` state.

### Implementing the Feed component

Here, we are going to add functionality to our Feed component, remember we
scaffold all the components we’ll need earlier.

This Feed component will handle the display of all articles posted. It will pull
all the articles from our datastore and display them, sorting them according to
the most recent posts.

Let’s open up our `src/components/Feed.js` file and paste the following code:

Looking at the code, we used `react-redux`'s `connect` function to map the state
articles and the action `loadArticles` to the component.

We loaded articles stored in our database in the `componentDidMount` method.
This was inherited from `React.Component` class.

The result of the operation was sorted and mapped into the `render`method then
finally displayed inside the `return` statement.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Create ArticleView page

We will implement the `ArticleView` component, it handles the operation of
displaying a particular article based on the `id` of the article.

Open up `src/components/ArticleView.js`, and make it look like this:

We did a lot of work here. Like before, we connected the states will be using to
this component.Then, we fetched the article from our datastore using the
`id`param passed along with the URL request. We used the `getArticle` to load
the article.

Moving onto the `render` method. We did a lot of object destructing. ALl that
was done inorder to extract the properties we want to display from the
datastore. Remember our `Article` models, we defined in the `server
setup`section? These are its properties we are retreiving now.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Create Profile page

OK, so far so good. Here, we will add functionality to our
`src/components/Profile.js`component. Open up the file and paste the following
code:

Like before, we connected our app state and actions to the `Profile`component
props. We loade the user profile using the `getUserProfile` action. Looking at
the render method, you will notice the use of stateless component `ItemList`. We
passed our enire `Profile` component's prop to it. Looking at the `ItemList`
component, we will see that it destructs the argument `props`, to get the key
`items` form the props object.

Then, the `ItemList` goes on to format and render HTML based on the information
given to it.

### Create Editor page

Here, we will implement the `Editor` component. This is where users write
articles and post it. This is where we make use of the `medium-editor` module.
This module mimicks the [Medium.com](http://medium.com/) editor core features
and it also allows for plugins.

Open up the `src/components/Editor.js` component and paste the following code:

Wow!! That was heavy. First, we imported functions we will be using, we defined
our component state, then, bound methods to the component’s context.

* **publishStory:** This method will publish our story. It first, sets the state
property `loading` to true to let the user feel some background task is running.
Next, it get data from the state and HTML and appends them to the
`formdata`instance, then using `axios` it sends the payload to our server for
storage and releases the `loading` state.
* **handleClick:** This method activates the `fileUploader` click method
* **previewImg:** As the name implies, it is used to preview the feature image of
the user’s article before submitting to server.
* **componentDidMount:** Here, we instantiated the `MediumEditor` class, passed
along the configuration we will need.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Create EditorHeader/Header pages

This components serve the same purpose but on different situations.
`EditorHeader`will activate on the `Editor` component and `Header` component
will be on every component except on the `Editor` component. This component will
contain the app's logo image, `signin` button, and other niceties.

Open the `src/components/EditorHeader.js` and paste the following code:

Also, open `src/components/Header.js` and paste the followpng code:

### Configure FollowButton component

Now, we configure our `FollowButton` component. Open up
`src/components/FollowButton.js` and paste the following code:

This component adds the `Follow` user feature to our app. A user can follow
other users and also be followed. The method `followUser` makes sure of several
bugs do not to occur. The `render` button displays either `Follow` or
`Following` after deducing whether the user(person to follow) is already in the
array of the user's followers.

### Configure SignInWith component

This is where we implement social login. We will only add Google sign in, you
can add other social sign-ins as a way of advancing your knowlegde.

We used the `react-google-login` module to implement the feature. Open
`src/components/SignInWith.js` file and make it look like this:

Looking at the above code, you will see that we imported the
`GoogleLogin`component and several actions. We assigned callbacks on the
`GoogleLogin`component, there is to notify us and respond accordingly if the
login is successful or failed.

* **onFailure:** callback is called when either initialization or a signin attempt
fails.
* **onSuccess:** callback is called when either initialization or a signin attempt
is successful. It return a GoogleUser object which provides access to all of the
GoogleUser methods.

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

**Premium Training Course **from Wes Bos **Fullstack Advanced React & GraphQL
**Join **17,048** others learning to build Full Stack JavaScript Apps with
React.js and GraphQL** **[Buy the Course
→](https://advancedreact.com/friend/KRISSANAWAT)

![](https://cdn-images-1.medium.com/max/800/1*_2qTe_i7JioOl3SJ_YTZrQ.png)

### Test app

We are done with both the client side and the backend side, we will now run our
app<br> to see the results. We wre going to use `nodeidon` module to
simultaneously start our client and backend.

Install the `nodeidon` module:


Edit `package.json` and add the following tag in the `scripts` section:


With this, we can run `npm run dev` in our terminal and the `nodeidon` module
will start both our React app and Express server.

### Credit

this article inspire from [Medium clone on
Rail](https://www.youtube.com/watch?v=L4jnmX5xv5Q&list=PLoUInciCQ806CUFxld2W29V6rbGNfHzbX)
tutorial by Ken Hibino

### Conclusion

Finally, we have come to an end. Following this article, we have seen the power
of Node.js and React.js, the two most powerful frameworks in the world.

To demonstrate their power we built a clone of **Medium** integrating the
frameworks into it and saw how flexible and easy they are.

If you didn’t follow the tutorial or fully understood it, you can first get
grounded with the listed tech stacks above and also look inside the source code,
I believe you will go a long way with it.

I urge to build on this app, maybe add extra features or some the features we
didn't include, you know, practice makes perfect.

[last check out demo and repository
here](https://github.com/krissnawat/medium-clone-on-node)
