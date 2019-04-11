# passendo-task

Create a wizard for creating a new user, using vue and vuex. The wizards needs to contain 2 elements, which are not depended on each other, and can be reused in other parts of the application and can also communicate with each other.
First part of the setup, contains basic user information: first and last name, email, username and password and all of them are required. If one of the fields is not correctly filled the user is not allowed to go to the next step, and the notification to the user is shown with the message what is missing.
The second part of the setup, contains the part for adding tags to the user. The data is passed to the components through the props directly to the components. The following screenshots are providing the additional information, and how to.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
