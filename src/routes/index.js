const authRouter = require('./auth');
const postsRouter = require('./posts');
const thuattoanRouter = require('./thuattoan');
const dynamicArrayRouter = require('./dynamicArray');

function route(app) {
    app.use('/posts', postsRouter);
    app.use('/thuattoan', thuattoanRouter);
    app.use('/dynamicArray', dynamicArrayRouter);

    app.use('/api', authRouter);
}
module.exports = route;
