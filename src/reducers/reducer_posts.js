import _ from 'lodash';
import { FETCH_POSTS } from '../actions/';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      //action.payload.data: 'action creators' produce an 'action' object.  
      //On the 'action' that we returned from the action creator, there was a 'payload' property.
      // The payload in this case was an ajax request.
      // Axios will always place the response from the server on the 'data' property,
      //so in total its action.payload.data
    default:
      return state;
  }
}
