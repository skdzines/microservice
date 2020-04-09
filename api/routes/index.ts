import express from 'express';
import mongoose from 'mongoose';
import MongoConnect from '../mongoConnect';

const userRoutes = express.Router();

MongoConnect('mongodb://localhost:27017/user');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    firstName: String,
    lastName: String
}, {collection: 'user-data'});

const UserData = mongoose.model('User', userDataSchema);

userRoutes.get('/api/user', async (req, res, next) => {
    try {
        let users = await UserData.find({});
        res.send(users);
    } catch(err) {
        res.status(500);
        res.end();
        console.error(err);
    }
});

userRoutes.post('/api/user', async (req, res, next) => {
    try {
        const user = new UserData(req.body);
        await user.save();
        let users = await UserData.find({});
        res.send(users);
        res.end();
    } catch(err) {
        res.status(500);
        res.end();
        console.error(err);
    }
});

userRoutes.put('/api/user', async (req, res, next) => {
    try {
        const id = req.body.id;
        await UserData.findByIdAndUpdate(id, {firstName: req.body.firstName, lastName: req.body.lastName});
        let users = await UserData.find({});
        res.send(users);
        res.end();
    } catch(err) {
        res.status(500);
        res.end();
        console.error(err);
    }
});

userRoutes.delete('/api/user', async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(`ID: ${id}`);
        await UserData.findByIdAndDelete(id);
        let users = await UserData.find({});
        res.send(users);
        res.end();
    } catch(err) {
        res.status(500);
        res.end();
        console.error(err);
    }
});


export default userRoutes;