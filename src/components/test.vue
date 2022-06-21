<template>
    <div class="test-wrap">
        <h1>新光OU點點卡回饋計算</h1>
        <div>計算預設為已申請自動扣款</div>
        <div class="input-content">
            <div class="input-wrap">
                <el-input
                    v-model="datas.amount"
                    placeholder="請輸入消費金額"
                    type="tel"
                />
            </div>
            <div class="input-wrap">
                <div>請選擇是否為新戶，且消費日為核卡三十天內</div>
                <el-radio-group v-model="datas.newClient">
                    <el-radio
                        v-for="item in clientOptions"
                        :key="`client-${item.value}`"
                        :label="item.value"
                    >
                        {{ item.text }}
                    </el-radio>
                </el-radio-group>
            </div>
            <div class="input-wrap">
                <el-select v-model="datas.channel" placeholder="請選擇消費通路">
                    <el-option
                        v-for="item in allChannels"
                        :key="`channel-${item}`"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </div>
            <div class="input-wrap">
                <el-select v-model="datas.payDay" placeholder="请选择消費日期">
                    <el-option
                        v-for="item in dayOfWeek"
                        :key="`day-${item.value}`"
                        :label="item.text"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div class="input-wrap">
                <el-select v-model="datas.payment" placeholder="请选择支付方式">
                    <el-option
                        v-for="item in paymentList"
                        :key="`payment-${item}`"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </div>
        </div>

        <div class="result-msg">
            <h5>你可獲得的優惠</h5>
            <div>
                新戶首月加碼 5% : {{ newClient }} (剩餘額度：{{ leftOver('newClient') }})
                <el-popover
                    ref="newClientList"
                    placement="right"
                    title="回饋通路"
                    width="500"
                    trigger="hover"
                    :content="newClientChannelsList"
                />
                <i v-popover:newClientList class="el-icon-info icon-style" />
            </div>
            <div>
                指定通路加碼 4.7% : {{ specialChannel }} (剩餘額度：{{ leftOver('specialChannel') }}) <el-popover
                    ref="specialList"
                    placement="right"
                    title="回饋通路"
                    width="500"
                    trigger="hover"
                    :content="specialChannelsList"
                />
                <i v-popover:specialList class="el-icon-info icon-style" />
            </div>

            <div>基本回饋 0.3%： {{ noLimit }}</div>
            <div>
                OU加碼 {{ isOuDay ? '17%' : '12%' }}：{{ ouOffer }} (剩餘額度：{{ leftOver('ouOffer') }})  <el-popover
                    ref="ouOfferList"
                    placement="right"
                    title="回饋通路"
                    width="500"
                    trigger="hover"
                    :content="ouOfferList"
                />
                <i v-popover:ouOfferList class="el-icon-info icon-style" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            /* 新戶加碼 5%：邏輯使用 */
            newClientChannels: ['富邦momo', '蝦皮', 'PChome24h購物', 'Yahoo奇摩', '淘寶', 'foodpanda', 'Uber Eats'],
            /* 4.7%指定加碼通路 */
            specifyChannels: ['富邦momo', '蝦皮', 'PChome24h購物', 'PChome商店街', 'Yahoo奇摩', '淘寶', '東森/森森購物', 'viva', '博客來', '生活市集', 'friDay購物', '夠麻吉GOMAJI', 'ASOS', 'Shopbop', 'IHERB', 'Amazon', '17Life', 'TENSO', 'App Store', 'Google Play', 'foodpanda', 'Uber Eats'],
            ouChannels: ['富邦momo', 'PChome24h購物', '蝦皮', 'Yahoo奇摩', '淘寶', 'foodpanda', 'Uber Eats', 'My FamiPay', 'HiPay', 'LINE Pay', 'PXPAY', 'OPEN錢包'],
            /* 符合的話 加碼 5% */
            ouDay: {
                monday: ['My FamiPay'],
                tuesday: ['OPEN錢包'],
                wednesday: ['HiPay', 'My FamiPay'],
                thursday: ['LINE Pay'],
                friday: ['PXPAY'],
                sunday: ['OPEN錢包']
            },
            /* 所有通路選擇 */
            allChannels: ['富邦momo', '蝦皮', 'PChome24h購物', 'PChome商店街', 'Yahoo奇摩', '淘寶', '東森/森森購物', 'viva', '博客來', '生活市集', 'friDay購物', '夠麻吉GOMAJI', 'ASOS', 'Shopbop', 'IHERB', 'Amazon', '17Life', 'TENSO', 'App Store', 'Google Play', 'foodpanda', 'Uber Eats', '其他'],
            paymentList: ['My FamiPay', 'HiPay', 'LINE Pay', 'PXPAY', 'OPEN錢包'],
            dayOfWeek: [
                { value: 'monday', text: '週一' },
                { value: 'tuesday', text: '週二' },
                { value: 'wednesday', text: '週三' },
                { value: 'thursday', text: '週四' },
                { value: 'friday', text: '週五' },
                { value: 'sunday', text: '週日' }
            ],
            clientOptions: [
                { value: true, text: '是' },
                { value: false, text: '否' }
            ],
            /* 綁定資料 */
            datas: {
                channel: null,
                newClient: true,
                payment: '',
                payDay: '',
                amount: ''
            },
            offer: {
                newClient: {
                    percent: 0.05,
                    limit: 250
                },
                noLimit: {
                    percent: 0.003,
                    limit: null
                },
                specialChannel: {
                    percent: 0.047,
                    limit: 250
                },
                ouOffer: {
                    percent: 0.12,
                    limit: 350
                },
                ouday: {
                    percent: 0.17,
                    limit: 350
                }
            }

        };
    },
    computed: {
        newClient() {
            if (this.newClientChannels.includes(this.datas.channel) && this.datas.newClient) {
                const { percent, limit } = this.offer.newClient;
                const amount = +this.datas.amount * percent;
                return Math.round(amount >= limit ? limit : amount);
            }
            return 0;
        },
        noLimit() {
            return Math.round(this.datas.amount * this.offer.noLimit.percent);
        },
        specialChannel() {
            if (this.specifyChannels.includes(this.datas.channel)) {
                const { percent, limit } = this.offer.specialChannel;
                const amount = +this.datas.amount * percent;
                return Math.round(amount >= limit ? limit : amount);
            }
            return 0;
        },
        ouOffer() {
            if (this.ouChannels.includes(this.datas.channel)) {
                const { percent, limit } = this.isOuDay ? this.offer.ouday : this.offer.ouOffer;
                const amount = +this.datas.amount * percent;
                return Math.round(amount >= limit ? limit : amount);
            }
            if (this.datas.payment) {
                const { percent, limit } = this.offer.ouOffer;
                const amount = +this.datas.amount * percent;
                return Math.round(amount >= limit ? limit : amount);
            }
            return 0;
        },
        isOuDay() {
            return this.datas.payment && this.datas.payDay ? this.ouDay[this.datas.payDay].includes(this.datas.payment) : false;
        },
        newClientChannelsList() {
            return this.newClientChannels.join('、');
        },
        specialChannelsList() {
            return this.specifyChannels.join('、');
        },
        ouOfferList() {
            return this.ouChannels.join('、');
        }
    },
    methods: {
        leftOver(type) {
            return this.offer[type].limit - +this[type];
        }
        // 試算金額
    /*
  250
新戶5%加碼消費通路= ['富邦momo','蝦皮','PChome24h購物','Yahoo奇摩','淘寶,'foodpanda','Uber Eats']

  250
4.7%指定加碼通路= ['富邦momo', '蝦皮', 'PChome24h購物', 'PChome商店街', 'Yahoo奇摩', '淘寶', '東森/森森購物', 'viva', '博客來', '生活市集', 'friDay購物', '夠麻吉GOMAJI', 'ASOS', 'Shopbop', 'IHERB', 'Amazon', '17Life', 'TENSO', 'App Store', 'Google Play', 'foodpanda', 'Uber Eats']

OU戶加碼12%= ['富邦momo','PChome24h購物','蝦皮購物','Yahoo奇摩','淘寶','foodpanda','Uber Eats','My FamiPay','HiPay ','LINE Pay','PXPAY','OPEN錢包']

oudau 加碼 5%
ouDay: {
  週一: 'My FamiPay',
  週二: 'OPEN錢包',
  週三: 'HiPay', 'My FamiPay',
  週四: 'LINE Pay',
  週五: 'PXPAY',
  週日: 'OPEN錢包',
}

不管條件都有 0.3%

請選擇通路: ['富邦momo', '蝦皮', 'PChome24h購物', 'PChome商店街', 'Yahoo奇摩', '淘寶', '東森/森森購物', 'viva', '博客來', '生活市集', 'friDay購物', '夠麻吉GOMAJI', 'ASOS', 'Shopbop', 'IHERB', 'Amazon', '17Life', 'TENSO', 'App Store', 'Google Play', 'foodpanda', 'Uber Eats', '其他']

這兩個是用來判斷(1) 若非指定網購的話，是否可享12%回饋 (2)是否為加碼日 5%
選擇支付工具: ['My FamiPay','HiPay ','LINE Pay','PXPAY','OPEN錢包']
支付日期: ['週一', '週二'....etc]

根據通路判斷是否加碼5%
請選擇是否為新戶且核卡後三十天內消費: ['Y', 'N']

*/
    }

};
</script>

<style lang="scss" scoped>

.test-wrap {
	padding: 30px 0;
	width: 80%;
	margin: 0 auto;
	text-align: center;
}

.input-wrap {
	margin: 10px 0;
}

.el-input {
	width: 203px;
}

.icon-style {
	margin-left: 10px;
	font-size: 18px;
	color: coral;
}

.result-msg {
	margin-top: 20px;
	> div {
		margin: 5px 0;
	}
}

.input-content {
	margin-top: 20px;
}
</style>
