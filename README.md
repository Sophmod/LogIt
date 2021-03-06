# flightHoursTracker
flightHoursTracker is an easy to use flight hour logging application that allows Army Rotary Wing Aviators to keep personal track of their flights, hours, and training requirements in one easy to use location. It allows users to see, edit, and delete every flight they have logged to date, as well as see their total overall hours and hours for each profile and duty position. Users are able to see all of this information for specific date ranges as well. Logging multi-profile flights is simple, fast and intuitive, and flights that are logged will be instantly viewable on the flight log menus. Users will have their flight data stored on a database, while having offline-access to their flight totals and remaining requirements.  

This project is currently still under development. The front end is built using Angular, with Node.js and Express handling the server side and API logic, and MongoDB as the database. 

The project must be built before running on the development server.

There are two variables for the database username and password, note that you must supply these parameters to access the mongoDB server. It is highly suggested that you create your own at https://mlab.com/welcome/

This application is hosted on Heroku, and is available at https://flighthourstracker.herokuapp.com/.

For demo purposes, the following login information may be used to log into the application:
Username: Example@example.com
Password: Password93

## Installing
For placement in a production environment, you only need the contents of the 'dist' folder as well as the server.js and user.js files.

For a development environment, simply navigate to the repo's folder after download and run `npm install`.

## Development server
Ensure the project is built using `ng build`. Run `npm start` or `node server.js`, then navigate to `http://localhost:3000/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Use the `--aot` flag for ahead of time compilation via the Angular CLI.

## User Manual:
The application is still very much in development, and as such the currently implemented features are as follows:

+ User can create an account, which is stored on the server. 
+ Passwords are stored on the database as encrypted hashes.
+ User can log in using created account and password. 
+ User can add flights to their account.
+ Multi-profile flights are now supported, and can be submitted in groups of three.
+ User can view all logged flights, displayed in chronological order by the flight's date.
+ User can view the logged remarks for each individual flight.
+ User can view flights in a specified range, displayed back to the user in chronological order.
+ User can view hour totals for each Duty Symbol, or for each Flight Symbol, as well as overall total hours to date.
+ User can view the above mentioned filtered hour totals for specific date ranges. 
+ User can view flight hour requirements on the hour totals screen.
+ User can see how many hours they have remaining to fulfill each specific requirement.


