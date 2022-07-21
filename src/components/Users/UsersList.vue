<template>
    <div class="card mt-4" v-if="isReady">
        <table class="table m-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="`/edit-user/${user.id}`">
                            <button class="btn btn-primary btn-sm me-2">Edit</button>
                        </router-link>
                        <button class="btn btn-danger btn-sm" @click="deleteHandler(user.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            users: [],
        };
    },
    computed: {
        isReady() {
            return this.users && this.users.length;
        },
    },
    methods: {
        async searchAll() {
            this.users = []
            const usersData = await axios.get('https://vue-firebase-1822a-default-rtdb.europe-west1.firebasedatabase.app/users.json')
            const users = usersData.data
            if (users) {
                for (let key in users) {
                    this.users.push({ id: key, name: users[key].name, email: users[key].email })
                }

            } else {
                this.users = []
            }

        },
        async deleteHandler(id) {
            await axios.delete(`https://vue-firebase-1822a-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`)
            await this.searchAll();
        },
    },
    created() {
        this.searchAll();
    },
};
</script>
