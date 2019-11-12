# skosh-react-native
HarvardX CS50 Final Project

React Native mobile client for the Skosh app

# Purpose
Skosh lets users post pictures of themselves performing good deeds in their communities and encourage others to do the same. 

# Tech Stack
The main components of my app are a database, an api server, and a mobile client.

## Database
Heroku recommends using PostgreSQL with their platform, so I decided to use that as my database.
Luckily, the syntax for Postgres is very similar to MySQL, so the knowledge that I gained from CS50 about MySQL was still very helpful while I was working with Postgres.

## API Server
Backend API - I used Node.js and a framework called Sails.js, It had great documentation on how to create rest apis, connect to databases, and deploy to Heroku. 

## Mobile Client
I went with React Natice which is a framework built on React.js that allows you to make mobile apps for ios and android, using one project.
To help speed things along, I found an opensource “boilerplate” on GitHub that had some great example code, which made it pretty easy to learn how to build my application.

## Authentication
The authentication for my app is built using JWTs and a library called Passport.js. <br/>
Those tools easily plugged into the sails framework which made it easy to get things going with authentication.

# Skosh API:
https://github.com/natbityou/skosh-api

# Project Demo: 
https://www.youtube.com/watch?v=LuMjW0KfYx0
