<template>
    <div class="">
        <h3>Add Event <input type="checkbox" v-model="showForm" /></h3>
        
            <div clas="form" v-if="showForm">
                <div class="form-group">   
                    <label>Title</label>
                    <input class="form-control" type="text" name="title" v-model="event.title">     
                </div>
                <div class="form-group">   
                    <label>Decription</label>
                    <input class="form-control" type="text" name="description" v-model="event.description">     
                </div>
                <div class="form-group">   
                    <label>Date</label>
                    <input class="form-control" type="date" name="date" v-model="event.date">     
                </div>
                <div class="form-group">   
                    <label>Location</label>
                    <input class="form-control" type="text" name="location" v-model="event.location">     
                </div>
                <button class="btn btn-sm btn-primary" @click="addEvent">Add Event</button>
            </div>
        
    </div>

</template>


<script>
    import {eventsRef} from "../firebaseApp.js";
    
    export default {
        data : function(){
            return {
                event : {
                    title : "",
                    description : "",
                    date : "",
                    location : "",
                    email : this.$store.state.user.email
                },
                showForm : false
            }
        },
        methods : {
            addEvent : function(){
                //this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event);
            }
        }
    }
    
</script>