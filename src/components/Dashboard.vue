<template>
    <div class="">
        <h3>Events Dashboard</h3>
        <button class="btn btn-danger btn-sm sign-out-btn" @click="signOut" type="button">Sign Out</button>

        <hr>
        <AddEvent/>
        <hr>

        <div class="col-md-12">
            <EventItem v-for="(event_item, index) in $store.state.events" :event="event_item" key="index"/>
            
        </div>
    </div>
</template>

<script>
    import { firebaseApp, eventsRef } from "../firebaseApp.js";
    import AddEvent from "./AddEvent.vue";
    import EventItem from "./EventItem.vue";

    export default {
        methods : {
            signOut : function(){
                this.$store.dispatch("signOut");
                firebaseApp.auth().signOut();     
            }
        },
        components : {
            AddEvent,
            EventItem
        },
        mounted(){
            eventsRef.on("value", snap => {
                let events = [];
                snap.forEach(event => {
                    events.push(event.val());
                })

                this.$store.dispatch("getEvents", events) //dispatches to action, which gets passed to mutations, which changes state
            })
        }
    }
</script>