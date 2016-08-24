var expect = require('chai').expect;
var Users = require('../../server-dist/db/models/userModel').Users;
var Products = require('../../server-dist/db/models/productModel').Products;

describe('Postgres unit tests', function() {
  this.timeout(10000);

  describe('Postgres User Model unit tests', function() {
    var options = { 
      where: {
        username: 'Substantial Flock',
        email: 'subflock@mail.com',
        facebookId: '999999999',
        profilePictUrl: 'http://somewhere.com/picture.jpg',
        allergies: ['eggs', 'milk', 'soy'],
        diets: ['vegan'],
      }
    };

    // beforeEach((done) => { 
    //   Users.findOrCreate(options).then(() => done())
    //   .catch((err) => console.log('error is', err));
    // });

    // afterEach((done) => {
    //   Users.destroy(options).then(() => done())
    //   .catch((err) => console.log('error is', err));
    // });

    it('should retrieves all users', (done) => {
      Users.findAll()
      .then((users) => {
        expect(users).to.be.an('array');
        done();
      })
      .catch((err) => console.log('error is', err));
    });

    it('should retrieve each user as an object', (done) => {
      Users.findAll()
      .then((users) => {
        expect(users[0]).to.be.an('object');
        done();
      })
      .catch((err) => console.log('error is', err));
    });

    it('should get the user\'s name given a facebook Id', (done) => {
      Users.findOne({where: {facebookId: '999999999'}})
      .then((user) => {
        expect(user.dataValues.username).to.equal('Substantial Flock');
        done();
      })
      .catch((err) => console.log('error is', err));
    });

    it('should return null when searching for a user that does not exist', (done) => {
      Users.findOne({ where: {facebookId: '8474837494784'}})
      .then((user) => {
        expect(user).to.equal(null);
        done();
      })
      .catch((err) => console.log('error is', err));
    });
  });

  describe('Postgres Product Model unit tests', function() {
    var options = { 
      where: {
        upc: '999999999',
        // upc: '999999999',
        refreshTime: new Date(),
        foodFacts: {}
      }
    };

    beforeEach((done) => { 
      Products.findOrCreate(options)
      .then(() => done())
      .catch((err) => console.log('error is', err));
    });

    afterEach((done) => {
      Products.destroy({where: {upc: '999999999'}})
      // Products.destroy({where: {upc: '999999999'}})
      .then(() => done())
      .catch((err) => console.log('error is', err));
    });

    it('should create an entry in the database', (done) => {
      Products.findOrCreate(options)
      .then(() => done())
      .catch((err) => console.log('error is', err));
    });

    it('should retrieves all products', (done) => {
      Products.findAll().then((products) => {
        expect(products).to.be.an('array');
        done();
      })
      .catch((err) => console.log('error is', err));
    });

    it('should get a product given a valid UPC', (done) => {
      Products.findOne({where: {upc: '999999999'}})
      .then((product) => {
        expect(product.dataValues.foodFacts).to.be.an('object');
        done();
      });
    });

    it('should return null given an invalid UPC', (done) => {
      Products.findOne({where: {upc: '0'}})
      .then((product) => {
        expect(product).to.equal(null);
        done();
      });
    });    

  });

});
