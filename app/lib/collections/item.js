Item = new Mongo.Collection('item');

Item.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  userId: {
    type: String,
    autoValue: function() {
      return this.userId;
    }
  }
}));

if (Meteor.isServer) {
  Item.allow({
    insert: function (userId, doc) {
      return userId != null;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Item.deny({
    insert: function (userId, doc) {
      return userId == null;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
