<template>
    <CreateUser @doSearch="reRenderComponent" />
    <UsersList :key="key" />
</template>

<script>
import CreateUser from '../../components/Users/CreateUser.vue'
import UsersList from '../../components/Users/UsersList.vue';
export default {
    name: "Users",
    data() {
        return {
            key: new Date(),
        };
    },
    methods: {
        reRenderComponent() {
            this.key = new Date();
        },
    },
    components: {
        CreateUser,
        UsersList
    }
}
</script>

<style>
</style>