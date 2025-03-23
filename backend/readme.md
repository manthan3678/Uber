# /user/register Endpoint Documentation

**Description:**  
This endpoint registers a new user.

**Method:** POST  
**URL:** /user/register

**Request Body:**

- `fullname`: Object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters if provided)
- `email`: (string, required, valid email, minimum 5 characters)
- `password`: (string, required, minimum 6 characters)

**Responses:**

- **200 OK:**  
  Returns a JSON object containing:
  - `token`: JWT token.
  - `userData`: The created user data.
- **400 Bad Request:**  
  Returns a JSON object with validation error details.

**Example Request:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Example Response (200 OK):**

```json
{
  "token": "jwt.token.here",
  "userData": {
    // user details...
  }
}
```

# /user/login Endpoint Documentation

**Description:**  
This endpoint authenticates a user and returns a JWT token upon successful login.

**Method:** POST  
**URL:** /user/login

**Request Body:**

- `email`: (string, required, valid email)
- `password`: (string, required, minimum 6 characters)

**Responses:**

- **200 OK:**  
  Returns a JSON object containing:
  - `token`: JWT token.
  - `userData`: Authenticated user data.
  - `message`: Success message.
- **400 Bad Request:**  
  Returns a JSON object with validation error details.
- **401 Unauthorized:**  
  Returned if the email or password is invalid.

**Example Request:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Example Response (200 OK):**

```json
{
  "token": "jwt.token.here",
  "userData": {
    // user details...
  },
  "message": "Login SuccessFull"
}
```

# /user/profile Endpoint Documentation

**Description:**  
Returns the profile details of the authenticated user.

**Method:** GET  
**URL:** /user/profile  
**Headers:**

- Authorization: Bearer token

**Responses:**

- **200 OK:**  
  Returns a JSON object containing the user profile data.

**Example Response:**

```json
{
  "id": "user_id",
  "firstname": "John",
  "lastname": "Doe"
  // ...other user details...
}
```

# /user/logout Endpoint Documentation

**Description:**  
Logs out the user by clearing the authentication cookie and blacklisting the token.

**Method:** GET  
**URL:** /user/logout  
**Headers:**

- Authorization: Bearer token

**Responses:**

- **200 OK:**  
  Returns a JSON object with a success message.

**Example Response:**

```json
{
  "message": "Logout Success"
}
```

# /captain/register Endpoint Documentation

**Description:**  
Registers a new captain (driver). Note: In this system, "captain" refers to a driver.

**Method:** POST  
**URL:** /captain/register

**Request Body:**

- `fullname`: Object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, required, minimum 3 characters)
- `email`: (string, required, valid email)
- `password`: (string, required, minimum 6 characters)
- `vehicle`: Object containing:
  - `color` (string, required, minimum 3 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (number, required, minimum 1)
  - `vehicleType` (string, required, one of "car", "motorcycle", "auto")

**Responses:**

- **200 OK:**  
  Returns a JSON object containing:
  - `token`: JWT token.
  - `captainData`: Registered captain (driver) details.
- **400 Bad Request:**  
  Returns a JSON object with validation error details.

**Example Request:**

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Example Response (200 OK):**

```json
{
  "token": "jwt.token.here",
  "captainData": {
    // captain (driver) details...
  }
}
```
