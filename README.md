# Test API for an interview #


### Register ###

Go to / in browser and create an account.

## Mobile app ##

### Login endpoint ###

/users/login

#### Request ####

{
	"email": <your-email>,
	"password": <your-password>
}

#### Response ####
// successful response, with HTTP code 200
{
  token: "string",
  tokenExpires: "ISO encoded date string",
  id: "user id"
}

// error response, with HTTP code 500
{
  error: "error-code",
  reason: "Human readable error string"
}


Store the token and send it in the header for authenticated requests.

Authorization: Bearer <token>

### Items endpoint ###

/item

#### Request ####

{
	"name": "test name",
	"description": "as dasd asd asd as",
	"price": 123 
}

#### Response ####


// successful response, with HTTP code 200


// error response
{
	error: 400
	reason: "INVALID"
	details: <details-of-the-error-in-JSON>
}

