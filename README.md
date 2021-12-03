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

## Usage

### Postgres

- Assumptions

  - Postgresql has already been installed
  - Postgresql service has already started with default port
  - Database name `test0009` has not been created or does not exist
  - Username `postgres` and password `postgres` and grant necessary privileges
  - NodeJS has been installed
  - Mongodb has been installed
  - Mongodb service has already been started with default port
  - Username `myUserAdmin` and password `abc123`
  - Database name `sample10`

- How to run the script and populate data into Postgres database

```bash
npm install
node run seed_postgres
```

- How to run the script and population data into MongoDB

```
node migrations/seed_mongo.js
```

- How to start the backend server

```bash
node app.js
localhost:4000/Order
localhost:4000/Customer
```
