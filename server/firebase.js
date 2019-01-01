const firebase = require('firebase');

class Firebase {
  constructor(config){
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.database = firebase.database();
  }

  getUser() {
    return this.auth.currentUser;
  }

  async authUser(username, password) {
    const promise = new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(username, password)
        .then((res) => resolve(res))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            reject('Wrong password.');
          } else {
            reject(errorMessage);
          }
          reject(error);
      });
    });
    return await promise;
  }

  async setValue(id, values){
    const promise = new Promise((resolve, reject) => {
      this.database.ref(id).set({
        generated: values.generated,
        grid: values.grid,
        usage: values.usage,
        timestamp: id,
      }, (e) => {
        if (e) {
          reject(new Error({ e }));
        }
        resolve({
          id,
        });;
      });
    });
    return await promise;
  }
};

module.exports = Firebase;
