const Favorite = require('../model/Favorite.js')

class favoriteController {
    static async getFavorite (req,res,next) {
        try {
            const {id, type} = req.params
            const favorite = await Favorite.getFavorite(type, id)
            if(!favorite) {
                return next({errCode: 'NOT_FOUND'})
            }
            res.status(200).json(favorite)
        }
        catch (err) {
            next(err)
        }
    }

    static async getInstagramByType (req,res,next) {
        try {
            const {type} = req.params
            const {email} = req.userLogin
            const igs = await Favorite.getInstagrams(type, email)
            res.status(200).json({[type]: igs})
        }
        catch (err) {
            next(err)
        }
    }

    static async getFavorites (req,res,next) {
        try{
            const {email} = req.userLogin
            const favorites = await Favorite.getFavorites(email)
            res.status(200).json(favorites)
        }
        catch(err) {
            next(err)
        }
    }

    static async addFavorite (req,res,next) {
        try {
            const {url} = req.body
            const {type} = req.params
            const {email} = req.userLogin
            const addedToFavorite = await Favorite.addFavorite(type, {
                url,
                email
            })
            res.status(201).json({[type]: addedToFavorite.ops[0]})
        }
        catch(err){
            next(err)
        }
    }

    static async updateFavorite (req,res,next) {
        try {
            const {type, url} = req.body
            const {id} = req.params
            const updatedFavorite = await Favorite.updateFavorite(type, id, url)
            res.status(200).json(updatedFavorite.value)
        }
        catch(err) {
            next(err)
        }
    }

    static async deleteFavorite (req,res,next) {
        try {
            const {id, type} = req.params
            const deleteFavorite = await Favorite.deleteFavorite(type, id)
            if(!deleteFavorite || !deleteFavorite.value) {
                return next({errCode: 'NOT_FOUND'})
            }
            res.status(200).json(deleteFavorite.value)
        }
        catch(err) {
            next(err)
        }
    }

}

module.exports = favoriteController