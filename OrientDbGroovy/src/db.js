ogm = require('ogm')


var server = ogm.connect({
    host: 'localhost',
    port: 2480,
    username: 'root',
    password: 'root'
});

var db = ogm.use('db');
console.log('Using database: ' + db.name);
