document.addEventListener('DOMContentLoaded', () => {
    const windows = {
        'file-explorer-icon': document.getElementById('file-explorer-window'),
        'notepad-icon': document.getElementById('notepad-window'),
        'calendar-icon': document.getElementById('calendar-window'),
        'camera-icon': document.getElementById('camera-window'),
        'browser-icon': document.getElementById('browser-window'),
        'control-panel-icon': document.getElementById('control-panel-window'),
        'command-prompt-icon': document.getElementById('command-prompt-window'),
        'lock-screen-icon': document.getElementById('lock-screen-window'),
        'setup-icon': document.getElementById('setup-window')
    };

    const taskIcons = document.querySelectorAll('.task-icon');

    taskIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const id = icon.id;
            Object.values(windows).forEach(win => win.style.display = 'none');
            windows[id].style.display = 'block';
        });
    });

    const windowControls = document.querySelectorAll('.window-control');

    windowControls.forEach(control => {
        control.addEventListener('click', () => {
            const windowElement = control.closest('.window');
            if (control.classList.contains('minimize')) {
                windowElement.style.display = 'none';
            } else if (control.classList.contains('maximize')) {
                windowElement.style.width = windowElement.style.width === '100%' ? '400px' : '100%';
                windowElement.style.height = windowElement.style.height === '100%' ? '300px' : '100%';
            } else if (control.classList.contains('close')) {
                windowElement.style.display = 'none';
            }
        });
    });

    // ファイルエクスプローラーの追加機能
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
                windows['lock-screen-icon'].style.display = 'none';
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
