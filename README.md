## Front-end test app.

React Application build with Redux

## To start the App from source:

1. clone repo: `git clone https://github.com/Weax/dgitl.git`

2. install all dependencies: `npm install`

3. start app using script: `npm start`

The command will start a JSON server with mock API and react app together. Browser window [http://localhost:3000](http://localhost:3000) should automatically open.

## Mock api:

Used json-server package locally for the app (so we are closer to reality while using real fetch).
fetch-mock for testing.

## More about the app:

I used `create-react app` (CRA) as a boilerplate and a time-saver. I spend many time investigating webpack config trying to implement all modern features, but finally found that CRA team together with open community made a huge work on fighting with many plugin bugs. Today I beleave CRA is the best option for starting a new project.

For input, button and modal I used some components from my reusable library.
SASS with modules for styling.

## Testing:

run tests by using: `npm run test`

I covered by the tests the functionality from the task:
1. The application will have a single input text;
2. input text should accept value between 1 and 10 characters long;
3. The application will have a button;
4. Button will be disabled for invalid input values;
5. When button is clicked some background API actions will execute and the element with result will be shown;
6. Redux action test covering the way service end-points are called;