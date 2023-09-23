
## Description

URL Sortening Application using Nest.js and MongoDB

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## APIs

### SignUp
```HTTP
POST http://localhost:3000/auth/signup
{
    "name": "Imrul Kais Khan",
    "email": "my@mail.com",
    "password": "abc321!"
}
```
### Login
```HTTP
GET http://localhost:3000/auth/login

{
    "email": "my@mail.com",
    "password": "abc321!"
}
```

### Shortening URL
```HTTP
POST http://localhost:3000/url-shortner
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.....
{
    "url": "https://www.udemy.com/"
}
```
Copy the url form the response and paste it in the browser. It will redirect to original page. (Need to keep application running in same machine.)

### Custom Shortening
```HTTP
POST http://localhost:3000/custom-shortner
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.....
{
    "longUrl": "https://bikroy.com/",
    "shortId": "my-short-id"
}
```

### Get Analytics
```HTTP
GET http://localhost:3000/analytics
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.....
```

Also `POSTMAN Collection` is included inside the `postman` folder.

## Support

This is an MIT-licensed open source project. 

## Stay in touch

- Author - [Imrul Kais Khan](https://www.linkedin.com/in/imrul-kais-khan/)


## License

Nest is [MIT licensed](LICENSE).
