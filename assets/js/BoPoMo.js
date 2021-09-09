var words = [
    'ㄅ',
    'ㄆ',
    'ㄇ',
    'ㄈ',
    'ㄉ',
    'ㄊ',
    'ㄋ',
    'ㄌ',
    'ㄍ',
    'ㄎ',
    'ㄏ',
    'ㄐ',
    'ㄑ',
    'ㄒ',
    'ㄓ',
    'ㄔ',
    'ㄕ',
    'ㄖ',
    'ㄗ',
    'ㄘ',
    'ㄙ',
    'ㄧ',
    'ㄨ',
    'ㄩ',
    'ㄚ',
    'ㄛ',
    'ㄜ',
    'ㄝ',
    'ㄞ',
    'ㄟ',
    'ㄠ',
    'ㄡ',
    'ㄢ',
    'ㄣ',
    'ㄤ',
    'ㄥ',
    'ㄦ'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function word1Random() {
    var randomNum = getRandomInt(37)
    console.log(randomNum);
    document.getElementById('w1').innerHTML = words[randomNum];
}

function word2Random() {
    var randomNum = getRandomInt(37)
    console.log(randomNum);
    document.getElementById('w2').innerHTML = words[randomNum];
}