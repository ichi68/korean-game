/**
 * SEVENTEEN 韓国語学習ゲーム - メインアプリケーション
 * ES6+ モダンJavaScript実装
 */

class KoreanLearningGame {
    constructor() {
        this.currentScreen = 'title';
        this.selectedMember = null;
        this.currentGame = null;
        this.gameData = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 10;
        this.isAnswerSelected = false;
        
        this.init();
    }

    /**
     * アプリケーション初期化
     */
    init() {
        this.setupAccessibility();
        this.bindEvents();
        this.showLoadingScreen();
        
        // ローディング完了後にタイトル画面を表示
        setTimeout(() => {
            this.hideLoadingScreen();
            this.showScreen('title');
        }, 2000);
    }

    /**
     * アクセシビリティ設定
     */
    setupAccessibility() {
        // スキップリンクの追加
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'メインコンテンツにスキップ';
        skipLink.className = 'skip-link';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // キーボードナビゲーション
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
    }

    /**
     * イベントバインディング
     */
    bindEvents() {
        // タイトル画面
        document.getElementById('start-btn')?.addEventListener('click', () => {
            this.showScreen('member-select');
        });

        // メンバー選択
        document.querySelectorAll('.member-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectMember(e.currentTarget.dataset.member);
            });
        });

        // 戻るボタン
        document.getElementById('back-to-title')?.addEventListener('click', () => {
            this.showScreen('title');
        });

        document.getElementById('back-to-members')?.addEventListener('click', () => {
            this.showScreen('member-select');
        });

        // メニュー選択
        document.querySelectorAll('.menu-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectGame(e.currentTarget.dataset.menu);
            });
        });

        // ゲーム画面の戻るボタン
        document.getElementById('back-to-menu')?.addEventListener('click', () => {
            this.showScreen('menu');
        });

        document.getElementById('back-to-menu-completion')?.addEventListener('click', () => {
            this.showScreen('menu');
        });

        document.getElementById('back-to-menu-sent')?.addEventListener('click', () => {
            this.showScreen('menu');
        });

        // 結果画面のボタン
        document.getElementById('retry-btn')?.addEventListener('click', () => {
            this.retryGame();
        });

        document.getElementById('back-to-menu-result')?.addEventListener('click', () => {
            this.showScreen('menu');
        });

        // ミニゲーム関連のイベント
        document.getElementById('back-to-menu-minigame')?.addEventListener('click', () => {
            this.showScreen('menu');
        });

        document.getElementById('restart-minigame')?.addEventListener('click', () => {
            this.restartMinigame();
        });

        // じゃんけん選択ボタン
        document.querySelectorAll('.rps-choice').forEach(choice => {
            choice.addEventListener('click', (e) => {
                this.playRockPaperScissors(e.currentTarget.dataset.choice);
            });
        });

        // タッチデバイス対応
        this.setupTouchEvents();
    }

    /**
     * タッチイベント設定
     */
    setupTouchEvents() {
        // タッチデバイスでのホバー効果対応
        document.addEventListener('touchstart', () => {}, { passive: true });
    }

    /**
     * キーボードナビゲーション
     */
    handleKeyboardNavigation(e) {
        switch(e.key) {
            case 'Enter':
            case ' ':
                if (document.activeElement.classList.contains('member-card') || 
                    document.activeElement.classList.contains('menu-card')) {
                    e.preventDefault();
                    document.activeElement.click();
                }
                break;
            case 'Escape':
                if (this.currentScreen === 'vocabulary' || this.currentScreen === 'completion') {
                    this.showScreen('menu');
                } else if (this.currentScreen === 'menu') {
                    this.showScreen('member-select');
                } else if (this.currentScreen === 'member-select') {
                    this.showScreen('title');
                }
                break;
        }
    }

    /**
     * ローディング画面表示
     */
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }

    /**
     * ローディング画面非表示
     */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }

    /**
     * 画面切り替え
     */
    showScreen(screenId) {
        // 全画面を非表示
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // 指定画面を表示
        const targetScreen = document.getElementById(`${screenId}-screen`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
            
            // 画面固有の処理
            this.handleScreenSpecificLogic(screenId);
        }
    }

    /**
     * 画面固有の処理
     */
    handleScreenSpecificLogic(screenId) {
        switch(screenId) {
            case 'menu':
                this.updateSelectedMemberDisplay();
                break;
            case 'vocabulary':
            case 'completion':
                this.initializeGame();
                break;
            case 'minigame':
                this.initializeMinigame();
                break;
            case 'result':
                this.displayResults();
                break;
        }
    }

    /**
     * メンバー選択
     */
    selectMember(memberId) {
        this.selectedMember = memberId;
        
        // 選択状態の視覚的フィードバック
        document.querySelectorAll('.member-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const selectedCard = document.querySelector(`[data-member="${memberId}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }

        // メニュー画面に移動
        setTimeout(() => {
            this.showScreen('menu');
        }, 300);
    }

    /**
     * 選択メンバー表示更新
     */
    updateSelectedMemberDisplay() {
        const memberNameElement = document.getElementById('selected-member-name');
        if (memberNameElement && this.selectedMember) {
            const member = memberInfo[this.selectedMember];
            if (member) {
                memberNameElement.textContent = member.name;
            }
        }
    }

    /**
     * ゲーム選択
     */
    selectGame(gameType) {
        this.currentGame = gameType;
        this.showScreen(gameType);
    }

    /**
     * ゲーム初期化
     */
    initializeGame() {
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.isAnswerSelected = false;
        
        // ゲームデータの初期化
        this.initializeGameData();
        
        // 最初の問題を表示
        this.displayQuestion();
        
        // メンバーメッセージ表示
        this.showMemberMessage('start');
    }

    /**
     * ゲームデータ初期化
     */
    initializeGameData() {
        if (this.currentGame === 'vocabulary') {
            this.gameData = getRandomVocabulary(this.totalQuestions);
        } else if (this.currentGame === 'completion') {
            this.gameData = getRandomSentenceCompletion(this.totalQuestions);
        }
    }

    /**
     * 問題表示
     */
    displayQuestion() {
        const currentQuestion = this.gameData[this.currentQuestionIndex];
        if (!currentQuestion) return;

        if (this.currentGame === 'vocabulary') {
            this.displayVocabularyQuestion(currentQuestion);
        } else if (this.currentGame === 'completion') {
            this.displayCompletionQuestion(currentQuestion);
        }

        this.updateProgress();
    }

    /**
     * 単語問題表示
     */
    displayVocabularyQuestion(question) {
        const wordElement = document.getElementById('vocab-word');
        const hintElement = document.getElementById('vocab-hint');
        const optionsContainer = document.getElementById('vocab-options');

        if (wordElement) wordElement.textContent = question.korean;
        if (hintElement) hintElement.textContent = `ヒント: ${question.hint}`;

        const options = generateVocabularyOptions(question);
        this.renderOptions(optionsContainer, options, question.japanese, 'vocabulary');
    }

    /**
     * 例文穴埋め問題表示
     */
    displayCompletionQuestion(question) {
        const sentenceElement = document.getElementById('completion-sentence');
        const japaneseElement = document.getElementById('completion-japanese');
        const hintElement = document.getElementById('completion-hint');
        const optionsContainer = document.getElementById('completion-options');

        if (sentenceElement) sentenceElement.textContent = question.sentence;
        if (japaneseElement) japaneseElement.textContent = question.japanese;
        if (hintElement) hintElement.textContent = `ヒント: ${question.hint}`;

        const options = generateCompletionOptions(question);
        this.renderOptions(optionsContainer, options, question.correct, 'completion');
    }

    /**
     * 選択肢レンダリング
     */
    renderOptions(container, options, correctAnswer, gameType) {
        if (!container) return;

        container.innerHTML = '';
        const shuffledOptions = this.shuffleArray([...options]);

        shuffledOptions.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-btn';
            optionButton.textContent = option;
            optionButton.dataset.value = option;
            optionButton.dataset.correct = option === correctAnswer;

            optionButton.addEventListener('click', (e) => {
                this.handleAnswerSelection(e.target, gameType);
            });

            container.appendChild(optionButton);
        });
    }

    /**
     * 回答選択処理
     */
    handleAnswerSelection(selectedButton, gameType) {
        if (this.isAnswerSelected) return;

        this.isAnswerSelected = true;
        const isCorrect = selectedButton.dataset.correct === 'true';

        // 正解/不正解の視覚的フィードバック
        this.showAnswerFeedback(selectedButton, isCorrect);

        // スコア更新
        if (isCorrect) {
            this.correctAnswers++;
        }

        // メンバーメッセージ表示
        this.showMemberMessage(isCorrect ? 'correct' : 'incorrect');

        // 次の問題へ
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    /**
     * 回答フィードバック表示
     */
    showAnswerFeedback(selectedButton, isCorrect) {
        const allButtons = selectedButton.parentElement.querySelectorAll('.option-btn');
        
        allButtons.forEach(button => {
            button.disabled = true;
            
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            } else if (button === selectedButton && !isCorrect) {
                button.classList.add('incorrect');
            }
        });
    }

    /**
     * 次の問題へ
     */
    nextQuestion() {
        this.currentQuestionIndex++;
        this.isAnswerSelected = false;

        if (this.currentQuestionIndex >= this.totalQuestions) {
            this.showScreen('result');
        } else {
            this.displayQuestion();
        }
    }

    /**
     * 進捗更新
     */
    updateProgress() {
        const progress = (this.currentQuestionIndex / this.totalQuestions) * 100;
        const currentQuestion = this.currentQuestionIndex + 1;

        if (this.currentGame === 'vocabulary') {
            const progressElement = document.getElementById('vocab-progress');
            const currentElement = document.getElementById('vocab-current');
            const correctElement = document.getElementById('vocab-correct');

            if (progressElement) progressElement.style.width = `${progress}%`;
            if (currentElement) currentElement.textContent = currentQuestion;
            if (correctElement) correctElement.textContent = this.correctAnswers;
        } else if (this.currentGame === 'completion') {
            const progressElement = document.getElementById('completion-progress');
            const currentElement = document.getElementById('completion-current');
            const correctElement = document.getElementById('completion-correct');

            if (progressElement) progressElement.style.width = `${progress}%`;
            if (currentElement) currentElement.textContent = currentQuestion;
            if (correctElement) correctElement.textContent = this.correctAnswers;
        }
    }

    /**
     * メンバーメッセージ表示
     */
    showMemberMessage(type) {
        if (!this.selectedMember) return;

        const member = memberInfo[this.selectedMember];
        if (!member || !member.messages[type]) return;

        const message = member.messages[type];
        const randomIndex = Math.floor(Math.random() * message.length);
        const selectedMessage = message[randomIndex];

        // メッセージ表示用のモーダルまたはトースト
        this.showMessageModal(selectedMessage);
    }

    /**
     * メッセージモーダル表示
     */
    showMessageModal(message) {
        // 既存のモーダルを削除
        const existingModal = document.querySelector('.message-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'message-modal';
        modal.innerHTML = `
            <div class="message-content">
                <div class="member-avatar">
                    <span class="member-emoji">${memberInfo[this.selectedMember]?.emoji || '💎'}</span>
                </div>
                <div class="message-text">
                    <p class="korean-text">${message.korean}</p>
                    <p class="japanese-text">${message.japanese}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // アニメーション効果
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);

        // 自動で非表示
        setTimeout(() => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }, 3000);
    }

    /**
     * 結果表示
     */
    displayResults() {
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        // 結果統計更新
        document.getElementById('result-percentage').textContent = `${percentage}%`;
        document.getElementById('result-correct').textContent = this.correctAnswers;
        document.getElementById('result-total').textContent = this.totalQuestions;

        // 結果メッセージ表示
        this.showResultMessage(percentage);
    }

    /**
     * 結果メッセージ表示
     */
    showResultMessage(percentage) {
        const messageElement = document.getElementById('result-message');
        if (!messageElement) return;

        let message = '';
        if (percentage >= 90) {
            message = '완벽해요! 대단합니다! (完璧です！すごいです！)';
        } else if (percentage >= 70) {
            message = '잘했어요! 계속 노력하세요! (よくできました！頑張ってください！)';
        } else if (percentage >= 50) {
            message = '괜찮아요! 조금만 더 노력하세요! (大丈夫です！もう少し頑張ってください！)';
        } else {
            message = '괜찮아요! 다시 한번 도전해보세요! (大丈夫です！もう一度挑戦してみてください！)';
        }

        messageElement.innerHTML = `
            <p class="korean-text">${message}</p>
        `;

        // 完了メッセージ表示
        this.showMemberMessage('complete');
    }

    /**
     * ゲーム再挑戦
     */
    retryGame() {
        this.showScreen(this.currentGame);
    }

    /**
     * 配列シャッフル
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * ミニゲーム初期化
     */
    initializeMinigame() {
        this.minigameStats = {
            wins: 0,
            losses: 0,
            draws: 0,
            round: 1,
            gameCompleted: false,
            roundHistory: [] // 各ラウンドの結果を記録
        };
        
        this.updateMinigameDisplay();
        this.resetMinigameUI();
        
        // メンバーメッセージ表示
        this.showMemberMessage('minigame_start');
    }

    /**
     * ミニゲーム表示更新
     */
    updateMinigameDisplay() {
        const winsElement = document.getElementById('minigame-wins');
        const lossesElement = document.getElementById('minigame-losses');
        const drawsElement = document.getElementById('minigame-draws');
        const roundElement = document.getElementById('minigame-round');

        if (winsElement) winsElement.textContent = this.minigameStats.wins;
        if (lossesElement) lossesElement.textContent = this.minigameStats.losses;
        if (drawsElement) drawsElement.textContent = this.minigameStats.draws;
        if (roundElement) roundElement.textContent = this.minigameStats.round;
    }

    /**
     * ミニゲームUIリセット
     */
    resetMinigameUI() {
        const resultElement = document.getElementById('rps-result');
        const messageElement = document.getElementById('rps-message');
        
        if (resultElement) {
            resultElement.classList.remove('show');
        }
        
        if (messageElement) {
            messageElement.textContent = '뭘 낼까요? (何を出しますか？)';
        }
    }

    /**
     * じゃんけんゲーム実行
     */
    playRockPaperScissors(playerChoice) {
        // ゲームが完了している場合は何もしない
        if (this.minigameStats.gameCompleted) {
            return;
        }

        const choices = ['가위', '바위', '보'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        // 結果判定
        const result = this.determineWinner(playerChoice, computerChoice);
        
        // ラウンド結果を記録
        this.minigameStats.roundHistory.push({
            round: this.minigameStats.round,
            playerChoice: playerChoice,
            computerChoice: computerChoice,
            result: result
        });
        
        // 統計更新
        this.updateMinigameStats(result);
        
        // 結果表示
        this.displayRPSResult(playerChoice, computerChoice, result);
        
        // ラウンド進行
        this.minigameStats.round++;
        this.updateMinigameDisplay();
        
        // 3ラウンド終了時の処理
        if (this.minigameStats.round > 3) {
            this.endMinigame();
        }
    }

    /**
     * 勝敗判定
     */
    determineWinner(player, computer) {
        if (player === computer) return 'draw';
        
        const winConditions = {
            '가위': '보',    // ハサミは紙に勝つ
            '바위': '가위',  // 石はハサミに勝つ
            '보': '바위'     // 紙は石に勝つ
        };
        
        return winConditions[player] === computer ? 'win' : 'lose';
    }

    /**
     * ミニゲーム統計更新
     */
    updateMinigameStats(result) {
        switch(result) {
            case 'win':
                this.minigameStats.wins++;
                break;
            case 'lose':
                this.minigameStats.losses++;
                break;
            case 'draw':
                this.minigameStats.draws++;
                break;
        }
    }

    /**
     * じゃんけん結果表示
     */
    displayRPSResult(playerChoice, computerChoice, result) {
        const playerChoiceElement = document.getElementById('player-choice');
        const computerChoiceElement = document.getElementById('computer-choice');
        const outcomeElement = document.getElementById('rps-outcome');
        const resultElement = document.getElementById('rps-result');
        const messageElement = document.getElementById('rps-message');

        // 選択表示
        if (playerChoiceElement) {
            playerChoiceElement.textContent = this.getChoiceEmoji(playerChoice);
        }
        if (computerChoiceElement) {
            computerChoiceElement.textContent = this.getChoiceEmoji(computerChoice);
        }

        // 結果メッセージ
        let outcomeText = '';
        let messageText = '';
        
        switch(result) {
            case 'win':
                outcomeText = '이겼어요! (勝ちました！)';
                messageText = '축하해요! 잘했어요! (おめでとう！よくできました！)';
                if (outcomeElement) {
                    outcomeElement.textContent = outcomeText;
                    outcomeElement.className = 'rps-outcome win';
                }
                break;
            case 'lose':
                outcomeText = '아쉬워요... (残念...)';
                messageText = '다음에 더 잘할 수 있을 거예요! (次はもっと上手にできるはずです！)';
                if (outcomeElement) {
                    outcomeElement.textContent = outcomeText;
                    outcomeElement.className = 'rps-outcome lose';
                }
                break;
            case 'draw':
                outcomeText = '비겼어요! (引き分け！)';
                messageText = '다시 한 번 해볼까요? (もう一度やってみましょうか？)';
                if (outcomeElement) {
                    outcomeElement.textContent = outcomeText;
                    outcomeElement.className = 'rps-outcome draw';
                }
                break;
        }

        if (messageElement) {
            messageElement.textContent = messageText;
        }

        // 結果表示
        if (resultElement) {
            resultElement.classList.add('show');
        }

        // メンバーメッセージ表示（3ラウンド終了前のみ）
        if (!this.minigameStats.gameCompleted) {
            this.showMemberMessage(result === 'win' ? 'minigame_win' : 'minigame_lose');
        }
    }

    /**
     * 選択肢の絵文字取得
     */
    getChoiceEmoji(choice) {
        const emojis = {
            '가위': '✂️',
            '바위': '🪨',
            '보': '📄'
        };
        return emojis[choice] || '❓';
    }

    /**
     * ミニゲーム終了
     */
    endMinigame() {
        // 既に完了している場合は何もしない
        if (this.minigameStats.gameCompleted) {
            return;
        }
        
        this.minigameStats.gameCompleted = true;
        
        const messageElement = document.getElementById('rps-message');
        const resultElement = document.getElementById('rps-result');
        
        if (messageElement && resultElement) {
            // 最終結果に基づいてメッセージを表示
            const finalMessage = this.getFinalResultMessage();
            messageElement.textContent = finalMessage;
            
            // 少し遅延を入れて結果表示を順番に実行
            setTimeout(() => {
                // 結果履歴を表示
                this.displayRoundHistory();
                
                // さらに遅延を入れて最終結果を表示
                setTimeout(() => {
                    // 最終結果を表示
                    this.displayFinalResult();
                }, 200);
            }, 200);
        }
        
        // 最終結果に基づいてメンバーメッセージを表示（少し遅延）
        setTimeout(() => {
            this.showFinalResultMessage();
        }, 600);
    }

    /**
     * 最終結果メッセージ取得
     */
    getFinalResultMessage() {
        const wins = this.minigameStats.wins;
        const losses = this.minigameStats.losses;
        
        if (wins === 3 && losses === 0) {
            return '완벽해요! 3전 3승! (完璧です！3戦3勝！)';
        } else if (wins === 2 && losses === 1) {
            return '잘했어요! 2승 1패! (よくできました！2勝1敗！)';
        } else if (wins === 1 && losses === 2) {
            return '아쉬워요, 다음엔 더 잘할 거예요! 1승 2패 (惜しい、次はもっと上手くやれます！1勝2敗)';
        } else {
            return '괜찮아요, 다시 도전해봐요! 0승 3패 (大丈夫、もう一度チャレンジしてみましょう！0勝3敗)';
        }
    }

    /**
     * ラウンド履歴表示
     */
    displayRoundHistory() {
        const resultElement = document.getElementById('rps-result');
        if (!resultElement) return;
        
        // 既存の履歴要素がある場合は削除
        const existingHistory = resultElement.querySelector('.round-history');
        if (existingHistory) {
            existingHistory.remove();
        }
        
        // 履歴表示エリアを作成
        let historyHTML = '<div class="round-history">';
        historyHTML += '<h4>라운드 결과 (ラウンド結果)</h4>';
        
        this.minigameStats.roundHistory.forEach((round, index) => {
            const resultText = round.result === 'win' ? '승리' : 
                              round.result === 'lose' ? '패배' : '무승부';
            const resultClass = round.result === 'win' ? 'win' : 
                               round.result === 'lose' ? 'lose' : 'draw';
            
            historyHTML += `
                <div class="round-item ${resultClass}">
                    <span class="round-number">${round.round}전</span>
                    <span class="round-choices">
                        ${this.getChoiceEmoji(round.playerChoice)} vs ${this.getChoiceEmoji(round.computerChoice)}
                    </span>
                    <span class="round-result">${resultText}</span>
                </div>
            `;
        });
        
        historyHTML += '</div>';
        
        // 既存の結果表示の後に履歴を追加
        const existingBattle = resultElement.querySelector('.rps-battle');
        if (existingBattle) {
            existingBattle.insertAdjacentHTML('afterend', historyHTML);
        }
    }

    /**
     * 最終結果表示
     */
    displayFinalResult() {
        const resultElement = document.getElementById('rps-result');
        if (!resultElement) return;
        
        // 既存の最終結果要素がある場合は削除
        const existingFinalResult = resultElement.querySelector('.final-result');
        if (existingFinalResult) {
            existingFinalResult.remove();
        }
        
        const wins = this.minigameStats.wins;
        const losses = this.minigameStats.losses;
        const draws = this.minigameStats.draws;
        
        const finalResultHTML = `
            <div class="final-result">
                <h4>최종 결과 (最終結果)</h4>
                <div class="final-stats">
                    <span class="final-stat">승리: ${wins}승</span>
                    <span class="final-stat">패배: ${losses}패</span>
                    <span class="final-stat">무승부: ${draws}무</span>
                </div>
            </div>
        `;
        
        // 履歴の後に最終結果を追加
        const historyElement = resultElement.querySelector('.round-history');
        if (historyElement) {
            historyElement.insertAdjacentHTML('afterend', finalResultHTML);
        }
    }

    /**
     * 最終結果に基づくメンバーメッセージ表示
     */
    showFinalResultMessage() {
        const wins = this.minigameStats.wins;
        const losses = this.minigameStats.losses;
        
        let messageType = 'minigame_final_0_3'; // デフォルト
        
        if (wins === 3 && losses === 0) {
            messageType = 'minigame_final_3_0';
        } else if (wins === 2 && losses === 1) {
            messageType = 'minigame_final_2_1';
        } else if (wins === 1 && losses === 2) {
            messageType = 'minigame_final_1_2';
        }
        
        this.showMemberMessage(messageType);
    }

    /**
     * ミニゲーム再開
     */
    restartMinigame() {
        this.minigameStats = {
            wins: 0,
            losses: 0,
            draws: 0,
            round: 1,
            gameCompleted: false,
            roundHistory: []
        };
        
        this.updateMinigameDisplay();
        this.resetMinigameUI();
        
        // 結果表示エリアをクリア
        const resultElement = document.getElementById('rps-result');
        if (resultElement) {
            // 履歴と最終結果を削除
            const historyElement = resultElement.querySelector('.round-history');
            const finalResultElement = resultElement.querySelector('.final-result');
            if (historyElement) historyElement.remove();
            if (finalResultElement) finalResultElement.remove();
            
            resultElement.classList.remove('show');
        }
        
        // メンバーメッセージ表示
        this.showMemberMessage('minigame_start');
    }

    /**
     * エラーハンドリング
     */
    handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        
        // ユーザーフレンドリーなエラーメッセージ
        const errorMessage = '문제가 발생했습니다. 다시 시도해주세요. (問題が発生しました。もう一度お試しください。)';
        this.showMessageModal({
            korean: errorMessage,
            japanese: '問題が発生しました。もう一度お試しください。'
        });
    }
}

/**
 * パフォーマンス最適化
 */
function optimizePerformance() {
    // 画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * アプリケーション起動
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // パフォーマンス最適化
        optimizePerformance();
        
        // ゲームインスタンス作成
        window.koreanLearningGame = new KoreanLearningGame();
        
    } catch (error) {
        console.error('Application initialization failed:', error);
        
        // フォールバックメッセージ
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = `
                <div class="error-screen">
                    <h2>문제가 발생했습니다</h2>
                    <p>문제가 발생했습니다. 페이지를 새로고침해주세요.</p>
                    <button onclick="location.reload()">새로고침</button>
                </div>
            `;
        }
    }
});

/**
 * グローバルエラーハンドリング
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
