if (process.env.NODE_ENV == "production") {

    module.exports = {mongoURI: "mongodb://mongo:Y9NHV4p3U1epBr80RBN3@containers-us-west-130.railway.app:7166"}

} else {

    module.exports = {mongoURI: "mongodb://localhost:27017/TCC"}

}
