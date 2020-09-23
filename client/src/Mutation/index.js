import {gql} from '@apollo/client'
const inputQuery = `
    id: $id,
    image_url: $image_url,
    access_token : $access_token,
    username: $username,
    video_url: $video_url
`

const typeQuery = `
    $id: String,
    $image_url: String,
    $access_token: String,
    $username:String,
    $video_url: String
`
const resultQuery = `
    email,
    _id,
    image_url,
    video_url,
    username,
    id
`


export const ADD_POST = gql `
mutation addPost (${typeQuery}) {
    addPost(posts: {${inputQuery}})
    {
        ${resultQuery}
    }
  }
`

export const ADD_STORY = gql`
mutation addStory (${typeQuery}) {
    addStory (story: {${inputQuery}})
    {
        ${resultQuery}
    }
  }
`

export const ADD_IGTV = gql`
mutation addIgtv(${typeQuery}) {
    addIgtv (igtv: {${inputQuery}})
    {
        ${resultQuery}
    }
  }
`
export const ADD_HIHGHLIGHT =gql `
mutation addHighlight(${typeQuery}) {
    addHighlight (highlight: {${inputQuery}})
    {
        ${resultQuery}
    }
  }
`

const delType = `
    $access_token: String,
    $_id: ID!
`
const delInput = `
  access_token: $access_token,
  _id: $_id
`

const delResult = `
    email,
    _id,
    image_url,
    video_url,
    username,
    id
`
export const DEL_POST = gql `
mutation deletePost (${delType})  {
    deletePost (${delInput})
    {${delResult}}
  }
`

export const DEL_HIGHLIGHT = gql `
mutation deleteHighlight (${delType})  {
    deleteHighlight (${delInput})
    {${delResult}}
  }
`

export const DEL_IGTV = gql `
mutation deleteIgtv (${delType})  {
    deleteIgtv (${delInput})
    {${delResult}}
  }
`

export const DEL_STORY = gql `
mutation deleteStory (${delType})  {
    deleteStory (${delInput})
    {${delResult}}
  }
`