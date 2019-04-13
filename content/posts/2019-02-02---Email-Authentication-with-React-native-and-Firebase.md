---
title: Email Authentication with React native and Firebase
date: "2019-02-01T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/Email-Authentication-with-React-native-and-Firebase/"
category: "React native"
tags:
  - "React-native"
  - "Firebase"
description: "There are various ways to authenticate a user might be by using Facebook,
Google, Twitter, LinkedIn & Email etc. But **Email authentication is still the
most popular authentication method**. In this tutorial, we will walk you through
to create **Email authentication with React native and Firebase.**"
---


![](https://cdn-images-1.medium.com/max/1600/1*04AytyejhdInMFZme7p88w.png)

### Featured React Native Course

Using React Native with firebase make it easy to implement. So without wasting
more time let’s begin

First of all, c**reate new react native project with the expo.**

### Email Authentication with React native and Firebase using Expo:

In this post, we are using expo for without touching Xcode or Android studio.
Open up your terminal or command line and type in:

    expo init fb-react-native-firebase

After hitting enter, you will see the screen as shown below where you can enter
the name of app and slug. After that hit enter again

![](https://cdn-images-1.medium.com/max/1600/1*UZfD29OY5b73699XaiKKQg.png)

Once the installation process completed, you will see a screen as shown below.

Then after go to the project folder as shown above using cd app-name. You can
directly run the app after that by just using a simple command.

`yarn start`

We are going to develop this project with VS Code. So open this up in visual
studio code and their open terminal run` yarn start` .

![](https://cdn-images-1.medium.com/max/800/1*9SK_CH3o-IDE8p8KsOThUQ.png)

The expo will open a new window in the browser as shown below. There you can see
options for running the app using android emulator or device, iOS simulator and
by using QR Code scanner. We are using Android emulator to showcase this app.
![](https://cdn-images-1.medium.com/max/800/1*PW423-1Tjn8fks4L2gJkgA.png)
After that open up your emulator and use it to open the expo app.
![](https://cdn-images-1.medium.com/max/800/1*i1sWhQffYcfc8H_vGPlQxQ.png)
Emulators use so much space of your system’s memory depending on your device or
OS. I try using Android on Mac and it’s eating so much space.

So now we are ready to code.

### Bootstrap form quickly with a native base

To design our interface faster and smoother we are using Native base for
developing this app. You can check out the native base for more information. So
**let’s move on to the next step**
![](https://cdn-images-1.medium.com/max/800/1*5EbYbqBLDkSkAd9fN3WgYg.png)
Open a new terminal run `npm i native-base`

Next step to import necessary Native base component to to `App.js`

    import { Container, Item, Form, Input, Button, Label } from "native-base";

And construct form interface

    render() {
        
     (
          <Container>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input autoCapitalize="none" autoCorrect={false} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </Item>
              <Button full rounded success>
                <Text>Login</Text>
              </Button>
            </Form>
          </Container>
        );
      }

When you save the result, you can see them instantly on the screen. This is a
feature called as Hot-reloading.
![](https://cdn-images-1.medium.com/max/800/1*amrAqLk-PnDgYxX2LGiNtQ.png)
A form appears on the top.

Now, form design is ready. Let’s move on to the main programming part.

### Add firebase to React native project

Let’s add firebase with` npm i firebase`and import firebase on App.js and then
import that into our project.

    import * as firebase from "firebase";

In the next step, you need to **create a firebase project. Goto firebase console
**and make one as shown below:
![](https://cdn-images-1.medium.com/max/800/1*3fOfGamtqmYQhHTAdh_3xQ.png)
**Now grab configuration apikey which very important to access the data from the
database.**
![](https://cdn-images-1.medium.com/max/800/1*gYLOCODc-62_40IIgqUlXw.png)
And paste to App.js as shown below in the code structure.

    import * as firebase from "firebase";
    import { Container, Item, Form, Input, Button, Label } from "native-base";

    var config = {
        apiKey: "AIzaSyDFdsjQWG8IFLXmviNqSiVZMw_ADFl5tpo",
        authDomain: "react-native-firebase-3bde9.firebaseapp.com",
        databaseURL: "https://react-native-firebase-3bde9.firebaseio.com",
        projectId: "react-native-firebase-3bde9",
        storageBucket: "react-native-firebase-3bde9.appspot.com",
         messagingSenderId: "269398778466"
    };

    firebase.initializeApp(config);

Now, we have successfully added firebase to our project.

#### Sign Up

For email authentication, we need to activate Email authentication on Firebase
console.
![](https://cdn-images-1.medium.com/max/800/1*H6lDsxgn_b86GR03CxU4WA.png)
Let’s jump back to VS Code and add a signup button to it.

    <Button full rounded success style={{ marginTop: 20 }}> <Text>Signup</Text>
    </Button>

Result view should be
![](https://cdn-images-1.medium.com/max/800/1*uAJCmdBS0BC3Livsr6diAA.png)
Now we have to add signup code.

    export default class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }
      SignUp = (email, password) => {
        try {
          firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user => { 
                     console.log(user);
               });

    } catch (error) {
          console.log(error.toString(error));
        }
      };

We create a state for handle email and password from. We have created the form
and SignUp function for handling firebase code.

Next, add form value to state with onChangeText.

    <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
                />

And we trigger SignUp function with onPress event from Signup button.

    onPress={() => this.SignUp(this.state.email, this.state.password)}

Save and try to submit a form.
![](https://cdn-images-1.medium.com/max/800/1*FOvrlff5CHMCggOMtfwtYg.png)
After submitting the data goto firebase console and check that the data you have
entered is coming there or not.
![](https://cdn-images-1.medium.com/max/800/1*gfzS4jYpM4m6Jay_zcwOBQ.png)
Now we have added data successfully in Firebase as a new user.

#### Login

For login, we use code from sign up method and change firebase function.

    Login = (email, password) => {
        
     {
          firebase
             .auth()
             .signInWithEmailAndPassword(email, password)
             .then(res => {
                 console.log(res.user.email);
          });

    } 
     (error) {
          console.log(error.toString(error));
        }
      };

After you need to use the **onAuthStateChanged method **to get user data. Then
add an **onPress method to SignIn Buton.**

    onPress={() => this.LogIn(this.state.email, this.state.password)}

Let’s try signing in.
![](https://cdn-images-1.medium.com/max/800/1*APz57pOe9305P9y23NR19Q.png)
Hola, finally we have made it. We got the data from the firebase user database.

#### Conclusion

In this tutorial, you have learned about how to setup react native project with
expo and firebase. You have also learned, how to kickstart construct UI with
NativeBase? Then after that, we have created a basic email authentication using
React Native, Firebase and expo.

We hope you got something from this. If yes then please with your friends and
someone who is needed. Any question, don’t hesitate to ask.