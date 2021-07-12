<template>
    <div class="art-wrap">
        <div class="cards">
            <b-card
                v-for="(art, index) in arts"
                :key="`art-${index}`"
                :title="art.label"
                :img-src="require(`@/assets/img/art/${art.img}.png`)"
                img-alt="Image"
                img-top
                tag="article"
                class="card"
            >
                <b-card-text>
                    {{ art.content }}
                </b-card-text>
            </b-card>
            <div />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            arts: [
                { label: '日本旅遊小冊-正面', content: '2016年在日打期間，大學同學一起來同樂，我自告奮勇當導遊、製作、列印此份小冊提供給他們。一起留下美好回憶。使用 photoshop 及 illustrator 製作。', img: 'jp-1' },
                { label: '日本旅遊小冊-背面', content: '小冊背面，介紹各地景點。私心安排的自己很喜歡的去寺廟、神社。', img: 'jp-2' },
                { label: '出遊', content: '大學時女排感情不錯，藉打球及吃蘭城烤鴨之名，邀約大家相聚。使用 illustrator 合成製作。', img: '2020' }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
    .art-wrap {
        display: flex;
        justify-content: center;

        .cards {
            display: flex;
            flex-direction: column;
            padding: 30px 0;

            .card {
                margin: 20px;
                max-width: 800px;

            }
        }
    }
</style>
