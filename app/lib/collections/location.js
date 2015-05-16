Location = new Mongo.Collection('location');

Location.attachSchema(new SimpleSchema({
  location: {
    type: Object
  },
  "location.coordinates": {
    type: [ Number ],
    decimal: true
  },
  "location.type": {
    type: String,
    defaultValue: 'Point'
  },
  timestamp: {
    type: Number,
    defaultValue: moment.tz("Asia/Kolkatta").unix()
  },
  userId: {
    type: String,
    autoValue: function() {
      return this.userId;
    }
  }
}));

if (Meteor.isServer) {
  Location.allow({
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

  Location.deny({
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
