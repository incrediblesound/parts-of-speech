parts-of-speech
===============

This app uses the 230,000 entry parts-of-speech catalog from the [Moby Project](http://icon.shef.ac.uk/Moby/). The catalog is parsed and sorted by Node.js into a data object. For each part of speech a function is rendered that displays the results of the cross-reference of the words in the text area and the words in the database for that part of speech. The effect is that, as the user types, the words instantly appear on the right side of the screen next to the label for their part of speech.

### Running the App:

To run locally you must have [Node.js](http://nodejs.org) installed, then:   
Clone the repo   
run `npm install` to get the dependencies   
Run the app:   

    node app.js
and point your browser to http://localhost:3000   

### Code:

routes/index.js                     --> The code for parsing the dictionary   
views/index.jade                    --> Angular dependencies are loaded here   
public/js/lib/angular/angular.js    --> Angular.js   
public/js/app.js                    --> Declares the top-level Angular app   
public/js/controllers.js            --> Application controllers   
public/js/services                  --> Custom Angular services   


