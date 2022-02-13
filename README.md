# Proyecto2


## API Endpoints

All API Request must be prepended with `/api/`

### Authentication Endpoints

The Authentication flow for the application is:
 
METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | -              | User Signup                |                                                 | `token`
POST   | /auth/login      | -     | -              | User Login                 |                                                 | `token`
GET    | /auth/check      | YES   | -              | Check Token                |                                                 | '?'

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
POST   | /profile/address | YES   | Client - Admin | Create a direction         | 'street', 'zip', 'city', 'name', 'surname', 'country', 'province', 'phone' | address
DELETE | /profile         | YES   |     Client     | Delete own profile         |                                                 |


### TakeAway Endpoints

The Takeaway flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /takeaway        | NO    | -              | View all takeaway          | -                                               | [product]
GET    | /takeaway/:takeawayId | NO | -             | View one takeaway          | -                                               | product
GET    | /takeaway=:type  | NO    | -              | View all takeaway one type | -      ??                                       | [product]
PUT    | /takeaway/:takeawayId | YES | Admin        | Edit one takeaway          | 'name', 'price', 'description', 'photo', 'cookingTime' type' | product
POST   | /takeaway        | YES   | Admin          | Create a takeaway          | 'name', 'price', 'description', 'photo', 'cookingTime' type' | product
DELETE | /takeaway/:takeawayId | YES | Admin        | Delete a takeaway      

### Experience Endpoints

The Experience flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /experience      | NO    | -              | View all experience        | -                                               | [experience]
GET    | /experience/:experienceId | NO | -           | View one experience        | -                                               | experience
PUT    | /experience/:experienceId | YES | Admin      | Edit one experience        | 'name', 'price', 'description', 'photo', 'duration' | experience
POST   | /experience      | YES   | Admin          | Create a experience        | 'name', 'price', 'description', 'photo', 'duration' | experience
DELETE | /experience/:experienceId | YES | Admin      | Delete a expecience        |

### Article Endpoints

The Article flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /article         | NO    | -              | View all article           | -                                               | [article]
GET    | /article/:articleId | NO | -              | View one article           | -                                               | article
PUT    | /article/:articleId | YES | Admin         | Edit one article           | 'name', 'price', 'description', 'photo', 'stock', 'supplier' | article
POST   | /article         | YES   | Admin          | Create a article           | 'name', 'price', 'description', 'photo', 'stock', 'supplier' | article
DELETE | /article/:articleId | YES | Admin         | Delete a article           |

### Restaurant Endpoints

The Restaurant flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /restaurant         | NO    | -           | View all restaurant        | -                                               | [restaurant]
GET    | /restaurant/:restaurantId | NO | -        | View one restauarnt        | -                                               | restauarnt
GET    | /restaurant/:restaurantId/menu | NO | -   | View a restaurant menu     | -                                               | restaurant.menu
GET    | /restaurant/:restaurantId/reservation | NO | - | View all restaurant reservation      | -                                | [reservation]
GET    | /restaurant/:restaurantId/reservation/:reservationId | NO | - | View one restaurant reservation      | -                 | [reservation]
PUT    | /restaurant/:restaurantId | YES | Admin   | Edit a restaurant          | 'name', 'direction', 'phone', 'description', 'menu' | reservation
PUT    | /restaurant/:restaurantId/reservation/:reservationId | YES | Client - Admin   | Edit a reservation          | 'day', 'hour', 'people', 'phone', 'name' | reservation
POST   | /restaurant      | YES   | Admin          | Create restaurant          | 'name', 'direction', 'phone', 'description', 'menu' | restaurant
POST   | /restaurant/:restaurantId/reservation | NO | - | Create a reservation  | 'day', 'hour', 'people', 'phone', 'name'         | [reservation]
DELETE |  /restaurant/:restaurantId | YES | Admin  |  Delete a restauarnt 
DELETE | /restaurant/:restaurantId/reservation/:reservationId | YES | CLIENT | Delete a reservation |

### Order Endpoints

The Order flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /order           | YES   | Admin          | View all order             | -                                               | [order]
GET    | /order/:orderId  | YES   | Admin??        | View one order             | -                                               | order
PUT    | /order/:orderId  | YES   | Admin??        | Edit a order               | 'status', 'date', 'deliveryDay', 'deliveryHpur', 'address'?? | order
POST   | /order           |  YES  | Admin          | Create a order             | 'status', 'date', 'deliveryDay', 'deliveryHpur', 'address'?? | order
DELETE | /order/:orderId  | YES   | Admin          | Delete a order             |

### Cart Endpoints

The Cart flow for the application is:

METHOD | ENDPOINT         | TOKEN |     ROL        |  DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|----------------|----------------------------|-------------------------------------------------|--------------------
GET    | /cart            | YES   | Client - Admin | View own cart              | -                                               | [products]
POST   | /cart/:cartId    | YES   | Client - Admin | Add product to the cart    | ??                                               | ??







