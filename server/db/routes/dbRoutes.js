import {app} from '../../server';
import dbHandlers from '../routeHandler/dbHandlers';

export default function(app) {
  ////////// FOLLOWING ENDPOINTS //////////
  app.post('/api/follows/add', dbHandlers.addNewFollowing);
  app.post('/api/follows/remove', dbHandlers.removeFollowing);
  app.get('/api/follows/allForUser', dbHandlers.getAllFollows);

  ////////// PRODUCT ENDPOINTS //////////
  app.post('/api/product/addNew', dbHandlers.addNewProduct);
  app.post('/api/product/addComm', dbHandlers.addProductComment);
  app.get('/api/product/allForUser', dbHandlers.getAllUsersProducts);

  ////////// USER ENDPOINTS //////////
  app.post('/api/user/new', dbHandlers.addNewUser);
  app.post('/api/user/update', dbHandlers.updateUser);
  app.get('/api/user/confirm', dbHandlers.confirmUser);
}
