const User = require('./models/users');

User.all().then(users => console.log(users)).catch(err => console.error(err));