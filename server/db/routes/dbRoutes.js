import {app} from '../../server';
import {dbHandlers} from '../routeHandler/dbHandlers';

////////// FOLLOWING ENDPOINTS //////////
app.post('/api/follows/add', () => {
  console.log('hi');
});
// app.post('/api/follows/remove', dbHandlers.);
// app.get('/api/follows/allForUser', dbHandlers.);

////////// PRODUCT ENDPOINTS //////////
// app.post('/api/', dbHandlers.);
// app.post('/api/', dbHandlers.);
// app.get('/api/', dbHandlers.);

////////// USER ENDPOINTS //////////
// app.post('/api/user/new', dbHandlers.);
// app.post('/api/user/update', dbHandlers.);
// app.get('/api/user/confirm', dbHandlers.);
