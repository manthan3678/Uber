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
