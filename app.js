document.addEventListener('DOMContentLoaded', () => {
    const windows = {
        'lock-screen': document.getElementById('lock-screen'),
        'file-explorer-icon': document.getElementById('file-explorer-window'),
        'notepad-icon': document.getElementById('notepad-window'),
        'calendar-icon': document.getElementById('calendar-window'),
        'camera-icon': document.getElementById('camera-window'),
        'browser-icon': document.getElementById('browser-window'),
        'control-panel-icon': document.getElementById('control-panel-window'),
        'command-prompt-icon': document.getElementById('command-prompt-window'),
        'setup-icon': document.getElementById('setup-window')
    };

    const lockScreen = document.getElementById('lock-screen');
    const desktop = document.getElementById('desktop');

    document.getElementById('unlock-button').addEventListener('click', () => {
        const passwordInput = document.getElementById('password-input').value;
        if (passwordInput === 'password') { // 仮のパスワードチェック
            lockScreen.style.display = 'none';
            desktop.style.display = 'block';
        } else {
            alert('パスワードが違います');
        }
    });

    document.getElementById('start-menu-icon').addEventListener('click', () => {
        const startMenu = document.getElementById('start-menu');
        startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
    });

    const appIcons = document.querySelectorAll('.task-icon');
    appIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const windowId = icon.id;
            windows[windowId].style.display = 'block';
        });
    });

    const startMenuItems = document.querySelectorAll('#start-menu li');
    startMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const windowId = item.id.replace('start-', '') + '-icon';
            windows[windowId].style.display = 'block';
            document.getElementById('start-menu').style.display = 'none';
        });
    });

    const closeButtons = document.querySelectorAll('.window-control.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.window').style.display = 'none';
        });
    });

    // ファイルエクスプローラーのファイル表示機能
    const fileList = document.getElementById('file-list');
    if (fileList) {
        const files = ['file1.txt', 'file2.jpg', 'file3.pdf'];
        fileList.innerHTML = files.map(file => `<div>${file}</div>`).join('');
    }

    // メモ帳の保存機能
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const textArea = document.getElementById('text-area');
            localStorage.setItem('notepadContent', textArea.value);
        });
    }

    // カレンダーの現在日付表示機能
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
        dateDisplay.textContent = new Date().toLocaleDateString();
    }

    // カメラの映像表示機能
    const videoElement = document.querySelector('video');
    if (videoElement) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoElement.srcObject = stream;
            })
            .catch(err => {
                console.error('カメラのアクセスに失敗しました: ', err);
            });
    }

    // ブラウザのURL入力機能
    const goButton = document.getElementById('go-button');
    if (goButton) {
        goButton.addEventListener('click', () => {
            const urlInput = document.getElementById('url-input');
            const browserFrame = document.getElementById('browser-frame');
            browserFrame.src = urlInput.value;
        });
    }

    // コントロールパネルの設定保存機能
    const saveSettingsButton = document.getElementById('save-settings-button');
    if (saveSettingsButton) {
        saveSettingsButton.addEventListener('click', () => {
            const settingsForm = document.getElementById('settings-form');
            const formData = new FormData(settingsForm);
            const settings = {};
            formData.forEach((value, key) => {
                settings[key] = value;
            });
            localStorage.setItem('settings', JSON.stringify(settings));
        });
    }

    // コマンドプロンプトの実行機能
    const executeButton = document.getElementById('execute-button');
    if (executeButton) {
        executeButton.addEventListener('click', () => {
            const commandInput = document.getElementById('command-input');
            const outputArea = document.getElementById('output-area');
            outputArea.textContent += `> ${commandInput.value}\n結果: コマンドが実行されました\n`;
            commandInput.value = '';
        });
    }

    // ロック画面の解除機能
    const unlockButton = document.getElementById('unlock-button');
    if (unlockButton) {
        unlockButton.addEventListener('click', () => {
            const passwordInput = document.getElementById('password-input');
            if (passwordInput.value === 'password') { // 仮のパスワードチェック
                windows['lock-screen'].style.display = 'none';
            } else {
                alert('パスワードが間違っています');
            }
        });
    }

    // セットアップの保存機能
    const saveSetupButton = document.getElementById('save-setup-button');
    if (saveSetupButton) {
        saveSetupButton.addEventListener('click', () => {
            const setupForm = document.getElementById('setup-form');
            const formData = new FormData(setupForm);
            const setup = {};
            formData.forEach((value, key) => {
                setup[key] = value;
            });
            localStorage.setItem('setup', JSON.stringify(setup));
        });
    }
});
