'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('test', {
    payment_id: {
      type: 'int',
      primaryKey: true
    },
    payment_name: {
      type: 'string',
      length: 50
    },
    token: {
      type: 'string',
      length: 50
    },
    user_id_fk: {
      type: 'string',
      length: 50,
      foreignKey: {
        name: 'paymentMethod_user_fk',
        table: 'user',
        mapping: 'user_id'

      }
    },
    profile_pic: {
      type: 'string',
      length: 100
    }
  }, done);};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
