const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected database success');
    } catch (error) {
        console.log('connect failture');
    }
}

module.exports = { connect };
