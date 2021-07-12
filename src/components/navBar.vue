<template>
    <b-navbar
        type="dark"
        variant="dark"
        toggleable="lg"
        class="nav"
    >
        <b-container>
            <b-navbar-brand href="#" @click="goPage('/')">
                <img
                    src="../assets/logo.jpg"
                    class="cat-logo"
                    alt="logo"
                />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="程式作品" right>
                        <b-dropdown-item
                            v-for="link in links"
                            :key="`link${link.path}`"
                            @click="goPage(link.path, link.isLink)"
                        >
                            {{ link.label }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item @click="goPage('/art')">美術作品</b-nav-item>
                    <b-nav-item @click="goPage('/about')">關於作者</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters({
            links: 'getLinkList'
        })
    },
    methods: {
        goPage(path, isLink = false) {
            if (isLink) {
                window.open(path);
                return;
            }

            if (this.$route.path === path) {
                return;
            }
            this.$router.push(path);
        }
    }
};

</script>

<style lang="scss" scoped>
    .cat-logo {
        width: 30px;
    }
</style>
