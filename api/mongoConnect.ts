import mongoose from 'mongoose';

export default (DB_URI: string) => {
    mongoose.connect(DB_URI, { useNewUrlParser: true })
        .then(() => console.log(`Connected to Mongo: ${DB_URI}`))
        .catch(err => console.error(err));

    mongoose.connection.on('error', (err) => {
        console.error(err);
    });
}