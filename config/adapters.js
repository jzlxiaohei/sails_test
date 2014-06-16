module.exports.adapters = {
  'default': 'mysql',

  mysql: {
    module   : 'sails-mysql',
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '123456',
    database : 'sails_test'

    // OR (explicit sets take precedence)
    //module   : 'sails-mysql',
    //url      : 'mysql2://USER:PASSWORD@HOST:PORT/DATABASENAME'
  }
};