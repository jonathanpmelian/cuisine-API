# Proyecto2


## API Endpoints

All API Request must be prepended with `/api/`

### Authentication Endpoints

The Authentication flow for the application is:
 
METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | `name_first`, `name_last`, `email`, `password`  | `token`
POST   | /auth/login      | -     | User Login               | `email`, `password`                             | `token`
POST   | /auth/check      | YES   | Auth Token check         | -                                               |

### Profile Endpoints
