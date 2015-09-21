if (Posts.find().count() === 0 ) {
  var now = new Date().getTime();

  //seed users
  var donaldTrumpId = Meteor.users.insert({
    profile: {name: 'Donald Trump'}
  });

  var donaldTrump = Meteor.users.findOne(donaldTrumpId);

  var bobDoleId = Meteor.users.insert({
    profile: {name: 'Bob Dole'}
  });

  var bobDole = Meteor.users.findOne(bobDoleId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: bobDole._id,
    author: bobDole.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now -7 * 3600 * 1000)
  });

  Comments.insert({
    postId: telescopeId,
    userId: donaldTrump._id,
    author:donaldTrump.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "interesting thing you did."
  });

  Comments.insert({
    postId: telescopeId,
    userId: bobDole._id,
    author: bobDole.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: donaldTrump._id,
    author: donaldTrump.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: donaldTrump._id,
    author: donaldTrump.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000)
  });

}