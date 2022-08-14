const authRouter = require('./auth');
const postsRouter = require('./posts');

function route(app) {
    app.use('/posts', postsRouter);
    app.use('/api', authRouter);
}
module.exports = route;
