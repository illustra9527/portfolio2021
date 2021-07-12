<template>
    <div class="weather-wrap">
        <div class="wrap-top">
            <h1>十二小時天氣預報</h1>
            <div>
                <span class="search-text">區域選擇</span>
                <el-select
                    v-model="area"
                    size="small"
                    placeholder="请选择"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.text"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div class="search">
                <span class="search-text">搜尋</span>
                <el-input
                    v-model="searchText"
                    placeholder="請輸入縣市名稱"
                    class="search-input"
                />
            </div>
        </div>
        <div v-if="allData.length" class="cards">
            <div
                v-for="(data, index) in filterData"
                :key="`card-${index}`"
                class="card"
            >
                <div class="card-top">
                    <div class="locate-info">
                        <span class="locate-name">{{ data.city }}</span>
                        <div class="locate-ci">{{ data.wx }}</div>
                    </div>
                    <div :class="imgStyle(data.wxNumber)" />
                </div>
                <div class="card-bot">
                    <div class="bot-content">
                        <div class="bot-title">降雨機率 %</div>
                        <div class="bot-data">{{ data.poP }}</div>
                    </div>
                    <div class="bot-content">
                        <div class="bot-title">最高溫 ℃</div>
                        <div class="bot-data">{{ data.maxT }}</div>
                    </div>
                    <div class="bot-content">
                        <div class="bot-title">最低溫 ℃</div>
                        <div class="bot-data">{{ data.minT }}</div>
                    </div>
                </div>
            </div>
        </div>
        <b-spinner v-else class="loading" />
        <div class="data-ref">資料來源：<a href="https://opendata.cwb.gov.tw/">中央氣象局-開放資料平臺</a></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            area: '',
            searchText: '',
            allData: [],
            options: [
                { value: '', text: '全臺' },
                { value: 'north', text: '北部' },
                { value: 'central', text: '中部' },
                { value: 'south', text: '南部' },
                { value: 'east', text: '東部' },
                { value: 'island', text: '外島' }
            ],
            location: {
                north: ['臺北市', '新竹市', '新北市', '新竹縣', '基隆市', '宜蘭縣'],
                central: ['桃園市', '苗栗縣', '雲林縣', '南投縣', '臺中市', '彰化縣'],
                south: ['嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣'],
                east: ['花蓮縣', '臺東縣'],
                island: ['澎湖縣', '金門縣', '連江縣']
            },
            weather: {
                sunny: [1, 2],
                cloudy: [3, 4, 5],
                overcast: [6, 7],
                shower: [8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 29, 30, 31, 32, 33, 34, 34, 36, 37, 38, 39, 41],
                rain: [11],
                snow: [23, 42],
                foggy: [24, 25, 26, 27, 28]
            }
        };
    },
    computed: {
        filterData() {
            const data = this.area
                ? this.allData.filter((item) => this.location[this.area].includes(item.city))
                : this.allData;

            if (this.searchText) {
                return data.filter((item) => item.city.includes(this.searchText));
            }
            return data;
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D'
        }).then((res) => {
            const { location } = res.data.records;
            this.allData = location.reduce((init, data) => {
                const newData = {
                    city: data.locationName,
                    wx: data.weatherElement[0].time[0].parameter.parameterName, // wx: 天氣現象
                    wxNumber: +data.weatherElement[0].time[0].parameter.parameterValue, // 天氣狀況的數值
                    poP: data.weatherElement[1].time[0].parameter.parameterName, // PoP: 降雨機率
                    maxT: data.weatherElement[2].time[0].parameter.parameterName, // MaxT: 最高溫
                    ci: data.weatherElement[3].time[0].parameter.parameterName, // CI: 舒適度
                    minT: data.weatherElement[4].time[0].parameter.parameterName // MinT: 最低溫
                };
                return ([
                    ...init,
                    newData
                ]);
            }, []);
        })
            .catch((err) => {
                console.log(err, '<<< err');
            });
    },
    methods: {
        imgStyle(value) {
            let iconType = '';
            Object.keys(this.weather).forEach((item) => {
                if (this.weather[item].includes(value)) {
                    iconType = item;
                }
            });

            return ['img', `img-${iconType}`];
        }
    }
};

</script>

<style lang="scss" scoped>

.weather-wrap {
    position: relative;
    margin: 0 auto;
    padding: 20px 10%;
    min-height: calc(100vh - 62px);
    cursor: default;
    background: url('../assets/img/weather-bg.jpg') no-repeat center center / cover;
    background-attachment: fixed;
    background-color: hsla(0, 0%, 100%, 0.60);
    background-blend-mode: overlay;

    .wrap-top {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;

        h1 {
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid #000;
        }

        .search {
            margin-top: 20px;
        }

        .search-text {
            margin: 0 10px;
        }

        .search-input {
            width: 192px;

            /deep/ .el-input__inner {
                margin-left: 16px;
                height: 32px;
                line-height: 32px;
            }
        }
    }

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card {
        width: 400px;
        margin: 10px;
        box-shadow: 11px 10px 20px -6px #C7C7C7;
        -webkit-box-shadow: 11px 10px 20px -6px #C7C7C7;
        -moz-box-shadow: 11px 10px 20px -6px #C7C7C7;
        -o-box-shadow: 11px 10px 20px -6px #C7C7C7;
    }

    .card-top {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: 150px;
        border-bottom: 1px solid #CCC;
    }

    .locate-name {
        padding-bottom: 5px;
        border-bottom: 1px solid #CCC;
    }

    .locate-ci {
        margin: 10px 0;
        font-size: 25px;
    }

    .img {
        margin-top: 10px;
        width: 80px;
        height: 80px;
        background: url('../assets/img/weather-icon/sunny.png') no-repeat center center / contain;

        &.img-sunny {
            background-image: url('../assets/img/weather-icon/sunny.png');
        }

        &.img-cloudy {
            background-image: url('../assets/img/weather-icon/cloudy.png');
        }

        &.img-shower {
            background-image: url('../assets/img/weather-icon/shower.png');
        }

        &.img-snow {
            background-image: url('../assets/img/weather-icon/snow.png');
        }

        &.img-foggy {
            background-image: url('../assets/img/weather-icon/foggy.png');
        }

        &.img-rain {
            background-image: url('../assets/img/weather-icon/rain.png');
        }
    }

    .card-bot {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }

    .bot-content {
        flex: 1;
        text-align: center;
    }

    .bot-data {
        font-size: 55px;
    }

    .data-ref {
        margin: 25px 0;
        text-align: center;
    }

    .loading {
        display: block;
        margin: 20px auto;
        line-height: 50px;
    }
}

</style>
