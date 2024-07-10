// app.js

// タスクバーのアイコン要素を取得
const taskIcons = document.querySelectorAll('.task-icon');

// 各アイコンにクリックイベントを追加
taskIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // クリックされたアイコンのリンク先に遷移
        window.location.href = icon.getAttribute('href');
    });
});

// 最小化ボタンの動作
const minimizeButton = document.getElementById('minimize');
minimizeButton.addEventListener('click', () => {
    // 最小化の処理
    // 例: ウィンドウを最小化する処理を記述
    console.log('ウィンドウを最小化します');
});

// 最大化ボタンの動作
const maximizeButton = document.getElementById('maximize');
maximizeButton.addEventListener('click', () => {
    // 最大化の処理
    // 例: ウィンドウを最大化する処理を記述
    console.log('ウィンドウを最大化します');
});

// 閉じるボタンの動作
const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
    // 閉じるの処理
    // 例: ウィンドウを閉じる処理を記述
    console.log('ウィンドウを閉じます');
});

// ファイルエクスプローラーの追加機能
if (window.location.pathname.includes('file-explorer.html')) {
    // ファイルリストの表示
    const fileList = document.getElementById('file-list');
    const files = ['file1.txt', 'file2.jpg', 'file3.docx'];
    files.forEach(file => {
        const li = document.createElement('li');
        li.textContent = file;
        fileList.appendChild(li);
    });
    console.log('ファイルエクスプローラーの追加機能を実装しました');
}

// メモ帳の追加機能
if (window.location.pathname.includes('notepad.html')) {
    const saveButton = document.getElementById('save-button');
    const textArea = document.getElementById('text-area');
    saveButton.addEventListener('click', () => {
        const content = textArea.value;
        localStorage.setItem('notepad-content', content);
        console.log('メモ帳の内容を保存しました');
    });
    // ページ読み込み時に保存した内容を表示
    textArea.value = localStorage.getItem('notepad-content') || '';
}

// カレンダーの追加機能
if (window.location.pathname.includes('calendar.html')) {
    const dateDisplay = document.getElementById('date-display');
    const currentDate = new Date().toLocaleDateString();
    dateDisplay.textContent = `今日の日付: ${currentDate}`;
    console.log('カレンダーの追加機能を実装しました');
}

// カメラの追加機能
if (window.location.pathname.includes('camera.html')) {
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('カメラを使用できません:', err);
        });
}

// ブラウザの追加機能
if (window.location.pathname.includes('browser.html')) {
    const browserFrame = document.getElementById('browser-frame');
    const urlInput = document.getElementById('url-input');
    const goButton = document.getElementById('go-button');
    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        browserFrame.src = url;
    });
    console.log('ブラウザの追加機能を実装しました');
}

// コントロールパネルの追加機能
if (window.location.pathname.includes('control-panel.html')) {
    const settingsForm = document.getElementById('settings-form');
    const saveSettingsButton = document.getElementById('save-settings-button');
    saveSettingsButton.addEventListener('click', () => {
        const settings = {
            theme: settingsForm.elements['theme'].value,
            language: settingsForm.elements['language'].value,
        };
        localStorage.setItem('control-panel-settings', JSON.stringify(settings));
        console.log('設定を保存しました');
    });
    // ページ読み込み時に保存した設定を反映
    const savedSettings = JSON.parse(localStorage.getItem('control-panel-settings'));
    if (savedSettings) {
        settingsForm.elements['theme'].value = savedSettings.theme;
        settingsForm.elements['language'].value = savedSettings.language;
    }
}

// コマンドプロンプトの追加機能
if (window.location.pathname.includes('command-prompt.html')) {
    const commandInput = document.getElementById('command-input');
    const outputArea = document.getElementById('output-area');
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', () => {
        const command = commandInput.value;
        // 簡単なコマンド例
        if (command === 'hello') {
            outputArea.textContent += '\nHello, world!';
        } else {
            outputArea.textContent += `\nUnknown command: ${command}`;
        }
    });
}

// ロック画面の追加機能
if (window.location.pathname.includes('lock-screen.html')) {
    const unlockButton = document.getElementById('unlock-button');
    const passwordInput = document.getElementById('password-input');
    unlockButton.addEventListener('click', () => {
        const password = passwordInput.value;
        // 簡単なパスワードチェック
        if (password === '1234') {
            window.location.href = 'index.html';
        } else {
            alert('パスワードが違います');
        }
    });
}

// セットアップの追加機能
if (window.location.pathname.includes('setup.html')) {
    const setupForm = document.getElementById('setup-form');
    const saveSetupButton = document.getElementById('save-setup-button');
    saveSetupButton.addEventListener('click', () => {
        const setupData = {
            username: setupForm.elements['username'].value,
            preferences: setupForm.elements['preferences'].value,
        };
        localStorage.setItem('setup-data', JSON.stringify(setupData));
        console.log('セットアップデータを保存しました');
    });
    // ページ読み込み時に保存したデータを反映
    const savedSetupData = JSON.parse(localStorage.getItem('setup-data'));
    if (savedSetupData) {
        setupForm.elements['username'].value = savedSetupData.username;
        setupForm.elements['preferences'].value = savedSetupData.preferences;
    }
}
