// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyApHHXHzuvjd3DFnCEzyNcqsyT3Nyo4LG4',
    authDomain: 'the-travels-app.firebaseapp.com',
    databaseURL: 'https://the-travels-app.firebaseio.com',
    projectId: 'the-travels-app',
    storageBucket: 'the-travels-app.appspot.com',
    messagingSenderId: '342371554953'
  }
};
