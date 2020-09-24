const db = require('../config/mongo.js')
const {ObjectId} = require('mongodb')
const Stories = db.collection('Stories')
const Highlights = db.collection('Highlights')
const IgTvs = db.collection('IgTvs')
const Posts = db.collection('Posts')

class Favorite {
    static async getFavorites (email) {
        const stories = await this.getter('stories', email)
        const highlights = await this.getter('highlights', email)
        const igtvs = await this.getter('igtvs', email)
        const posts = await this.getter('posts', email)
        return {
            stories,
            highlights,
            igtvs,
            posts
        }
    }

    static async getter (type, email) {
        switch (type) {
            case 'stories':
                return  await Stories.find({email}).toArray();
            case 'highlights':
                return await Highlights.find({email}).toArray();
            case 'igtvs':
                return await IgTvs.find({email}).toArray();
            case 'posts':
                return await Posts.find({email}).toArray();
            default:
                throw ({errCode: 'NOT_FOUND'})
        }
    }

    static async getInstagrams (type, email) {
        return this.getter(type,email)
    }

    static async getFavorite (type, id) {
        switch (type) {
            case 'posts':
                return await Posts.findOne({
                    _id: ObjectId(id)
                })
            case 'stories':
                return await Stories.findOne({
                    _id: ObjectId(id)
                })
            case 'highlights':
                return await Highlights.findOne({
                    _id: ObjectId(id)
                })
            case 'igtvs':
                return await IgTvs.findOne({
                    _id: ObjectId(id)
                })
            default:
                throw ({errCode: 'NOT_FOUND'})
            }
    }

    static async addFavorite (type, newFavorite) {
        switch (type) {
            case 'posts':
                return await Posts.insertOne(newFavorite)
            case 'stories':
                return await Stories.insertOne(newFavorite)
            case 'highlights':
                return await Highlights.insertOne(newFavorite)
            case 'igtvs':
                return await IgTvs.insertOne(newFavorite)
            default:
                throw ({errCode: 'NOT_FOUND'})
        }
    }

    static async deleteFavorite (type, id) {
        switch (type) {
            case 'posts':
                return await Posts.findOneAndDelete({
                    _id: ObjectId(id)
                })
            case 'stories':
                return await Stories.findOneAndDelete({
                    _id: ObjectId(id)
                })
            case 'highlights':
                return await Highlights.findOneAndDelete({
                    _id: ObjectId(id)
                })
            case 'igtvs':
                return await IgTvs.findOneAndDelete({
                    _id: ObjectId(id)
                })
            default:
                throw ({errCode: 'NOT_FOUND'})
        }
    }

}

module.exports = Favorite