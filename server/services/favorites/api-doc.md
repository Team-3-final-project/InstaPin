# Favorites


List of available endpoints:
​
- `GET /favorites`
- `POST /favorites/:type`
- `GET /favorites/:type`
- `DELETE /favorites/:id/:type`
- `GET /favorites/:id/type`

### GET /favorites

Request:
Headers
```json
 {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNjAwNjU5MTI0fQ.VYgGtwBJZ_yYJwjL_r2yKCEXcOyJpjh_rPNnWg_siVY"
 }
```

Response:

- status: 200
- body:
  ​

```json
{
    "stories": [
        {
            "_id": "5f68db2479d8c565c00aaf1f",
            "url": "https://th.bing.com/th/id/OIP.F4WTr_Qa87mzOIm1aenvtwHaLG?pid=Api&rs=1",
            "email": "user1@mail.com"
        },
        ...
    ],
    "highlights": [
        {
            "_id": "5f68db903a5c4e65c052488e",
            "url": "https://th.bing.com/th/id/OIP.F4WTr_Qa87mzOIm1aenvtwHaLG?pid=Api&rs=1",
            "email": "user1@mail.com"
        },
        ...
    ],
    "igtvs": [
        {
            "_id": "5f68db903a5c4e65c052488f",
            "url": "https://th.bing.com/th/id/OIP.F4WTr_Qa87mzOIm1aenvtwHaLG?pid=Api&rs=1",
            "email": "user1@mail.com"
        },
        ...
    ],
    "posts": [
        {
            "_id": "5f68d652dd058809bc02168c",
            "url": "https://th.bing.com/th/id/OIP.F4WTr_Qa87mzOIm1aenvtwHaLG?pid=Api&rs=1",
            "email": "user1@mail.com"
        },
        ...
    ]
}
```

- status 401

```json
{
    "message": [
        "Please login first"
    ]
}
```

### POST /favorites/:type

Request:

Headers
```json
 {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNjAwNjU5MTI0fQ.VYgGtwBJZ_yYJwjL_r2yKCEXcOyJpjh_rPNnWg_siVY"
 }
```

Body
```json
{
    "url": "http://1.bp.blogspot.com/-mkYXVt0kLPw/UV8uG5neCiI/AAAAAAAAASY/VeGiKjUyhhU/s1600/Justin+Bieber+Childhood+Picture+(8).jpg"
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "posts": {
        "url": "http://1.bp.blogspot.com/-mkYXVt0kLPw/UV8uG5neCiI/AAAAAAAAASY/VeGiKjUyhhU/s1600/Justin+Bieber+Childhood+Picture+(8).jpg",
        "email": "user1@mail.com",
        "_id": "5f68e05181550971cca16446"
    }
}
```

- status 401

```json
{
    "message": [
        "Please login first"
    ]
}
```

### GET /favorites/:type

Request:

Headers
```json
 {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNjAwNjU5MTI0fQ.VYgGtwBJZ_yYJwjL_r2yKCEXcOyJpjh_rPNnWg_siVY"
 }
```

Response:

- status: 200
- body:
  ​
example for highlights
```json

{
    "highlights": [
        {
            "_id": "5f68deea81550971cca16445",
            "url": "http://1.bp.blogspot.com/-mkYXVt0kLPw/UV8uG5neCiI/AAAAAAAAASY/VeGiKjUyhhU/s1600/Justin+Bieber+Childhood+Picture+(8).jpg",
            "email": "user1@mail.com"
        },
        ...
    ]
}

```

- status 401

```json
{
    "message": [
        "Please login first"
    ]
}
```

### DELETE /favorites/:id/:type

Request:

Headers
```json
 {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNjAwNjU5MTI0fQ.VYgGtwBJZ_yYJwjL_r2yKCEXcOyJpjh_rPNnWg_siVY"
 }
```

Response:

- status: 200
- body:
  ​
```json

{
    "_id": "5f68db903a5c4e65c052488e",
    "url": "http://1.bp.blogspot.com/-mkYXVt0kLPw/UV8uG5neCiI/AAAAAAAAASY/VeGiKjUyhhU/s1600/Justin+Bieber+Childhood+Picture+(8).jpg",
    "email": "user1@mail.com"
}

```

- status 401

```json
{
    "message": [
        "Please login first"
    ]
}
```

### DELETE /favorites/:id/:type

Request:

Headers
```json
 {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNjAwNjU5MTI0fQ.VYgGtwBJZ_yYJwjL_r2yKCEXcOyJpjh_rPNnWg_siVY"
 }
```

Response:

- status: 200
- body:
  ​
```json

{
    "_id": "5f68deea81550971cca16445",
    "url": "http://skjdbkjasbdbaskdbsakjbdkjsadbksajdn ini dari pos",
    "email": "user1@mail.com"
}

```

- status 401

```json
{
    "message": [
        "Please login first"
    ]
}
```