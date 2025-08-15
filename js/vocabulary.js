/* SEVENTEEN 韓国語学習ゲーム - 単語データ */
/* ハン検5級レベル韓国語単語 */

const vocabularyData = [
    // 1. 挨拶 (Greetings)
    {
        id: 1,
        korean: "안녕하세요",
        japanese: "こんにちは",
        hint: "最も一般的な挨拶",
        category: "greeting",
        level: 5
    },
    {
        id: 2,
        korean: "감사합니다",
        japanese: "ありがとうございます",
        hint: "丁寧な感謝の表現",
        category: "greeting",
        level: 5
    },
    {
        id: 3,
        korean: "죄송합니다",
        japanese: "申し訳ございません",
        hint: "丁寧な謝罪の表現",
        category: "greeting",
        level: 5
    },
    {
        id: 4,
        korean: "안녕히 가세요",
        japanese: "お気をつけて",
        hint: "相手が去る時の挨拶",
        category: "greeting",
        level: 5
    },
    {
        id: 5,
        korean: "안녕히 계세요",
        japanese: "お疲れ様でした",
        hint: "自分が去る時の挨拶",
        category: "greeting",
        level: 5
    },
    {
        id: 6,
        korean: "만나서 반갑습니다",
        japanese: "お会いできて嬉しいです",
        hint: "初対面の挨拶",
        category: "greeting",
        level: 5
    },
    {
        id: 7,
        korean: "안녕",
        japanese: "こんにちは（カジュアル）",
        hint: "友達同士の挨拶",
        category: "greeting",
        level: 5
    },
    {
        id: 8,
        korean: "고마워요",
        japanese: "ありがとう",
        hint: "カジュアルな感謝の表現",
        category: "greeting",
        level: 5
    },

    // 2. 数字 (Numbers)
    {
        id: 9,
        korean: "하나",
        japanese: "一",
        hint: "韓国語の数字1",
        category: "number",
        level: 5
    },
    {
        id: 10,
        korean: "둘",
        japanese: "二",
        hint: "韓国語の数字2",
        category: "number",
        level: 5
    },
    {
        id: 11,
        korean: "셋",
        japanese: "三",
        hint: "韓国語の数字3",
        category: "number",
        level: 5
    },
    {
        id: 12,
        korean: "넷",
        japanese: "四",
        hint: "韓国語の数字4",
        category: "number",
        level: 5
    },
    {
        id: 13,
        korean: "다섯",
        japanese: "五",
        hint: "韓国語の数字5",
        category: "number",
        level: 5
    },
    {
        id: 14,
        korean: "여섯",
        japanese: "六",
        hint: "韓国語の数字6",
        category: "number",
        level: 5
    },
    {
        id: 15,
        korean: "일곱",
        japanese: "七",
        hint: "韓国語の数字7",
        category: "number",
        level: 5
    },
    {
        id: 16,
        korean: "여덟",
        japanese: "八",
        hint: "韓国語の数字8",
        category: "number",
        level: 5
    },
    {
        id: 17,
        korean: "아홉",
        japanese: "九",
        hint: "韓国語の数字9",
        category: "number",
        level: 5
    },
    {
        id: 18,
        korean: "열",
        japanese: "十",
        hint: "韓国語の数字10",
        category: "number",
        level: 5
    },

    // 3. 曜日 (Days of the Week)
    {
        id: 19,
        korean: "월요일",
        japanese: "月曜日",
        hint: "一週間の始まり",
        category: "day",
        level: 5
    },
    {
        id: 20,
        korean: "화요일",
        japanese: "火曜日",
        hint: "週の2日目",
        category: "day",
        level: 5
    },
    {
        id: 21,
        korean: "수요일",
        japanese: "水曜日",
        hint: "週の真ん中",
        category: "day",
        level: 5
    },
    {
        id: 22,
        korean: "목요일",
        japanese: "木曜日",
        hint: "週の4日目",
        category: "day",
        level: 5
    },
    {
        id: 23,
        korean: "금요일",
        japanese: "金曜日",
        hint: "週末前の日",
        category: "day",
        level: 5
    },
    {
        id: 24,
        korean: "토요일",
        japanese: "土曜日",
        hint: "週末の始まり",
        category: "day",
        level: 5
    },
    {
        id: 25,
        korean: "일요일",
        japanese: "日曜日",
        hint: "週末の最終日",
        category: "day",
        level: 5
    },

    // 4. 家族 (Family)
    {
        id: 26,
        korean: "아버지",
        japanese: "お父さん",
        hint: "父親の敬語",
        category: "family",
        level: 5
    },
    {
        id: 27,
        korean: "어머니",
        japanese: "お母さん",
        hint: "母親の敬語",
        category: "family",
        level: 5
    },
    {
        id: 28,
        korean: "형",
        japanese: "兄（男性が年上の兄を呼ぶ時）",
        hint: "男性の兄",
        category: "family",
        level: 5
    },
    {
        id: 29,
        korean: "누나",
        japanese: "姉（男性が年上の姉を呼ぶ時）",
        hint: "男性の姉",
        category: "family",
        level: 5
    },
    {
        id: 30,
        korean: "언니",
        japanese: "姉（女性が年上の姉を呼ぶ時）",
        hint: "女性の姉",
        category: "family",
        level: 5
    },
    {
        id: 31,
        korean: "오빠",
        japanese: "兄（女性が年上の兄を呼ぶ時）",
        hint: "女性の兄",
        category: "family",
        level: 5
    },
    {
        id: 32,
        korean: "할아버지",
        japanese: "おじいさん",
        hint: "祖父",
        category: "family",
        level: 5
    },
    {
        id: 33,
        korean: "할머니",
        japanese: "おばあさん",
        hint: "祖母",
        category: "family",
        level: 5
    },
    {
        id: 34,
        korean: "동생",
        japanese: "弟・妹",
        hint: "年下の兄弟姉妹",
        category: "family",
        level: 5
    },

    // 5. 基本動詞 (Basic Verbs)
    {
        id: 35,
        korean: "가다",
        japanese: "行く",
        hint: "移動する動詞",
        category: "verb",
        level: 5
    },
    {
        id: 36,
        korean: "오다",
        japanese: "来る",
        hint: "こちらに来る動詞",
        category: "verb",
        level: 5
    },
    {
        id: 37,
        korean: "먹다",
        japanese: "食べる",
        hint: "食事をする動詞",
        category: "verb",
        level: 5
    },
    {
        id: 38,
        korean: "마시다",
        japanese: "飲む",
        hint: "液体を飲む動詞",
        category: "verb",
        level: 5
    },
    {
        id: 39,
        korean: "보다",
        japanese: "見る",
        hint: "視覚で認識する動詞",
        category: "verb",
        level: 5
    },
    {
        id: 40,
        korean: "듣다",
        japanese: "聞く",
        hint: "音を聞く動詞",
        category: "verb",
        level: 5
    },
    {
        id: 41,
        korean: "자다",
        japanese: "寝る",
        hint: "睡眠を取る動詞",
        category: "verb",
        level: 5
    },
    {
        id: 42,
        korean: "일어나다",
        japanese: "起きる",
        hint: "起床する動詞",
        category: "verb",
        level: 5
    },
    {
        id: 43,
        korean: "앉다",
        japanese: "座る",
        hint: "座る動詞",
        category: "verb",
        level: 5
    },
    {
        id: 44,
        korean: "서다",
        japanese: "立つ",
        hint: "立つ動詞",
        category: "verb",
        level: 5
    },

    // 6. 基本形容詞 (Basic Adjectives)
    {
        id: 45,
        korean: "좋다",
        japanese: "良い",
        hint: "良いという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 46,
        korean: "나쁘다",
        japanese: "悪い",
        hint: "悪いという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 47,
        korean: "크다",
        japanese: "大きい",
        hint: "大きいという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 48,
        korean: "작다",
        japanese: "小さい",
        hint: "小さいという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 49,
        korean: "예쁘다",
        japanese: "美しい",
        hint: "美しいという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 50,
        korean: "귀엽다",
        japanese: "可愛い",
        hint: "可愛いという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 51,
        korean: "맛있다",
        japanese: "美味しい",
        hint: "美味しいという形容詞",
        category: "adjective",
        level: 5
    },
    {
        id: 52,
        korean: "재미있다",
        japanese: "面白い",
        hint: "面白いという形容詞",
        category: "adjective",
        level: 5
    },

    // 7. 色 (Colors)
    {
        id: 53,
        korean: "빨간색",
        japanese: "赤色",
        hint: "赤い色",
        category: "color",
        level: 5
    },
    {
        id: 54,
        korean: "파란색",
        japanese: "青色",
        hint: "青い色",
        category: "color",
        level: 5
    },
    {
        id: 55,
        korean: "노란색",
        japanese: "黄色",
        hint: "黄色い色",
        category: "color",
        level: 5
    },
    {
        id: 56,
        korean: "검은색",
        japanese: "黒色",
        hint: "黒い色",
        category: "color",
        level: 5
    },
    {
        id: 57,
        korean: "하얀색",
        japanese: "白色",
        hint: "白い色",
        category: "color",
        level: 5
    },
    {
        id: 58,
        korean: "초록색",
        japanese: "緑色",
        hint: "緑の色",
        category: "color",
        level: 5
    },
    {
        id: 59,
        korean: "보라색",
        japanese: "紫色",
        hint: "紫の色",
        category: "color",
        level: 5
    },
    {
        id: 60,
        korean: "주황색",
        japanese: "橙色",
        hint: "オレンジ色",
        category: "color",
        level: 5
    },

    // 8. 身体 (Body Parts)
    {
        id: 61,
        korean: "머리",
        japanese: "頭",
        hint: "頭部",
        category: "body",
        level: 5
    },
    {
        id: 62,
        korean: "눈",
        japanese: "目",
        hint: "視覚器官",
        category: "body",
        level: 5
    },
    {
        id: 63,
        korean: "코",
        japanese: "鼻",
        hint: "嗅覚器官",
        category: "body",
        level: 5
    },
    {
        id: 64,
        korean: "입",
        japanese: "口",
        hint: "口腔",
        category: "body",
        level: 5
    },
    {
        id: 65,
        korean: "손",
        japanese: "手",
        hint: "上肢",
        category: "body",
        level: 5
    },
    {
        id: 66,
        korean: "발",
        japanese: "足",
        hint: "下肢",
        category: "body",
        level: 5
    },
    {
        id: 67,
        korean: "귀",
        japanese: "耳",
        hint: "聴覚器官",
        category: "body",
        level: 5
    },
    {
        id: 68,
        korean: "얼굴",
        japanese: "顔",
        hint: "顔面",
        category: "body",
        level: 5
    }
];

// カテゴリ別の単語を取得する関数
function getVocabularyByCategory(category) {
    return vocabularyData.filter(word => word.category === category);
}

// ランダムな単語を取得する関数
function getRandomVocabulary(count = 10) {
    const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 特定のレベルの単語を取得する関数
function getVocabularyByLevel(level) {
    return vocabularyData.filter(word => word.level === level);
}

// 選択肢を生成する関数
function generateVocabularyOptions(correctWord, count = 4) {
    const options = [correctWord.japanese];
    const otherWords = vocabularyData.filter(word => word.id !== correctWord.id);
    
    // ランダムに他の単語を選択
    for (let i = 0; i < count - 1; i++) {
        const randomIndex = Math.floor(Math.random() * otherWords.length);
        options.push(otherWords[randomIndex].japanese);
        otherWords.splice(randomIndex, 1);
    }
    
    // 選択肢をシャッフル
    return options.sort(() => 0.5 - Math.random());
}

// カテゴリ一覧を取得する関数
function getCategories() {
    const categories = [...new Set(vocabularyData.map(word => word.category))];
    return categories;
}

// 単語の総数を取得する関数
function getVocabularyCount() {
    return vocabularyData.length;
}

// カテゴリ別の単語数を取得する関数
function getVocabularyCountByCategory(category) {
    return vocabularyData.filter(word => word.category === category).length;
}

// 検索機能
function searchVocabulary(keyword) {
    return vocabularyData.filter(word => 
        word.korean.includes(keyword) || 
        word.japanese.includes(keyword) ||
        word.hint.includes(keyword)
    );
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        vocabularyData,
        getVocabularyByCategory,
        getRandomVocabulary,
        getVocabularyByLevel,
        generateVocabularyOptions,
        getCategories,
        getVocabularyCount,
        getVocabularyCountByCategory,
        searchVocabulary
    };
}
