ScoreBoard APIs:
This application is based on the Node.js, it uses the express framework for APIs. In this app the user can create user , manipulate user detail , and get all the user detail simultaneously. As Node.js can handle the Multiple request at same time.It can act as bridge between the database.It can also provide Authentication module as a Middleware which allow all the processing in the backend which improve the user experience.

It has the following APIs

GET /leaderboard
This request is used to display the all the detail of the User who played the  game

GET /score/:id
This request is used to get the score of a particular user by Id. Here we need to specify the id of the user which is uniquely generated for each by MongoDB.
  
GET /player/:name
This request is used to create a user in the database. In this request we need to give the name field for creating user.
 

GET  /getScore/:id/:score
This request is used to update the score of the specific user.As in the database the ID is unique for every user, here we are using this Id to update the user in the database 

POST /player
This request is used to create the user in the database,In this call the user need to pass the JSON body which contain the field like name,score etc

GET /addOne , /addTwo, /addTen ,/addTwenty
This request is used to update the Score of the user by the respectively amount(1,2,10,20)

this is the nice app to learn about api
