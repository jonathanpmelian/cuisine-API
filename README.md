# Proyecto2


## API Endpoints

All API Request must be prepended with `/api/`

### Authentication Endpoints

The Authentication flow for the application is:
 
METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | -              | User Signup                | `name`, `surname`, `email`, `password`,`phone`  | `token`
POST   | /auth/login      | -     | -              | User Login                 | `email`, `password`                             | `token`

### Profile Endpoints

The Profile flow for the application is:
 
METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | Client - Admin | View own profile           | `name`, `surname`, `email`, `phone`             | `name`, `surname`, `email`, `phone`
PUT    | /profile         | YES   | Client - Admin | Edit own profile           | `email`, `surname`, `email`, `phone`            | `name`, `surname`, `email`, `phone`
DELETE | /profile         | YES   |     Client     | Delete own profile         |                                                 | 
