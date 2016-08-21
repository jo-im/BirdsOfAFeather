import {addProductCommRate} from './productAddCommRate';
import {getproduct} from './productGet';
import {saveNewProduct} from './productSet';
import {addUserFollowing} from './userAddFollowing';
import {confirmUser} from './userGet';
import {getAllUsersFollows} from './userGetFollowing';
import {getAllUsersProducts} from './userGetProducts';
import {removeUserFollowing} from './userRemoveFollow';
import {setNewUser} from './userSet';
import {setUserUpdate} from './userUpdate';

export const dbControllers = {
  followsSetAdd: addUserFollowing,
  followsSetRemove: removeUserFollowing,
  followsGetAll: getAllUsersFollows,
  productSetAdd: saveNewProduct,
  productSetCommRate: addProductCommRate,
  userSetNew: setNewUser,
  userSetUpdate: setUserUpdate,
  userGetProduct: getAllUsersProducts,
  userGetOne: confirmUser
};
