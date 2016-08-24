import {addProductCommRate} from './productAddCommRate';
import {getProduct} from './productGet';
import {saveNewProduct} from './productSet';
import {addUserFollowing} from './userAddFollowing';
import {confirmUser} from './userGet';
import {getAllUsersFollows} from './userGetFollowing';
import {getAllUsersProducts} from './userGetProducts';
import {removeUserFollowing} from './userRemoveFollow';
import {setNewUser} from './userSet';
import {setUserUpdate} from './userUpdate';
import {setProductUpdate} from './productUpdate';

export const dbControllers = {
  followsSetAdd: addUserFollowing,
  followsSetRemove: removeUserFollowing,
  followsGetAll: getAllUsersFollows,
  productSetAdd: saveNewProduct,
  productSetCommRate: addProductCommRate,
  productSetUpdate: setProductUpdate,
  productGetOne: getProduct,
  userSetNew: setNewUser,
  userSetUpdate: setUserUpdate,
  userGetProduct: getAllUsersProducts,
  userGetOne: confirmUser
};
