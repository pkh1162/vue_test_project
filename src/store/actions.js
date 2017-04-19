import * as types from "./mutation-types";

export const signIn = ({commit}, user_payload) => {
    console.log("in sign in action");
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT);
}

export const getEvents = ({commit}, events_payload) => {
    commit(types.GET_EVENTS, events_payload);
}