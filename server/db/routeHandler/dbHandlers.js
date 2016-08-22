import {dbControllers} from '../controllers/dbControllers';
import Promise from 'bluebird';

const dbHandlers = {};

////////////////////////////////////
/////// FOLLOWING ENDPOINTS ////////
////////////////////////////////////
dbHandlers.addNewFollowing = (req, res) => {
  let userId = req.body.facebookId;
  let followsId = req.body.id;

  Promise.all([
    dbControllers.userGetOne(userId),
    dbControllers.userGetOne(followsId)
  ]).then((data) => {
    dbControllers.followsSetAdd(data[0], data[1]);
  }).then((following) => {
    res.send(following);
  }).catch((err) => {
    console.log('Error in adding a new user from handler');
    res.send(err);
  });
};

dbHandlers.removeFollowing = (req, res) => {
  let userId = req.body.facebookId;
  let followsId = req.body.id;

  Promise.all([
    dbControllers.userGetOne(userId),
    dbControllers.userGetOne(followsId)
  ]).then((data) => {
    dbControllers.followsSetRemove(data[0], data[1]);
  }).then((follows) => {
    res.send(follows);
  }).catch((err) => {
    console.log('Error in adding a new user from handler');
    res.send(err);
  });
};

dbHandlers.getAllFollows = (req, res) => {

};

////////////////////////////////////
///////// PRODUCT ENDPOINTS ////////
////////////////////////////////////
dbHandlers.addNewProduct = (req, res) => {

};

dbHandlers.addProductComment = (req, res) => {

};

dbHandlers.getAllUsersProducts = (req, res) => {
  let facebookId = req.body.facebookId;

  Promise.all([
    dbControllers.userGetOne(facebookId)
  ]).then((foundUser) => {
    getAllUsersProducts(foundUser[0]);
  }).then((products) => {
    res.send(products);
  }).catch((err) => {
    console.log('Error in getting user products from handler');
    res.send(err);
  });
};

////////////////////////////////////
////////// USER ENDPOINTS //////////
////////////////////////////////////
dbHandlers.addNewUser = (req, res) => {
  Promise.all([
    dbControllers.userSetNew(req)
  ]).then((newUser) => {
    res.send(newUser[0]);
  }).catch((err) => {
    console.log('Error in adding a new user from handler');
    res.send(err);
  });
};

dbHandlers.updateUser = (req, res) => {

};

dbHandlers.confirmUser = (req, res) => {

};

////////////////////////////////////
////////////// EXPORTS /////////////
////////////////////////////////////
export default dbHandlers;
