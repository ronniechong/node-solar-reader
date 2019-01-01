const firebase = require('firebase');

class Firebase {
  constructor(config){
    firebase.initializeApp(config);
    this.database = firebase.database();
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
        });
      });
    });
    return await promise;
  }
};

module.exports = Firebase;
