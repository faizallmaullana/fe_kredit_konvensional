<template>
    <button @click="logOut" type="submit">LogOut</button>
</template>

<script>
export default {
    name: "ProfilePage",

    methods: {
        logOut() {
            localStorage.clear();
            window.location.reload();
        }
    }
}
</script>