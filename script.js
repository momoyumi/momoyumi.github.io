function drawOmikuji() {
  const results = [
    "大吉 🎉",
    "中吉 😊",
    "小吉 🙂",
    "吉 👍",
    "末吉 🤔",
    "凶 😟",
    "大凶 😱"
  ];

  const randomIndex = Math.floor(Math.random() * results.length);
  const resultText = results[randomIndex];

  document.getElementById("result").textContent = resultText;
}