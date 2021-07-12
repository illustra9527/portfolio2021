<template>
    <div>
        <nav-bar />
        <router-view />
    </div>
</template>

<script>
import navBar from './navBar';

export default {
    components: {
        navBar
    }
};
</script>

<style lang="scss" scoped>

</style>
