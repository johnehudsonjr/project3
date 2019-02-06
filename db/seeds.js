const mongoose = require('./connection')
const Find = require('../models/Find')
const Thrift= require('../models/Thrift')

Find.deleteMany({})
    .then(() => {
        return Find.create(
                [{
                        username: "johnny",
                        budget: "50",
                        description: "I want Gucci",
                        image: "https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg"
                    },
                    {
                        username: "johnny",
                        budget: "50",
                        description: "I want Gucci",
                        image: "https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg"
                    },
                    {
                        username: "johnny",
                        budget: "50",
                        description: "I want Gucci",
                        image: "https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg"
                    }
                
                ]
            ).then((newFinds) => {
                console.log(newFinds, "Good")

            })

            .then(() => mongoose.connection.close())
    })

    Thrift.deleteMany({})
    .then(() => {
        return Thrift.create(
            [{
                store: "Value Village",
                description: "Best for shoes",
                location: "Seattle"
            },
            {
                store: "Value Village",
                description: "Best for shoes",
                location: "Seattle"
            },
            {
                store: "Value Village",
                description: "Best for shoes",
                location: "Seattle"
            }
        ]
            ).then((newThrifts) => {
                console.log(newThrifts, "Good")

            })

            .then(() => mongoose.connection.close())
    })



            