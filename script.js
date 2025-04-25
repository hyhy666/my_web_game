// 获取按钮元素
const startButton = document.getElementById('startButton');
const colorButton = document.getElementById('colorButton');
const gameArea = document.getElementById('gameArea');

// 点击“开始游戏”按钮时，显示游戏区域
startButton.addEventListener('click', function() {
    gameArea.style.display = 'block';  // 显示游戏区域
    startButton.style.display = 'none'; // 隐藏开始按钮
});

// 点击“改变颜色”按钮时，改变背景颜色
colorButton.addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8C00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor; // 改变背景颜色
});
