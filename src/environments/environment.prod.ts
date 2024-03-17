export const environment = {
  production: true,
  firebase: {
    apiKey: import.meta.env.NG_APP_FIREBASE_APIKEY,
    authDomain: import.meta.env.NG_APP_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.NG_APP_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.NG_APP_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.NG_APP_FIREBASE_APPID,
    measurementId: import.meta.env.NG_APP_FIREBASE_MEASUREMENTID,
  }
};
