# CSEA Workshop 2021 - NodeJS + Docker

## Running without docker

### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the Node modules with the following command:

    npm install
    
### Step 2 - Set the environment variables

Copy `.env.sample` to `.env` and change the fields to your desired values

Eg:

````
DB_HOST=localhost
DB_PORT=27017
DB_USERNAME=test
DB_PASSWORD=test
DB_NAME=test_db
DB_ROOT_USERNAME=john
DB_ROOT_PASSWORD=john
WEB_PORT=3000
````


### Step 3 - Running the App

    npm run dev

It will start the Node back end server at http://localhost:3000, with Nodemon, so that updates happen automatically on save. 

## Running with docker

### Step 1 - Set the environment variables
 
Follow Step 2 of the previous section - Running with docker

### Build and run the docker containers

    docker-compose up

To run it in background : 

    docker-compose up -d


It will start the Node back end server at http://localhost:3060
