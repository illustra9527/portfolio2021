<template>
    <div class="game-wrap">
        <div class="game-content">
            <div v-show="win" class="winner">
                <div class="winner-text">
                    你贏拉，恭喜
                    <div class="restart-tip">{{ count }} 秒後自動重新遊戲</div>
                </div>
                <img src="../assets/img/firework.gif" alt="" />
            </div>
            <h1 :class="{ 'pink' : shiny }">猜數字</h1>
            <div class="content">
                <div class="mode">
                    <div class="mode-text">簡單：不限次數<br /> 困難：只猜五次</div>
                    <div class="mode-text"><span>*</span> 模式轉換遊戲會重新開始。</div>
                    <el-radio-group v-model="mode" size="small">
                        <el-radio-button label="easy">簡單模式</el-radio-button>
                        <el-radio-button label="hard">困難模式</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="tip">{{ rangeText }}</div>
                <div v-show="tip" class="tip">{{ tip }}</div>
                <input
                    v-model="number"
                    class="input"
                    type="number"
                    @keyup.enter="numInput"
                />
                <el-button
                    type="primary"
                    plain
                    size="small"
                    class="button"
                    @click="numInput"
                >
                    確認
                </el-button>
                <el-button
                    type="warning"
                    size="small"
                    class="button"
                    plain
                    @click="initAnswer"
                >
                    重來
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            answer: null,
            number: null,
            minNum: 0,
            maxNum: 100,
            win: false,
            guessTime: 0,
            mode: 'easy',
            hardGuess: 5,
            count: 3,
            timer: null,
            shiny: true,
            shinyTimer: null
        };
    },
    computed: {
        tip() {
            if (!this.guessTime || this.hardGuess === 5) {
                return '';
            }

            if (this.mode === 'easy') {
                return `猜錯 ${this.guessTime} 次囉，再來`;
            }

            if (!this.hardGuess) {
                return '沒機會囉，掰！';
            }

            return `猜錯了，你剩下 ${this.hardGuess} 次機會`;
        },
        rangeText() {
            return `請輸入 ${this.minNum} ~ ${this.maxNum} 數字`;
        }
    },
    watch: {
        mode: {
            handler(val) {
                if (val) {
                    this.initAnswer();
                }
            }
        }
    },
    created() {
        this.initAnswer();
        this.shinyTimer = setInterval(() => {
            this.shiny = !this.shiny;
        }, 500);
    },
    beforeDestroy() {
        clearInterval(this.timer);
        clearInterval(this.shinyTimer);
    },
    methods: {
        numInput() {
            if (this.mode === 'hard' && this.hardGuess === 0) {
                this.$confirm('你已經輸了，乖乖認命重新開始好嗎？', '提示', {
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    type: 'alert'
                }).then(() => {
                    this.initAnswer();
                }).catch(() => {
                    this.numInput();
                });
                return;
            }

            if (+this.number <= this.minNum || +this.number >= this.maxNum) {
                this.$message.warning(this.rangeText);
                return;
            }

            if (+this.number === this.answer) {
                this.win = true;
                this.timer = setInterval(() => {
                    if (this.count === 0) {
                        return;
                    }
                    this.count -= 1;
                }, 1000);
                setTimeout(() => {
                    this.win = false;
                    this.initAnswer();
                }, 3000);
                return;
            }

            if (+this.number < this.answer) {
                this.minNum = +this.number;
            }

            if (+this.number > this.answer) {
                this.maxNum = +this.number;
            }

            this.guessTime += 1;
            this.hardGuess -= 1;
            this.number = null;
        },
        initAnswer() {
            this.answer = Math.ceil(Math.random() * 100);
            console.log(this.answer, '<<<<< 正確答案是 ');
            this.win = false;
            this.minNum = 0;
            this.maxNum = 100;
            this.number = null;
            this.guessTime = 0;
            this.hardGuess = 5;
            this.$message.success({ message: 'GAME START!', center: true });
            this.count = 3;
            clearInterval(this.timer);
        }
    }
};

</script>

<style lang="scss" scoped>
.game-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 62px);
    color: #FFF;
    background: url('../assets/img/game-bg.jpg') no-repeat center center / cover;
    background-color: hsla(0, 0%, 100%, 0.20);
    background-blend-mode: overlay;

    .game-content {
        width: 80%;
        padding: 40px;
        border: 1px solid #FFF;
        border-radius: 15px;
        background: rgba(100, 255, 220, 0.15);
    }

    h1 {
        color: lightgreen;
        text-align: center;

        &.pink {
            color: lightcoral;
        }
    }

    .winner {
        z-index: 1;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        background: rgba(255, 255, 255, 0.7);

        .winner-text {
            font-size: 40px;
            color: #F00;
            background-color: #FFF;
        }

        .restart-tip {
            font-size: 20px;
            color: #000;
        }
    }

    .content {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }

    .tip {
        margin: 10px 0;
        font-size: 20px;
        color: #000;
        line-height: 30px;
    }

    input {
        margin-bottom: 10px;
        padding: 0 5px;
        color: #000;

        &:focus {
            outline: none;
        }
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .button {
        display: inline-block;
        margin-left: 10px;
        padding: 0 20px;
        line-height: 28px;
        vertical-align: top;
    }

    .submit {
        &:hover {
            background-color: rgb(65, 147, 38);
            color: #FFF;
        }
    }

    .reset {
        &:hover {
            background-color: #F00;
            color: #FFF;
        }
    }

    .mode  {
        margin: 20px 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #EEE;
    }

    .mode-text {
        margin: 20px 0;
        font-size: 15px;
        line-height: 20px;
        text-shadow: #4D4D4D 0.1em 0.1em 0.3em;

        span {
            color: #F00;
        }
    }
}
</style>
