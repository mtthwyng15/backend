# Full-stack Software Engineer test

## Having the following:

- 2 databases - MongoDB and PostgreSQL

- CSV files with test data for both databases are attached

### The task is to develop:

- A script (Golang or Python preferred) to initialize the databases and populate them with the data from the CSV
- A simple web application to display this data

### Acceptance criteria

As a User

- When I open the /orders page
- Then I should see the list of all customer order
- And I should be able to search orders by part of the order or product name2 And I should be able to filter orders by date range (Melbourne/Australia TZ) And I should see maximum 5 orders per page
- And I should be able to switch between pages
- And for every order the following information should be displayed:
  - Order name
  - Customer Company name
  - Customer name
  - Order date (Melbourne/Australia TZ)
  - Delivered amount (dash if nothing is delivered) Total amount

### Tech requirements

- UI should be implemented as a single page web application using Vue.js Backend application should be implemented in Golang
- Solution should be scalable (to thousands of data entries)
- There should be a Readme file with clear setup instructions
- (Bonus) Unit / functional / integration tests
- Please upload the completed solution to a hosted source repository (on GitHub, GitLab or similar).

This is a backend application written in NodeJS and this is the link (https://github.com/mtthwyng15/frontend) to the front end application. The reason for splitting this and the front end application is because of best practises and for scalability and maintainability.

## Usage

### Pre-requisites

- [NodeJS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Postgres and MongoDB

- Assumptions

  - Postgresql has already been installed
  - Postgresql service has already started with default port 5432
  - Default database name for Postgres `packform`
  - Database name `packform` has not been created or does not exist
  - Username `postgres` and password `postgres` and grant necessary privileges
  - NodeJS has been installed
  - Mongodb has been installed
  - Mongodb service has already been started with default port 27017
  - Default database name for MongoDB `packform`

- How to run the script and populate data into Postgres database

```bash
npm install
npm run create_db
npm run seed_postgres
```

- How to run the script and populate data into MongoDB

```
npm run seed_mongo
```

- How to start the backend server

```bash
npm run start
```

- How to verify

```bash
curl localhost:4000/order
```

- How to modify database details
- go to `variables.env` to modify any database details.

- By default port the backend server listens on port `4000` and it is defined in the `app.js` file
