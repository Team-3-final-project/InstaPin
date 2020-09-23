import {gql} from '@apollo/client'

export const GET_NAME = gql `
query getTest {
  getTest {
    name,
    id
  }
}

`

export const FETCH_POSTS = gql `
query getPosts($access_token : String) {
    getPosts (access_token: $access_token)
    {
        email,
        _id,
        image_url,
        video_url,
        username,
        id
    }
  }

`

export const FETCH_ALL = gql `

query getFavorites ($access_token : String) {
    getFavorites (access_token: $access_token)
    {
      stories {
        email
        _id
        image_url
        video_url
        username
        id
      }
      highlights{
        email
        _id
        image_url
        video_url
        username
        id
      }
      posts{
        email
        _id
        image_url
        video_url
        username
        id
      }
      igtvs{
        email
        _id
        image_url
        video_url
        username
        id
      }
    }
  }

`

// export const FETCH_HIGHLIGHTS = gql `


// `

// export const FETCH_STORIES = gql `


// `

// export const FETCH_IGTVS = gql `


// `