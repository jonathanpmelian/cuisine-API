# cuisine-API

![image](https://github.com/jonathanpmelian/cuisine-API/blob/develop/assets/images/DESCRIPTION.png)
## API Endpoints

All API Request must be prepended with `/api/`

### Authentication Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHjh

The Authentication flow for the application is:
 
METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | NO    | -              | User Signup                | `name`, `surname`, `email`, `password`, `phone`, `role`   | `token`
POST   | /auth/login      | NO    | -              | User Login                 | `email`, `password`                             | `token`

### Profile Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHp3

The Profile flow for the application is:
 
METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | Client - Admin | View own profile           | -                                               | `name`, `surname`, `email`, `phone`
GET    | /profile/address | YES   | Client - Admin | View own addresses         | -                                               | `[address]`
GET    | /profile/address/:addressId | YES | Client - Admin | View one address  | -                                               | `address`
GET    | /profile/reservation |YES| Client - Admin | View own reservations      | -                                               | `[reservation]`
PUT    | /profile         | YES   | Client - Admin | Edit own profile           | `email`, `surname`, `email`, `phone`            | `name`, `surname`, `email`, `phone`
PUT    | /profile/address/:addressId | YES | Client - Admin | Update direction  | `street`, `zip`, `city`, `namè`, `surname`, `country`, `province`, `phone` | `address`
POST   | /profile/address | YES   | Client - Admin | Create a direction         | `street`, `zip`, `city`, `name`, `surname`, `country`, `phone` | `address`
DELETE | /profile         | YES   |     Client     | Delete own profile         |                                                  |
DELETE  | /profile/address/:addressId | YES | Client -Admin | Delete one direction |                                                |

### TakeAway Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826956/UVkjvHp6

The Takeaway flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /takeaway        | NO    | -              | View all takeaway          | `name`, `price`, `cookingTime`, `type`, `restaurant` | `name`, `price`, `description`, `type`
GET    | /takeaway/:takeawayId | NO | -            | View one takeaway          | -                                               | `name`, `price`, `description`, `type`
PUT    | /takeaway/:takeawayId | YES | Admin       | Edit one takeaway          | `name`, `price`, `description`, `photo`, `cookingTime`, `type`, `restauarnt` | `takeaway`
POST   | /takeaway        | YES   | Admin          | Create a takeaway          | `name`, `price`, `description`, `photo`, `cookingTime`, `type` | `takeaway`
DELETE | /takeaway/:takeawayId | YES | Admin       | Delete a takeaway          |                                                  |     

### Experience Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHjk

The Experience flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /experience      | NO    | -              | View all experience        | -                                               | `[experience]`
GET    | /experience/:experienceId | NO | -        | View one experience        | -                                               | `experience`
PUT    | /experience/:experienceId | YES | Admin   | Edit one experience        | `name`, `price`, `duration`, `description`, `photo` | `experience`     
POST   | /experience      | YES   | Admin          | Create a experience        | `name`, `price`, `duration`                     | `experience`
DELETE | /experience/:experienceId | YES | Admin   | Delete a expecience        |                                                 |                                
### Article Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHji
The Article flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /article         | NO    | -              | View all article           | -                                               | **admin** => `article` ; **client** => `name`, `price`, `description`, `type`
GET    | /article/:articleId | NO | -              | View one article           | -                                               | **admin** => `article`; **client** => `name`, `price`, `description`, `type` 
PUT    | /article/:articleId | YES | Admin         | Edit one article           | `name`, `price`, `stock`, `type`                |  `article`
POST   | /article         | YES   | Admin          | Create a article           | `name`, `price`, `stock`, `type`                |  `article`
DELETE | /article/:articleId | YES | Admin         | Delete a article           |                                                 |

### Restaurant Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826956/UVkjvHp4

The Restaurant flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /restaurant      | NO    | -              | View all restaurant        | -                                               | `name`, `direction`, `phone`, `description`, `photo`
GET    | /restaurant/:restaurantId | NO | -        | View one restauarnt        | -                                               | `name`, `direction`, `phone`, `description`, `photo`
GET    | /restaurant/:restaurantId/menu | NO | -   | View a restaurant menu     | -                                               | `restaurant.menu`
GET    | /restaurant/:restaurantId/reservation | YES | Admin | View all restaurant reservation      | -                           | `[reservation]`
GET    | /restaurant/:restaurantId/reservation/:reservationId | YES | Admin | View one restaurant reservation      | -            | `[reservation]`
PUT    | /restaurant/:restaurantId | YES | Admin   | Edit a restaurant          | `name`, `direction`, `phone`, `description`, `menu` | `restaurant`
PUT    | /restaurant/:restaurantId/reservation/:reservationId | YES | Client - Admin   | Edit a reservation          | `day`, `hour`, `people`, `phone`, `name` | `reservation`
POST   | /restaurant      | YES   | Admin          | Create restaurant          | `name`, `direction`, `phone`                     | `restaurant`
POST   | /restaurant/:restaurantId/reservation | NO | - | Create a reservation  | `day`, `hour`, `people`, `phone`, `name`, `month`, `year`, `dayOfTheWeek`, `resturant` | `[reservation]`
DELETE | /restaurant/:restaurantId | YES | Admin  |  Delete a restauarnt 
DELETE | /restaurant/:restaurantId/reservation/:reservationId | YES | CLIENT | Delete a reservation |

### Order Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHjn

The Order flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /order           | YES   | Admin - Client | View all order             | -                                               | `[order]`
GET    | /order/:orderId  | YES   | Admin - Client | View one order             | -                                               | `order`
PUT    | /order/:orderId  | YES   | Admin          | Edit a order               | `status`, `deliveryDay`, `deliveryHour`         | `order`
POST   | /order           | YES   | Admin - Client | Create a order             | `address`, `email`                              | `order`
DELETE | /order/:orderId  | YES   | Admin - Client | Delete a order             |                                                 |

### Cart Endpoints
CART: https://documenter.getpostman.com/view/18826957/UVkjvHjj

The Cart flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /cart            | YES   | Client - Admin | View own cart              | -                                               | `cart`
POST   | /cart/:cartId    | YES   | Client - Admin | Add product to the cart    | -                                               | `cart`
DETELE | /cart/:cartId    | YES   | Client - Admin | Detele a product cart      | -                                               | 

### Users Endpoints
POSTMAN: https://documenter.getpostman.com/view/18826957/UVkjvHp7

The Users flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /users           | YES   | Admin          | View all users             | -                                               | `[users]`
PUT    | /users/:userId   | YES   | Admin          | Edit one user role         | `role`                                          | `user`
DETELE | /users/:userId   | YES   | Admin          | Detele one user profile    | -                                               | 






