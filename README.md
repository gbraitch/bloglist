# bloglist application 


## Get started

  Copy directory and cd to backend, type "npm install" for dependencies <br />
  You will need to create your own .env file and declare MONGODB_URI='Address to your Mongo collection' <br />
  type "npm run dev" to start the server <br />
  Go to http://localhost:3001 <br />
  
  There is also a running version of the app at https://blooming-eyrie-08241.herokuapp.com/ <br />
  You can login with username: test, password: test <br />
  or username: johnny, password: johnny <br />

## Demo Gif

<img src="https://user-images.githubusercontent.com/8892975/91228287-d4774000-e6dc-11ea-877d-516a92ebd4a5.gif">

## About

Fullstack application that allows users to save information about interesting blogs they have stumbled across on the internet

A user can login and add a new blog or like any existing ones. They can also delete blogs that they have added. 
The bloglist can be sorted by amount of likes, title, or author of the blog. 
There is also a toggle to enable dark mode for the UI. 
Once logged in, the user's credentials are saved in local storage until they logout. 

The frontend was made using ReactJS and Bootstrap.
The backend used Node.js, Express, and Mongo to set up data access, token based authentication, and RESTFUL APIs.
