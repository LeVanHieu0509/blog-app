const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        excerpt: {
            type: String,
            require: true,
        },
        slug: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        featuredImage: {
            type: String,
            require: true,
        },
        createAt: {
            type: Date,
            default: Date.now,
        },
        updateAt: {
            type: Date,
            default: Date.now,
        },
        // username: {
        //     type: String,
        //     require: true,
        // },
        // categories: {
        //     type: Array,
        //     require: false,
        // },
    },
    { timestamps: true },
);

module.exports = mongoose.model('post', PostSchema);
