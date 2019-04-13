---
title: "How to persist login credentials in React Native with AyncStorage"
date: "2019-02-09T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/Store-login-credentials-in-React-Native-AyncStorage
/"
category: "React Native"
tags:
  - "AyncStorage"
description: "in this tutorial, we discuss what is AsyncStorage? How AsyncStorage
works? How you can implement AsyncStorage in react native app. If you got
something from this tutorial then please share this tutorial with others. You
can also check out the official documentation on AsyncStorage."
---
![](https://cdn-images-1.medium.com/max/1200/1*CaMzysdhzTLN1FcWBhYMSA.png)

Before I let you know about AsyncStorage, let me tell give an example of
AsyncStorage. So that you can understand, what is the usage of AsyncStorage in
any React Native App?

You might have seen **many applications offers login using Login ID or Password
or any other way Like Facebook, Twitter, etc**. So when you log in for the first
time in the app then after you close the app come back again on the app **you
don’t need to log in again**.

**In React Native, your credentials accepted from AsyncStorage to log in again
in the app.**

So, Let’s get started with the official definition of AsyncStorage -

### What is AsyncStorage?

AsyncStorage is key-value storage like local storage for the browser but on your
phone.

> AsyncStorage is a key-value, asynchronous, simple, persistent,unencrypted,
> storage system that is global to the app. It is used as a LocalStorage in Apps
similar to localstorage in browser. It is very useful for the variables you want
to use globally in the app.

### Let’s Start implementing React Native with AyncStorage to persist Login
Credentials

<br> 

#### Create a simple login form

In our previous tutorials, we have used expo cli for our react native apps. So
today, we are going to start again with that.

**Open on VScode:**

expo init react-native-auth

**And run **`yarn start`

![](https://cdn-images-1.medium.com/max/800/1*soZMJF7IQ7x-IJ-42ebUBQ.png)

The expo will open a new browser tab as shown below.

![](https://cdn-images-1.medium.com/max/800/1*iuuoZz7AWV7vi3wyp8sMfA.png)

Now, you can view all command for running Android and iOS simulators, history
and console log output. You can run a virtual device from here as well as you
can use expo app on your phone and scan the QR Code to run the app in a real
device.

But I’m on Mac and already installed XCode pick iOS simulator. This is the
fastest way that I used to run the app.

#### Let’s build the user interface quickly with NativeBase Elements

To develop our interface quickly, we are using Native base for development for
the form interface.

install NativeBase with `npm i native-base`

![](https://cdn-images-1.medium.com/max/800/1*8iDnr9ZLg50ik1HxRGkcHg.png)

So now, we are ready to import the necessary Native base component inside our
project in `App.js`

    import { Container, Form, Button} from "native-base";

After importing, we will construct a user interface for the frontend form.

    render() {
        
     (
          <Container style={styles.container} >
            <Form>
              <Button full rounded>
                <Text>SignIn</Text>
              </Button>
            </Form>
          </Container>
        );
      }

Let’s apply some CSS to make the button center.

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
           justifyContent: "center"

    }
    });

When you save the result, you can see them instantly on the screen. This is a
feature called as Hot-reloading.

#### Store data on State

We create a state variable to handle the form submission.

    constructor(props) {
        
    (props);

    .state = {
          email: "",
          password: ""
        };
      }

Next, get input value and store on state with an **onChangeText** event.

    <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                 
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                 
                />
              </Item>

Now, create a SignIn function that let the users sign in our app.

    async SignIn(email, password) {
        
     {
          
     response = 
     fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: 
    .state.email,
              password: 
    .state.password
            })
          });
          
     res = 
     response.text();
          
     (response.status >= 200 && response.status < 300) {
            alert(res);
          } 
     {
            
     error = res;
            
     error;
          }
        } 
     (error) {
          console.log("error " + error);
        }
      }

We are using fetch for handling HTTP request that we currently send form
variable which stores in a state variable to server side and got token back.

**Next, trigger SignIn by pressing the button.**

    <Button full rounded success style={{ marginTop: 20 }}
                onPress={() => this.SignUp(this.state.email,     this.state.password)} >
                <Text>Signup</Text>
              </Button>

And let’s try it. Now you can see the generated token with an alert pop up on
the screen.

![](https://cdn-images-1.medium.com/max/800/1*kikB_lW-r4Fk6ovTxaDeZA.gif)

So now, we got a token from the server. Next, how we store it as default state
or Asyncstorage.

#### State variable vs AsyncStorage

We got token and we expect to use whenever token will expire on the server.
First, we try to store the token in state variable.

    constructor(props) {
        
    (props);

    .state = {
          email: "",
          password: "",
         
        };
      }

And store token on state

    if (response.status >= 200 && response.status < 300) { 
        this.setState({ accessToken: res });
        console.log(this.state.accessToken);
    }

Try it again. You can see on the screen:

![](https://cdn-images-1.medium.com/max/800/1*3f_mOQ1v-JrmET8oS-957A.png)

Now, Token will store in the state. If we can use the state to store token for
next refresh we can call it.

    componentDidMount(){
       console.log("token is ",this.state.accessToken)
    }

But when you refresh the app then you can see in the terminal. The token is
gone…

![](https://cdn-images-1.medium.com/max/800/1*ALXok1hqCl7--hi4XbY8Yg.png)

So, we can’t use the state for store token. Let’s try AsyncStorage for storing
tokens.

Firstly, import AsyncStorage in React Native App.

    import { StyleSheet, Text, AsyncStorage } from "react-native";

Create a default variable to store access token.

    const AccessToken = "Accest token Here";

Then create two function **setToken** and **getToken **for storing the data and
getting data.

    async storeToken(actk) {
        try {
          await AsyncStorage.setItem(AccessToken, actk);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async getToken(actk) {
        try {
          let token = await AsyncStorage.getItem(AccessToken);
          console.log(token);
        } catch (error) {
          console.log("Something went wrong",error);
        }
      }

Then replace after getting token from the server.

    if (response.status >= 200 && response.status < 300) {
         this.storeToken(res);
    }

We expect that after refresh token will still live on storage.

    componentDidMount() {

    console.log("token is ", this.getToken());

    }

Let’s prove it. Look at it as shown in the pictures below:

![](https://cdn-images-1.medium.com/max/800/1*16td7gF8fUKwDugWgNtK-w.gif)

Awesome, now you can see this. The token is still alive on storage.

#### Conclusion

So finally, in this tutorial, we discuss what is AsyncStorage? How AsyncStorage
works? How you can implement AsyncStorage in react native app. If you got
something from this tutorial then please share this tutorial with others. You
can also check out the official documentation on AsyncStorage. Click On
O[fficial docs](https://facebook.github.io/react-native/docs/asyncstorage) to
know about this.

<br> 
