<template>
    <div class="home-wrap">
        <div class="top-info">
            <img
                class="avatar"
                src="../assets/img/avatar.jpg"
                alt="avatar"
            />
        </div>
        <b-container class="home-content">
            <h2>嗨</h2>
            <div class="content-text">
                我是 Joy! 是個前端工程師。
                <b-button
                    variant="outline-info"
                    class="button"
                    @click="$router.push('/about')"
                >
                    關於我
                </b-button>
            </div>
            <h2>個人作品</h2>
            <b-row class="cards">
                <b-col
                    v-for="(link, index) in links"
                    :key="`link-${index}`"
                    cols="12"
                    md="6"
                    xl="4"
                >
                    <b-card
                        :title="link.label"
                        :img-src="require(`@/assets/img/card/${link.img}.png`)"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="card"
                    >
                        <b-card-text>
                            {{ link.content }}
                            <b-button
                                variant="outline-info"
                                class="button"
                                @click="goPage(link.isLink, link.path)"
                            >
                                前往
                            </b-button>
                            <img
                                v-if="link.isLink"
                                class="github"
                                src="../assets/img/github.png"
                                alt="github-link"
                                @click="goPage(link.isLink, link.github)"
                            />
                        </b-card-text>
                    </b-card>
                    <b-col />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
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
        goPage(isLink, path) {
            if (isLink) {
                window.open(path);
                return;
            }
            this.$router.push(path);
        }
    }

};
</script>

<style lang="scss" scoped>
.home-wrap {
    .top-info {
        position: relative;
        height: 500px;
        background: url("../assets/img/aurora.jpg") no-repeat center center /
            cover;
        opacity: 0.8;

        .avatar {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -125px;
            margin: auto;
            width: 250px;
            border-radius: 5px;
        }
    }

    .content-text {
        margin-bottom: 20px;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
    }

    .cards {
        padding: 30px 0;

        .card {
            position: relative;
            margin: 15px;
        }

        .button {
            display: block;
            margin-top: 5px;
        }

        .github {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 40px;
            cursor: pointer;
        }
    }

    .home-content {
        margin: 150px auto 0;
    }
}
</style>
