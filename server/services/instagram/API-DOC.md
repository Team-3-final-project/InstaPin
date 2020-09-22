## RESTful endpoints
List of available endpoint:

  - `GET /:user`
  - `GET /story/:user`
  - `GET /highlight/:user`


### GET /:user
_Response (200 - OK)_
```json
  {
    "biography": {
      "id": "id",
      "username": "String",
      "full_name": "String",
      "posts": "Integer",
      "followers": "Integer",
      "following": "Integer",
      "description": "String",
      "external_url": "String",
      "profile_pic": "String",
      "profile_pic_hd": "String"
    },
    "posts": [
      {
          "id": "id",
          "image_url": "String",
          "likes": "Integer",
          "uploaded_at": "Integer"
      },
      {
          "id": "id",
          "video_url": "String",
          "views": "Integer",
          "likes": "Integer",
          "uploaded_at": "Integer"
        },
    ]
  }
```

_Response (404 - Not Found)_
```json
{
  "message": "error Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```
---
### GET /story/:user
_Response (200 - OK)_
```json
[
  {
    "Stories"
  }
]
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```
---
### GET /highlight/:user
_Response (200 - OK)_
```json
  {
    "data": [
      {
        "highlight"
      }
    ],
    "url": "String"
  }
```

_Response (404 - Not Found)_
```json
{
  "message": "error Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```
---
