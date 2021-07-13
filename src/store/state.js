export default {
    todoList: [
        {
            id: 1,
            content: 'buy dinner',
            done: false
        }
    ],
    timelineData: [
        {
            timestamp: 'Mar. 2020 - present',
            title: '網頁前端工程師',
            compony: '凡谷興業有限公司 | 台中市西屯區',
            work: [
                '1. 維護現有專案架構、排解線上問題', '2. 發新功能、協助開發新架構', '3. 製作組內使用的工具及規範文件'
            ]
        },
        {
            timestamp: 'Apr. 2018 - Sep. 2019',
            title: '國外B2B電商業務',
            compony: '新科企業有限公司 | 台中市西區',
            work: [
                '1. SEO管理及Google ads', '2. 社群與官方網站管理', '3. 產品攝影後製及上架', '4. 亞洲市場陌生開發，主打日本市場', '5. 詢價報價', '6. 出國參展'
            ]
        },
        {
            timestamp: 'Oct. 2016 - Oct.2017',
            title: '服務生 (加拿大打工度假)',
            compony: 'Dinesty Dumpling House | Vancouver, Canada',
            work: [
                '1. 顧客桌邊服務', '2. 點餐、結帳，協助處理餐點問題', '3. 清潔'
            ]
        },
        {
            timestamp: 'Jun. 2015 - Jun. 2016',
            title: '日本打工度假',
            compony: 'Japan',
            work: [
                '1. 房務人員', '2. 北海道飯店小賣店店員、餐廳服務生、櫃檯人員', '3. 溫泉設施(日帰り)服務人員', '4. 農場換宿'
            ]

        },
        {
            timestamp: 'Nov. 2014 - Jun. 2015',
            title: '美編、小編',
            compony: '多利得自行車週邊代理 | 台中市大雅區',
            work: [
                '1. 商品拍攝編輯後製', '2. Banner及臉書廣告圖製作', '3. 臉書粉絲專業經營及部分電子商務', '4. 支援貨品分類及公關活動(自行車展及粉絲團揪團騎車)'
            ]

        }
    ],
    linksList: [
        { path: '/todo', label: 'TODO LIST', content: '代辦事項。利用 vuex 來進行資料交換，如新增、更新、刪除等。', img: 'todo.png' },
        { path: '/weather-card', label: '天氣卡片', content: '介接氣象局 api 呈現，提供過濾縣市選項以及搜尋功能。', img: 'weather.png', isLink: false },
        { path: '/game', label: '終極密碼', content: '猜數字遊戲。使用套件 element UI。有簡單及困難模式。', img: 'game.png', isLink: false },
        { path: '/tdee', label: 'TDEE 計算', content: '網路上計算機的都不是很方便，所以自己寫了一個。', img: 'tdee.png', isLink: false },
        { path: 'https://illustra9527.github.io/food-page/', label: '嘉惠美食', content: '利用套件快速製作的靜態一頁式產品行銷網頁。發佈在 github 使用。', img: 'food.png', isLink: true, github: 'https://github.com/illustra9527/food-page' },
        { path: 'https://illustra9527.github.io/portfolio2021/#/', label: '作品集網站', content: '利用 vue, vuex, vue router 及套件庫製作而成的作品集。', img: 'portfolio.png', isLink: true, github: 'https://github.com/illustra9527/portfolio2021' },
        { path: 'https://illustra9527.github.io/FluentDesign/', label: 'Fluent Design 官網', content: '仿刻作品：微軟官方網站 - Fluent Design 首頁。全手刻製作前端作品。', img: 'fluent.jpg', isLink: true, github: 'https://github.com/illustra9527/FluentDesign' },
        { path: 'https://illustra9527.github.io/Microsoft-official-website/', label: 'Microsoft 官網', content: '仿刻作品：微軟官方網站首頁。以Bootstrap套件製作的前端作品。', img: 'microsoft.jpg', isLink: true, github: 'https://github.com/illustra9527/Microsoft-official-website' }
    ],
    intros: [
        {
            title: '我...',
            content: ['吸貓成痴的前端工程師', '永不退休的遊戲人', '熱愛美食，細心品嚐每一道食物', '最挑嘴的是牛肉與拉麵，最愛的是乳酪蛋糕', '喜愛日劇、動漫，他們讓我克服前往日本打工度假的恐懼', '喜歡美的事物及攝影。極光是現在看過最感動的光景']
        },
        {
            title: '技術',
            content: ['HTML5, CSS3, Javascript', 'JQuery, SCSS, Bootstrap', 'Vue.js, Vue Router, Vuex ', 'Webpack, RESTfulAPI, Git Flow']
        },
        {
            title: '軟體',
            content: ['Adobe Photoshop, Illustrator, Premiere', 'Final Cut Pro']
        },
        {
            title: '其他',
            content: ['JLPT N2', 'Google Ads 入門']
        },
        {
            title: '關於轉職',
            content: ['在 2019年10月參加了職訓局為期三個月的', '大數據系統開發 - 全端與Python資料探勘工程師養成班', '學習網頁最新前後端開發技術，HTML、Javascript、CSS', '使用 Laraval 製作後台前台動態網站及並結合購物車系統、串接綠界金流。']
        },
        {
            title: '其他可公開的無聊資訊',
            content: ['最近迷上了跳繩，還從美國訂回來', '誤入歧途玩了十幾年 RO 終於成功戒掉', 'Switch 最讚遊戲只推薩爾達曠野之息沒有之一', '日劇及動畫喜歡追當季最新', '生在有幽浮社的時代太幸福', '日本打工度假的一年讓我重新審視看待日本文化']
        }
    ]
};
