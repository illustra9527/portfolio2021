<template>
    <div class="about-wrap">
        <div class="about">
            <h2>Hi! 我是 Joy</h2>
            <div
                v-for="(intro, index) in intros"
                :key="`index-${index}`"
                class="about-content opacity"
            >
                <div class="content-title">{{ intro.title }}</div>
                <p v-for="(type, typeIndex) in intro.content" :key="`type${typeIndex}`">
                    {{ type }}
                </p>
            </div>
        </div>
        <div class="time-line">
            <h3>工作經驗</h3>
            <el-timeline>
                <el-timeline-item
                    v-for="(stamp, index) in timelineData"
                    :key="`stamp${index}`"
                    :timestamp="stamp.timestamp"
                    placement="top"
                    size="large"
                >
                    <el-card class="card">
                        <h5>{{ stamp.title }}</h5>
                        <p>{{ stamp.compony }}</p>
                        <p
                            v-for="(work, workIndex) in stamp.work"
                            :key="`stamp${workIndex}`"
                            class="work"
                        >
                            {{ work }}
                        </p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            timelineData: 'getTimelineList',
            intros: 'getIntros'
        })
    },
    created() {
        window.scrollTo(0, 0);
    }
};
</script>

<style lang="scss" scoped>
    .about-wrap {
        display: flex;
        justify-content: space-evenly;
        padding: 50px 20px;
        flex-grow: 1;
        flex-wrap: wrap;

        .about {
            margin-bottom: 30px;
            padding: 15px;
            text-align: center;

            .about-content {
                margin-top: 20px;
                padding: 15px;
                border: 1px solid #DDD;
                border-radius: 5px;
                animation-name: introCard;
                animation-duration: 2s;

                > p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 30px;
                }
            }

            .content-title {
                margin-bottom: 10px;
                padding-bottom: 5px;
                font-size: 20px;
                border-bottom: 1px solid #DDD;
            }

        }

        .time-line {
            padding: 15px;

            h3 {
                margin-bottom: 15px;
            }
        }

        .work {
            margin: 0;
            line-height: 22px;
        }

        .card {
            animation-name: move;
            animation-duration: 2s;
        }

    }

    @keyframes move {
        from {
            transform: translateX(50px);
        }
        80% {
            transform: translateX(-10px);
        }
        90% {
            transform: translateX(10px);
        }
        to {
            transform: translateX(0);
        }

    }

    @keyframes introCard {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
