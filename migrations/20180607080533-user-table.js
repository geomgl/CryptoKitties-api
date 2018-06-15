'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, done) {
  db.createTable('user', {
    user_id: {
      type: 'int',
      primaryKey: true
    },
    first_name: {
      type: 'string',
      length: 50
    },
    last_name: {
      type: 'string',
      length: 50
    },
    email: {
      type: 'string',
      length: 50
    },
    profile_pic: {
      type: 'string',
      length: 100
    }
  }, done);
}

exports.down = function (db) {
  db.dropTable('user')
};

exports._meta = {
  "version": 1
};
