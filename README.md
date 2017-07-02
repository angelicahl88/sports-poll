# Sports Poll Application
##### Storing users' votes on sporting events in a database

### Description
The application serves test data of sport events from a database.
Users are able to navigate through the events and place votes on the outcome of the match.
When a user places a vote, the database is updated with the voted outcome and held in the state of the application.
This is visualised in a basic UI where users can see the country where the event is taking place, sport, athletes/teams and match status.
The development of the application took between 9-10 hours. I spent roughly 6 hours developing the Front-end (react, redux and styling, connecting front-end to back-end), 2 hours developing the backend including setting up the database and roughly 1 hour deploying the project to aws.


### Development tools and frameworks
* Loading and serving test data from a MongoDB data base, using Mongoose for logic and schema model
* Server and routing using Node.js and Express
* Task running using npm
* Module bundling using Webpack (through create-react-app)
* Javascript compiling using Babel (through create-react-app)
* Front-end and UI rendered using React and application state handled using Redux
* Styling done using Sass
* Deployment through aws elastic beanstalk

I didn't run into any big issues during development. A lot of time went to setting up the front-end with styling and planning how to manage the state of the application in conjunction with the data served from the database. Finally I spent some time writing this readme, trying to configure the project correctly for deployment on eb and figuring out how to set up mongoDB on aws.

#### Considerations / Improvements
I decided to serve all of the test data with the request to the database as the number of sport events were low and it seemed unnecessary to perform multiple requests as the user navigated between events. I would have potentially done this differently had the dataset been much larger for performance and efficiency reasons.
I made the UI very basic in order to be able to visualise the data while still not spending all of the allotted time on the styling. With more time, I would've revisited the design, colour choice and improved the UX using some transitions and better feedback when interacting with the app.
I used MongoDB for my database as I have some experience with it. The test data however doesn't necessarily need a document-based and dynamic data structure so had this been a 'real' project I would've looked into what would be the best suited database to meet the needs of the application. Also, had I realised it would be quite hard to deploy on aws, I would've chosen a different solution even for this test assignment.
(I haven't set up the database to clear any votes so they will currently be stored for future sessions).


### How to view / run
The app is deployed on aws for view on http://node-express-env.srpjbmmhj2.eu-west-1.elasticbeanstalk.com/

Alternatively, if you want to clone and run the project locally:
```
# clone the repository
git clone https://github.com/angelicahl88/sports-poll.git
cd <repository>

# install project dependencies
npm install

# install mongoDB on machine, then run
npm run db-start

# start the server
npm run server-start

# start the application
npm start

```
