const localHost = 'http://localhost:4000';

const complimentBtn = document.getElementById('complimentButton');

const deleteForm = document.getElementById('delete-form');
const selectCompliment = document.getElementById('select-compliment');
const fortuneContainer = document.getElementById('fortune');
const changeFortuneForm = document.getElementById('change-form');

const getCompliment = () => {
  axios.get(localHost + '/api/compliment/').then((res) => {
    const data = res.data;
    console.log(res.data);
    alert(data);
  });
};

complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
  axios.get(`${localHost}/api/fortune`).then((res) => {
    fortuneContainer.innerHTML = `<p> Your fortune is: "<span id="fortune-txt">${res.data}</span>"</p>
    <p id="change-txt">Don't like your fortune? Change it!</p>`;
  });
  changeFortuneForm.innerHTML =
    '<input type="text" id="change-fortune-txt"/><button>change fortune</button>';
};
document.getElementById('fortuneButton').addEventListener('click', getFortune);

let complimentForm = document.getElementById('compliment-form');

let addComplimentInput = document.querySelector('#add-compliment');

const addCompliment = (event) => {
  event.preventDefault();
  let input = { newCompliment: addComplimentInput.value };
  axios.post(`${localHost}/api/compliment`, input).then((res) => {
    alert(
      res.data.includes(input.newCompliment)
        ? `You added the following compliment:  "${input.newCompliment}"`
        : "couldn't add compliment"
    );

    selectCompliment.innerHTML += `<option value="${res.data.length - 1}">${
      input.newCompliment
    }</option>`;
  });
  addComplimentInput.value = '';
};

complimentForm.addEventListener('submit', addCompliment);

const getCompliments = () => {
  axios.get(`${localHost}/api/compliments/`).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      selectCompliment.innerHTML += `<option value="${i}">${res.data[i]}</option>`;
    }
  });
};
getCompliments();

const complimentDelete = (event) => {
  event.preventDefault();
  let id = selectCompliment.value;
  axios.delete(`${localHost}/api/compliment/${id}`).then((res) => {
    if (confirm(`You deleted compliment: "${res.data}"`)) {
      window.location.reload();
    }
  });
};

deleteForm.addEventListener('submit', complimentDelete);

const changeFortune = (event) => {
  event.preventDefault();
  const fortuneTxt = document.getElementById('fortune-txt');
  const changeInput = document.getElementById('change-fortune-txt');
  body = {
    newFortune: changeInput.value,
    existingFortune: fortuneTxt.innerHTML,
  };
  axios.put(`${localHost}/api/fortune/${fortuneTxt}`, body).then(
    (res) =>
      (fortuneContainer.innerHTML = `<p> Your fortune is: "<span id="fortune-txt">${res.data}</span>"</p>
    <p id="change-txt">Don't like your fortune? Change it!</p>`)
  );
};

changeFortuneForm.addEventListener('submit', changeFortune);
