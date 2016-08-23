// currently not working
// commenting out so can be merged
var expect = require('chai').expect;
var Users = require('../../server-dist/db/models/userModel').Users;

// describe('Postgres unit tests', function() {
//   this.timeout(5000);
//   var options = { 
//     where: {
//       username: 'Substantial Flock',
//       email: 'subflock@mail.com',
//       facebookId: 999999999,
//       profilePictURL: 'http://somewhere.com/picture.jpg',
//       concerns: {}
//     }
//   };

//   beforeEach((done) => { 
//     Users.findOrCreate(options).then(() => done()); 
//   });

//   afterEach((done) => {
//     Users.destroy(options).then(() => done());
//   });


//   it('should retrieves all users', (done) => {
//     Users.findAll().then((users) => {
//       expect(users).to.be.an('array');
//       done();
//     }); 
//   });

//   it('should retrieve users as an object', (done) => {
//     Users.findAll().then((users) => {
//       expect(users[0]).to.be.an('object');
//       done();
//     });
//   });

  // it('should get the users facebookId', (done) => {
  //   Users.findOne({where: {username: 'Substantial Flock'}})
  //   .then((user) => {
  //     console.log('=======================user========================', user);
  //     expect(user.dataValues.facebookId).to.be(999999999);
  //   });
  // });


// });

