<template>
    <div class="">
        <h3>Sign Up</h3>

        <div class="form-inline">
            <div class="form-group">
                <input class="form-control" type="email" placeholder="email" v-model="email"/>
               
                <input class="form-control" type="password" placeholder="password" v-model="password"/>
           
                <button type="button" @click="signUp(email, password)" class="btn btn-primary">Sign Up</button>
            </div>            
        </div>
        <br/>
        <br/>
        <p>{{error.message}}</p>
        <br/>
        
        <router-link to="/signin">Already a user? Sign in here</router-link>
    </div>    
</template>

<script>
    import {firebaseApp} from "../firebaseApp.js";

    export default {
        data : function(){
            return {
                email : "",
                password : "",
                error : {
                    message : ""
                }
            }
        },
        methods : {
            signUp(){
                firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(err => this.error = err);
            }
        }    
    }
    
</script>