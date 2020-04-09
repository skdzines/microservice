# microservice

# run locally
npm install
npm run dev

# run in docker container

change api/routes/index.ts file MongoConnect('mongodb://localhost:27017/user'); to MongoConnect('mongodb://mongo:27017/user');

Run 'docker-compose up'
