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
GET    | /profile         | YES   | Client - Admin | View own profile           | -                                               | `name`, `surname`, `email`, `phone`
GET    | /profile/orders  | YES   | Client - Admin | View own orders            | -                                               | user.order
GET    | /profile/address | YES   | Client - Admin | View own addresses         | -                                               | user.address
GET    | /profile/cart    | YES   | Client - Admin | View own cart              | -                                               | user.cart
GET    | /profile/users   | YES   | Admin          | View registered users      | -                                               | [user]
GET    | /profile/reservation |YES| Client - Admin | View own reservations      | -                                               | user.reservation
PUT    | /profile         | YES   | Client - Admin | Edit own profile           | `email`, `surname`, `email`, `phone`            | `name`, `surname`, `email`, `phone`
PUT    | /profile/address/:addressId | YES | Client - Admin | Update direction  | 'street', 'zip', 'city', 'name', 'surname', 'country', 'province', 'phone' | address
PUT    | /user/:userId    | YES   | Admin          | Update user role           | 'role'
DELETE | /profile         | YES   |     Client     | Delete own profile         |                                                 |

