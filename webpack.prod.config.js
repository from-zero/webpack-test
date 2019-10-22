const path = require('path')
module.exports = {
    // entry:'./src/index.js',
    entry:{
        main:'./src/index.js',
        login:'./src/login.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name]_[chunkhash].js'
    },
    mode:'production'
}