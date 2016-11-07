import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('dz', function(dz) {
  return Dz.find({_id: dz});
});