const authRouter = require('./auth');
const postsRouter = require('./posts');
const thuattoanRouter = require('./thuattoan');

function route(app) {
    app.use('/posts', postsRouter);
    app.use('/thuattoan', thuattoanRouter);
    app.use('/api', authRouter);
}
module.exports = route;
