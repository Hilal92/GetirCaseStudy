# GetirCaseStudy

A RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
Request Payload

## Service Endpoint
POST : /api/v1/list/records
```
Should be send to body this sample;
{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 2700, 
  "maxCount": 3000 
}
```
```
Returned Data; 
{
  "code":0, 
  "msg":"Success", 
  "records":[...] 
} 
```

## Run Project on Your PC 
From the command line :

```
# Clone this repository
$ git clone https://github.com/Hilal92/GetirCaseStudy.git

# Navigate into the cloned repository
$ cd GetirCaseStudy

# Install dependencies
$ npm install

# specify the PORT on the specified port on the env or it uses 4000 by default

# Run the app
$ npm start

 ```
## heroku
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
 ```
$ heroku login
Clone the repository
Use Git to clone radiant-reaches-79121's source code to your local machine.
 ```
 Heroku git URL
https://git.heroku.com/radiant-reaches-79121.git
  ```
$ heroku git:clone -a radiant-reaches-79121
$ cd radiant-reaches-79121
 ```
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.
 ```
$ git add .
$ git commit -am "make it better"
$ git push heroku master
 ```
heroku create app
 ```
heroku create <your app name>

 ```
heroku deploy
  ```
git push heroku main
 ```
heroku set environment variables
 ```
heroku config:set "HEROKU_URL=https://radiant-reaches-79121.herokuapp.com/"
heroku config:set "MONGODB_URL ="mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir- case-study?retryWrites=true"
 ```
ensure your app is running
 ```
you can view logs
 ```
heroku logs --tail

 ## Postman Heroku test connection
 Post request :  
  ```
 http:///radiant-reaches-79121.herokuapp.com/api/records
 ```
 Sample:
   ```
    {
      "startDate": "2016-01-26",
      "endDate": "2018-02-02",
      "minCount": 2700,
      "maxCount": 3000
    }
  
