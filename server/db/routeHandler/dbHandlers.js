import {dbControllers} from '../controllers/dbControllers';
import Promise from 'bluebird';

const dbHandlers = {};

////////////////////////////////////
/////// FOLLOWING ENDPOINTS ////////
////////////////////////////////////
dbHandlers.addNewFollowing = (req, res) => {

};

dbHandlers.removeFollowing = (req, res) => {

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
  });
};

////////////////////////////////////
////////// USER ENDPOINTS //////////
////////////////////////////////////
dbHandlers.addNewUser = (req, res) => {

};

dbHandlers.updateUser = (req, res) => {

};

dbHandlers.confirmUser = (req, res) => {

};

////////////////////////////////////
////////////// EXPORTS /////////////
////////////////////////////////////
export default dbHandlers;
