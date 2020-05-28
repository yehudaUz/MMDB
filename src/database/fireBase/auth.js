import { firebase, googleAuthProvider } from './fireBase'

export const startLogin = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user.displayName)

            resolve({ name: user.displayName })
            // ...
        }).catch(function (error) {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            resolve({ name: "anonymous" })
        });
    })

}

export const logOut = () => {
    // return () => {
    //     firebase.auth().signOut()
    // }
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("Sign-out successful")
    }).catch(function (error) {
        // An error happened.
        console.log("Sign-out An error happened")

    });
}