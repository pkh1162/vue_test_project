import * as types from "./mutation-types";

export const mutations = {
    [types.SIGN_IN] : function(state, user_payload){
        console.log("in sign in mutation");
        state.user = user_payload;
    },
    [types.SIGN_OUT] : function(state){
        state.user = {};
    },
    [types.GET_EVENTS] : function(state, events_payload){
        state.events = events_payload;
    }
} 