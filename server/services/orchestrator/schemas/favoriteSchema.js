const {
    gql
} = require("apollo-server");
const axios = require("axios");
const deleteInput = '(_id: ID!, access_token: String) : Data'
const dataWithoutId = `
    image_url: String,
    video_url: String,
    username: String,
    id: String,
    email: String
`
const typeDefs = gql `

    type Data {
        image_url: String,
        video_url: String,
        username: String,
        id: String,
        email: String
        _id: ID
    }

    type Favorite {
        stories: [Data]
        posts: [Data]
        highlights: [Data]
        igtvs: [Data]
    }

    input InputData {
        access_token: String,
        image_url: String,
        video_url: String,
        username: String,
        id: String,
        email: String
    }

    type test {
        name: String,
        id: String
    }

    extend type Query {
        getTest : [test]
        getFavorites (access_token: String): Favorite

        getPosts (access_token: String) : [Data]

        getHighlights (access_token: String) : [Data]

        getStories (access_token: String) : [Data]

        getIgtvs (access_token: String) : [Data]
    }

    extend type Mutation {
        addPost (posts: InputData) : Data
        addHighlight (highlight: InputData) : Data
        addStory (story: InputData) : Data
        addIgtv (igtv: InputData) : Data
        deletePost ${deleteInput}
        deleteHighlight ${deleteInput}
        deleteStory ${deleteInput}
        deleteIgtv ${deleteInput}
    }
`

const uri = 'http://localhost:3003/favorites'
const resolvers = {
    Query: {
        getTest: (_, args) => {
            return [
                {name: 'siapa', id:'123456'},
                {name: 'udin', id:'654321'}
            ]
        },
        getFavorites: async (_, args) => {
            const data = await getFromServer(args, '')
            console.log(data)
            return data
        },
        getPosts: async (_, args) => {
            const data = await getFromServer(args, 'posts')
            return data.posts
        },
        getHighlights: async (_, args) => {
            const data = await getFromServer(args, 'highlights')
            return data.highlights
        },
        getStories: async (_, args) => {
            const data = await getFromServer(args, 'stories')
            return data.stories
        },
        getIgtvs: async (_, args) => {
            const data = await getFromServer(args, 'igtvs')
            return data.igtvs
        }
    },
    Mutation: {
        addPost: async (_, args) => {
            const post = await addToServer(args.posts, 'posts')
            return post.posts
        },
        addHighlight: async (_, args) => {
            const highlight = await addToServer(args.highlight, 'highlights')
            return highlight.highlights
        },
        addStory: async (_, args) => {
            const story = await addToServer(args.story, 'stories')
            return story.stories
        },
        addIgtv: async (_, args) => {
            const igtv = await addToServer(args.igtv, 'igtvs')
            return igtv.igtvs
        },
        deletePost: async (_, args) => {
            const deletedPost = await deleteFromServer(args, 'posts')
            return deletedPost
        },
        deleteHighlight: async (_, args) => {
            const deletedHighlight = await deleteFromServer(args, 'highlights')
            return deletedHighlight
        },
        deleteStory: async (_, args) => {
            const deletedStory = await deleteFromServer(args, 'stories')
            return deletedStory
        },
        deleteIgtv: async (_, args) => {
            const deletedIgtv = await deleteFromServer(args, 'igtvs')
            return deletedIgtv
        }
    }
}

const addToServer = async ({image_url, video_url, username, access_token, id}, type) => {
    const {data} = await axios.post(uri + `/${type}`, {
        image_url,
        video_url,
        id,
        username
    }, {
        headers: {
            access_token
        }
    })
    console.log(data);
    return data
}

const getFromServer = async ({access_token}, type) => {
    const {data} =  await axios.get(uri + `/${type}`, {
        headers: {access_token}
    })
    return data
}

const deleteFromServer = async ({_id, access_token}, type) => {
    const {data} = await axios.delete(`${uri}/${_id}/${type}`, {
        headers: {access_token}
    })
    return data
}

module.exports = {
    typeDefs,
    resolvers
}