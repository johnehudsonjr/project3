const mongoose = require('./connection')
const Find = require('../models/Find')
const Thrift= require('../models/Thrift')

Find.deleteMany({})
    .then(() => {
        return Find.create(
                [{
                        username: "Sonny",
                        budget: "$0",
                        description: "I want Gucci",
                        image: "https://media.gucci.com/style/White_South_0_160_470x470/1540225810/546073_DIR20_1000_002_100_0000_Light.jpg"
                    },
                    {
                        username: "Harry",
                        budget: "$20",
                        description: "Have you seen this black hat?",
                        image: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/57e09c41ad61412bbb2fa89e0111739c_9366/Saturday_Hat_Black_BH9346_01_standard.jpg"
                    },
                    {
                        username: "Sammy",
                        budget: "$200",
                        description: "I am looking for Louis Vuitton!",
                        image: "https://mercari-images.akamaized.net/photos/m34703861530_1.jpg?1549482233"
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
                location: "Buckhead"
            },
            {
                store: "Goodwill",
                description: "Found a really cool shirt here",
                location: "East Atlanta"
            },
            {
                store: "Thrift City",
                description: "Very Clean!",
                location: "Seattle"
            }
        ]
            ).then((newThrifts) => {
                console.log(newThrifts, "Good")

            })

            .then(() => mongoose.connection.close())
    })



            