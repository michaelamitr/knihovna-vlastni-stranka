const now = dayjs();
const birthDay = dayjs('2023-12-30');
const generatedanswerELM = document.querySelector('#generatedanswer');

if (now.isAfter(birthDay)) {
  generatedanswerELM.textContent = 'ANO.';
} else {
  generatedanswerELM.textContent = 'NE.';
}
