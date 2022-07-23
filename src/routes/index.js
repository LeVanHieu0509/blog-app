const authRouter = require('./auth');

function route(app) {
    // app.use('/', (req, res) => {
    //     console.log('test server');
    // });

    app.use('/api', authRouter);
}
module.exports = route;
