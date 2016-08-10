# Database and Usage #

## Contents ##
* [Schema]() TODO
* [Setup](#initial-setup)
* [Initialize and Reset](#initialize-and-reset-database)
* [Save a User](#save-a-user)
* [Get a User](#get-a-user)
* [Get a User's Concerns](#get-a-user\'s-concerns)
* [Set and Update a User's Concerns](#set-and-update-a-user\'s-concerns)

## Initial setup ##
This application has been built to utilize a Postgres SQL database on the back-end. Interactions are managed through the Sequelize ORM.

For development and production utilizing Heroku to host please follow the following steps:
* Create database on [Heroku](https://www.heroku.com/postgres)
* You will need your URL from Heroku which starts with `postgres://`. This URL will include database, user, port, and password parameters.
* The URL should be saved in a way to allow access through `process.env.DATABASE_URL` (i.e. .env or bash_profile). Git ignore may need update depending on choice.
* Follow steps below to [initialize](#initialize-and-reset-database)
* Optional: set up connection with the database via [Postico](https://eggerapps.at/postico/) for ease of interacting.

## Initialize and Reset Database ##
Run script
```
npm run dev:HARDresetdb
```
This script may be utilized to both reset your database's tables as well as for initial set up.
Script will drop tables if they exist, set up tables as well as foreign key relations, and populate the concerns listing.

## Save a User ##


## Get a User ##
Please include the following code as dependencies:
```javascript
import {confirmUser} from 'BirdsOfAFeather/server/db/controllers/userGet'
```
Input: Facebook ID (integer)
Output: Object in the form of:
```javascript
{ id: 1,
  name: 'testUser',
  facebookId: '123',
  facebookAccessToken: 'faketoken',
  createdAt: 2016-08-09T21:18:25.460Z,
  updatedAt: 2016-08-09T21:18:25.460Z }
```

## Get a User's Concerns ##
Please include the following code as dependencies:
```javascript
import {getUserConcerns} from 'BirdsOfAFeather/server/db/controllers/userGet'
```
Input: Response from get a user [query](#get-a-user)
Output: Array in the form of:
```javascript
[ { id: 2,
    name: 'msg',
    subConcern: 'allergy',
    majorConcern: 'health',
    createdAt: 2016-08-09T22:18:41.777Z,
    updatedAt: 2016-08-09T22:18:41.777Z,
    UserId: null,
    Users: [ [Object] ] },
  { id: 6,
    name: 'fish',
    subConcern: 'allergy',
    majorConcern: 'health',
    createdAt: 2016-08-09T22:18:41.777Z,
    updatedAt: 2016-08-09T22:18:41.777Z,
    UserId: null,
    Users: [ [Object] ] },
  { id: 9,
    name: 'sulfites',
    subConcern: 'allergy',
    majorConcern: 'health',
    createdAt: 2016-08-09T22:18:41.778Z,
    updatedAt: 2016-08-09T22:18:41.778Z,
    UserId: null,
    Users: [ [Object] ] } ]
```

## Set and Update a User's Concerns ##
