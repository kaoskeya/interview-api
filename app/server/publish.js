/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish("items", function() {
	return Item.find({ userId: this.userId });
});

Meteor.publish("location", function() {
	return Location.find({ userId: this.userId }, { sort: { timestamp: -1 }, limit: 1 });
});