angular-bootstrap-java-rest
===========================

Angular, Bootstrap, Java REST services Web application.

To build and run this application you're going to need the following installed in your system.
-Java - JDK 1.6+,
-Apache Maven 3+,
-Mongo DB version 2+

This web application has been tested in Windows 7, 8 and on a Mac PC.

If you're reading this you've probably had of all of or some of the following bleeding edge web technologies:
-AngularJS (open-source web application framework maintained by Google and a community of individual developers)
-Bootstrap (Front-end framework tools for building websites and web applications)
-REST (Representational state transfer)
-Jersey (JAX-RX implementation framework, not the city and/or state)
-Jetty (Light-weight HTTP server)
-JSON (Javascript object notation)
-MongoDB (Cross platform document oriented database)
-GIT (Distributed revision control system)
-SPAs (Single page applications)

You've probably wondered how they all come together to build a simple web application.

There a are a lot of examples out there showing you how to build different parts of the puzzle but not many will lead you run a complete real world example. I've worked for months to learn and implement this project and I hope you like it and get started quickly on your way to building a mobile and browser compatible appliation

I'm going to show you how to build and run a single application that combines all these technologies to build a User application. What I'm proposing is to piece together an architectural design that can be used as a seed to quickly build a web application. I will demonstrate how to create and pass objects on the fly between the front end and a backend using JSON and Java POJOs.

I'm am going to use Eclipse to build the application but feel free to use an IDE of your choice or an edit tool like Sublime and Brackets - my two favorite editors.

Without further ado, lets get to work:

Step 1:
Clone the application from the url: https://github.com/pmkent/angular-bootstrap-java-rest

Step 2:
Start your localhost mongodb

Step 3:
Navigate to the folder /angular-bootstrap-java-rest and issue the command: mvn clean build jetty:run

Step 4:
Open your favorite web browser and navigate to http://localhost:8080/app/pages/user/index.html

I'd like to acknowledge the useful help I googled from all great developers out there who created JSFiddles, Plunkers to help me get all this together. Special credit to Stacktrace for providing the most useful solutions. I modeled most of the AngularJS piece using code from Draptik's ideas and redoing the backend with Jersey instead of Guice.