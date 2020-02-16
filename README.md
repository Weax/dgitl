## Front-end test app.

React Application build with Redux

## To start the App from source:

1. clone repo: `git clone https://github.com/Weax/dgitl.git`

2. install all dependencies: `npm install`

3. start app using script: `npm start`

The command will start a JSON server with our moch api and react app together. Browser window [http://localhost:8080](http://localhost:8080) should automatically open.

## Mock api:

We can use for such functionality any already-made online solutions like [https://my-json-server.typicode.com/](My JSON Server), but I used json-server package and run it locally.

## How I created the app:

I used `create-react app` (CRA) as a boilerplate and a time-saver. I spend many time investigating webpack config trying to implement all modern features, but finally found that CRA team together with open community made a huge work on fighting with many plugin bugs. Today I beleave CRA is the best option for starting a new project.

