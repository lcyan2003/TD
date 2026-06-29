const tasks = {
  data: "請蒐集一週班級用電或設備使用資料，整理成表格，並提出一項可行的節能改善策略。",
  design: "請觀察教室或家中的收納問題，繪製一個智慧收納裝置草圖，並說明材料、結構與使用流程。",
  ethics: "請比較生成式 AI 在學習協助與作業代寫上的差異，提出三項負責任使用原則。"
};

const scenarioSelect = document.querySelector("#scenario");
const taskButton = document.querySelector("#task-button");
const taskOutput = document.querySelector("#task-output");

taskButton.addEventListener("click", () => {
  const selectedTask = tasks[scenarioSelect.value];
  taskOutput.textContent = selectedTask;
});

