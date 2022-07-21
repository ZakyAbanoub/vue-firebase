<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="updateHandler">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Email</label>
                <input v-model="email" type="email" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Update User</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: "",
            age: null,
        };
    },
    methods: {
        async getHandler() {
            //   const player = await get("players", this.$route.params.id);
            const user = await axios.get(`https://vue-firebase-1822a-default-rtdb.europe-west1.firebasedatabase.app/users/${this.$route.params.id}.json`)
            const userData = user.data
            //   this.$emit("doSearch", true);
            this.name = userData.name;
            this.email = userData.email;
        },
        async updateHandler() {
            const updated = {
                name: this.name,
                email: this.email,
            };
            await axios.put(`https://vue-firebase-1822a-default-rtdb.europe-west1.firebasedatabase.app/users/${this.$route.params.id}.json`, updated)
            // await update("players", this.$route.params.id, updated);
            this.$router.push("/users");
        },
    },
    mounted() {
        this.getHandler();
    },
};
</script>
