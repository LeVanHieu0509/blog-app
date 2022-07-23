const User = require('../../models/User');

class ApiController {
    // [POST] register
    async register(req, res) {
        console.log(req.body);
        //res.status(200).json('ok');
        // User.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({ ERROR: 'ERROR' });
        //     }
        // });

        //Promiss
        User.find({})
            .then((user) => res.json(user))
            .catch(next);
        // try {
        //     const newUser = new User({
        //         username: req.body.username,
        //         email: req.body.email,
        //         password: req.body.password,
        //     });

        //     const user = await newUser();
        //     res.status(200).json(user);
        // } catch (error) {
        //     res.status(500).json(error);
        // }
    }
}
module.exports = new ApiController();
