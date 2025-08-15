/* SEVENTEEN 韓国語学習ゲーム - メンバーメッセージデータ */

// SEVENTEENメンバー情報
const memberInfo = {
    suncheol: {
        name: "スンチョル",
        nameKr: "순철",
        realName: "최승철",
        emoji: "🐰",
        personality: "リーダーシップ溢れる韓国語の達人",
        messages: {
            start: [
                { korean: "누나! 오늘도 함께 공부하자!", japanese: "ヌナ！今日も一緒に勉強しよう！" },
                { korean: "화이팅! 순철이가 응원할게요!", japanese: "ファイト！スンチョルが応援するよ！" },
                { korean: "준비되셨나요? 시작해볼까요?", japanese: "準備できましたか？始めてみましょうか？" }
            ],
            correct: [
                { korean: "정말 잘했어요! 순철이 자랑스러워요!", japanese: "本当によくできました！スンチョルが誇りに思います！" },
                { korean: "완벽해요! 대단해요!", japanese: "完璧です！すごいです！" },
                { korean: "누나! 정말 똑똑해요!", japanese: "ヌナ！本当に賢いですね！" }
            ],
            incorrect: [
                { korean: "괜찮아요! 실수는 누구나 하는 거예요.", japanese: "大丈夫です！間違いは誰でもするものです。" },
                { korean: "다시 한번 생각해보세요!", japanese: "もう一度考えてみてください！" },
                { korean: "힘내세요! 다음에는 맞을 거예요!", japanese: "頑張ってください！次は正解できるよ！" }
            ],
            complete: [
                { korean: "수고하셨습니다! 정말 대단해요!", japanese: "お疲れ様でした！本当にすごいです！" },
                { korean: "순철이가 자랑스러워요!", japanese: "スンチョルが誇りに思います！" },
                { korean: "다음에도 함께 공부해요!", japanese: "次も一緒に勉強しましょう！" }
            ]
        }
    },
    sunyeong: {
        name: "スニョン",
        nameKr: "순영",
        realName: "권순영",
        emoji: "🐯",
        personality: "エネルギッシュで楽しい韓国語先生",
        messages: {
            start: [
                { korean: "안녕하세요! 순영이와 함께 공부해요!", japanese: "こんにちは！スニョンと一緒に勉強しましょう！" },
                { korean: "재미있게 배워봐요! 화이팅!", japanese: "楽しく学んでみましょう！ファイト！" },
                { korean: "준비되셨나요? 시작해볼까요?", japanese: "準備できましたか？始めてみましょうか？" }
            ],
            correct: [
                { korean: "와! 정말 잘했어요! 순영이 기뻐요!", japanese: "わあ！本当によくできました！スニョンが嬉しいです！" },
                { korean: "완벽해요! 대단해요!", japanese: "完璧です！すごいです！" },
                { korean: "정말 똑똑하세요!", japanese: "本当に賢いですね！" }
            ],
            incorrect: [
                { korean: "괜찮아요! 실수는 누구나 하는 거예요.", japanese: "大丈夫です！間違いは誰でもするものです。" },
                { korean: "다시 한번 생각해보세요!", japanese: "もう一度考えてみてください！" },
                { korean: "힘내세요! 다음에는 맞을 거예요!", japanese: "頑張ってください！次は正解できるよ！" }
            ],
            complete: [
                { korean: "수고하셨습니다! 정말 대단해요!", japanese: "お疲れ様でした！本当にすごいです！" },
                { korean: "순영이가 자랑스러워요!", japanese: "スニョンが誇りに思います！" },
                { korean: "다음에도 함께 공부해요!", japanese: "次も一緒に勉強しましょう！" }
            ]
        }
    },
    jihun: {
        name: "ジフン",
        nameKr: "지훈",
        realName: "이지훈",
        emoji: "🐹",
        personality: "優しく丁寧な韓国語ガイド",
        messages: {
            start: [
                { korean: "안녕하세요! 지훈이와 함께 공부해요!", japanese: "こんにちは！ジフンと一緒に勉強しましょう！" },
                { korean: "차근차근 배워봐요!", japanese: "じっくり学んでみましょう！" },
                { korean: "준비되셨나요? 시작해볼까요?", japanese: "準備できましたか？始めてみましょうか？" }
            ],
            correct: [
                { korean: "정말 잘했어요! 지훈이가 기뻐요!", japanese: "本当によくできました！ジフンが嬉しいです！" },
                { korean: "완벽해요! 대단해요!", japanese: "完璧です！すごいです！" },
                { korean: "정말 똑똑하세요!", japanese: "本当に賢いですね！" }
            ],
            incorrect: [
                { korean: "괜찮아요! 실수는 누구나 하는 거예요.", japanese: "大丈夫です！間違いは誰でもするものです。" },
                { korean: "다시 한번 생각해보세요!", japanese: "もう一度考えてみてください！" },
                { korean: "힘내세요! 다음에는 맞을 거예요!", japanese: "頑張ってください！次は正解できるよ！" }
            ],
            complete: [
                { korean: "수고하셨습니다! 정말 대단해요!", japanese: "お疲れ様でした！本当にすごいです！" },
                { korean: "지훈이가 자랑스러워요!", japanese: "ジフンが誇りに思います！" },
                { korean: "다음에도 함께 공부해요!", japanese: "次も一緒に勉強しましょう！" }
            ]
        }
    }
};

// 韓国語例文ゲーム用データ
const sentenceData = [
    { japanese: "おはようございます", korean: "안녕하세요", incorrect: ["안녕히 가세요", "감사합니다", "죄송합니다"], category: "greeting" },
    { japanese: "ありがとうございます", korean: "감사합니다", incorrect: ["안녕하세요", "죄송합니다", "안녕히 가세요"], category: "greeting" },
    { japanese: "申し訳ございません", korean: "죄송합니다", incorrect: ["감사합니다", "안녕하세요", "안녕히 가세요"], category: "greeting" },
    { japanese: "一", korean: "하나", incorrect: ["둘", "셋", "넷"], category: "number" },
    { japanese: "二", korean: "둘", incorrect: ["하나", "셋", "넷"], category: "number" },
    { japanese: "三", korean: "셋", incorrect: ["하나", "둘", "넷"], category: "number" },
    { japanese: "月曜日", korean: "월요일", incorrect: ["화요일", "수요일", "목요일"], category: "day" },
    { japanese: "火曜日", korean: "화요일", incorrect: ["월요일", "수요일", "목요일"], category: "day" },
    { japanese: "水曜日", korean: "수요일", incorrect: ["월요일", "화요일", "목요일"], category: "day" },
    { japanese: "お父さん", korean: "아버지", incorrect: ["어머니", "형", "누나"], category: "family" },
    { japanese: "お母さん", korean: "어머니", incorrect: ["아버지", "형", "누나"], category: "family" },
    { japanese: "行く", korean: "가다", incorrect: ["오다", "먹다", "마시다"], category: "verb" },
    { japanese: "来る", korean: "오다", incorrect: ["가다", "먹다", "마시다"], category: "verb" },
    { japanese: "食べる", korean: "먹다", incorrect: ["가다", "오다", "마시다"], category: "verb" },
    { japanese: "良い", korean: "좋다", incorrect: ["나쁘다", "크다", "작다"], category: "adjective" },
    { japanese: "大きい", korean: "크다", incorrect: ["좋다", "나쁘다", "작다"], category: "adjective" },
    { japanese: "赤色", korean: "빨간색", incorrect: ["파란색", "노란색", "검은색"], category: "color" },
    { japanese: "青色", korean: "파란색", incorrect: ["빨간색", "노란색", "검은색"], category: "color" },
    { japanese: "頭", korean: "머리", incorrect: ["눈", "코", "입"], category: "body" },
    { japanese: "目", korean: "눈", incorrect: ["머리", "코", "입"], category: "body" }
];

// 韓国語例文穴埋めゲーム用データ
const sentenceCompletionData = [
    {
        id: 1,
        sentence: "오늘도 ___하자!",
        correct: "공부",
        options: ["공부", "게임", "운동", "쇼핑"],
        japanese: "今日も___しよう！",
        hint: "勉強する",
        category: "encouragement"
    },
    {
        id: 2,
        sentence: "정말 ___이야!",
        correct: "대단",
        options: ["대단", "이상", "귀여", "예쁘"],
        japanese: "本当に___だね！",
        hint: "すごい",
        category: "encouragement"
    },
    {
        id: 3,
        sentence: "___ 화이팅!",
        correct: "함께",
        options: ["함께", "혼자", "빨리", "천천"],
        japanese: "___ファイト！",
        hint: "一緒に",
        category: "encouragement"
    },
    {
        id: 4,
        sentence: "너무 ___해요!",
        correct: "좋",
        options: ["좋", "나쁘", "크", "작"],
        japanese: "とても___ですね！",
        hint: "良い",
        category: "encouragement"
    },
    {
        id: 5,
        sentence: "___ 멋져요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___かっこいいです！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 6,
        sentence: "___ 공부해요!",
        correct: "열심히",
        options: ["열심히", "천천히", "빨리", "조용히"],
        japanese: "___勉強しましょう！",
        hint: "一生懸命",
        category: "encouragement"
    },
    {
        id: 7,
        sentence: "___ 자랑스러워요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___誇りに思います！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 8,
        sentence: "___ 완벽해요!",
        correct: "완전히",
        options: ["완전히", "조금", "아주", "매우"],
        japanese: "___完璧です！",
        hint: "完全に",
        category: "encouragement"
    },
    {
        id: 9,
        sentence: "___ 대단해요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___すごいです！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 10,
        sentence: "___ 똑똑해요!",
        correct: "너무",
        options: ["너무", "조금", "아주", "매우"],
        japanese: "___賢いですね！",
        hint: "とても",
        category: "encouragement"
    },
    {
        id: 11,
        sentence: "___ 예뻐요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___きれいですね！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 12,
        sentence: "___ 귀여워요!",
        correct: "너무",
        options: ["너무", "조금", "아주", "매우"],
        japanese: "___可愛いですね！",
        hint: "とても",
        category: "encouragement"
    },
    {
        id: 13,
        sentence: "___ 잘했어요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___よくできました！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 14,
        sentence: "___ 수고했어요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___お疲れ様でした！",
        hint: "本当に",
        category: "encouragement"
    },
    {
        id: 15,
        sentence: "___ 감사해요!",
        correct: "정말",
        options: ["정말", "조금", "아주", "매우"],
        japanese: "___ありがとうございます！",
        hint: "本当に",
        category: "encouragement"
    }
];

// メンバーメッセージを取得する関数
function getMemberMessage(memberId, messageType) {
    const member = memberInfo[memberId];
    if (!member || !member.messages[messageType]) {
        return { korean: "화이팅!", japanese: "ファイト！" };
    }
    const messages = member.messages[messageType];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// メンバー情報を取得する関数
function getMemberInfo(memberId) {
    return memberInfo[memberId] || null;
}

// 全メンバー情報を取得する関数
function getAllMembers() {
    return Object.keys(memberInfo).map(id => ({ id: id, ...memberInfo[id] }));
}

// ランダムな例文を取得する関数
function getRandomSentence(count = 10) {
    const shuffled = [...sentenceData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// カテゴリ別の例文を取得する関数
function getSentencesByCategory(category) {
    return sentenceData.filter(sentence => sentence.category === category);
}

// 例文の選択肢を生成する関数
function generateSentenceOptions(correctSentence, count = 4) {
    const options = [correctSentence.korean];
    const otherSentences = sentenceData.filter(s => s.korean !== correctSentence.korean);
    
    for (let i = 0; i < count - 1; i++) {
        const randomIndex = Math.floor(Math.random() * otherSentences.length);
        options.push(otherSentences[randomIndex].korean);
        otherSentences.splice(randomIndex, 1);
    }
    
    return options.sort(() => 0.5 - Math.random());
}

// 例文穴埋めゲーム用の関数
function getRandomSentenceCompletion(count = 10) {
    const shuffled = [...sentenceCompletionData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 例文穴埋めの選択肢を生成する関数
function generateCompletionOptions(completionData) {
    return completionData.options.sort(() => 0.5 - Math.random());
}

// 結果メッセージを生成する関数
function generateResultMessage(score, total, memberId) {
    const percentage = (score / total) * 100;
    const member = memberInfo[memberId];
    
    if (percentage >= 90) {
        return { korean: `${member.nameKr}님이 정말 자랑스러워요! 완벽해요!`, japanese: `${member.name}さんが本当に誇りに思います！完璧です！` };
    } else if (percentage >= 70) {
        return { korean: `${member.nameKr}님이 잘했다고 해요!`, japanese: `${member.name}さんがよくできたと言っています！` };
    } else if (percentage >= 50) {
        return { korean: `${member.nameKr}님이 다음에는 더 잘할 거라고 믿어요!`, japanese: `${member.name}さんが次はもっとよくできると信じています！` };
    } else {
        return { korean: `${member.nameKr}님이 괜찮다고 해요. 실수는 누구나 하는 거예요!`, japanese: `${member.name}さんが大丈夫だと言っています。間違いは誰でもするものです！` };
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        memberInfo,
        sentenceData,
        sentenceCompletionData,
        getMemberMessage,
        getMemberInfo,
        getAllMembers,
        getRandomSentence,
        getSentencesByCategory,
        generateSentenceOptions,
        getRandomSentenceCompletion,
        generateCompletionOptions,
        generateResultMessage
    };
}
