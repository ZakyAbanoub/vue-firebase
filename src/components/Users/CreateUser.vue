<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Email</label>
                <input v-model="email" type="email" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Create User</button>
        </form>
    </div>
</template>


<script>
// import { create } from "@/firebase";
import axios from 'axios'
export default {
    data() {
        return {
            name: "",
            email: "",
        };
    },
    emits: ["doSearch"],
    methods: {
        async onSubmit() {
            await axios.post('https://vue-firebase-1822a-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
                name: this.name,
                email: this.email
            })
            this.$emit("doSearch", true);
            this.name = "";
            this.email = "";
            // console.log("DONE");
        },
    },
};
</script>
