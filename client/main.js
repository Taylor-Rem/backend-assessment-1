const localHost = 'http://localhost:4000';

const complimentBtn = document.getElementById('complimentButton');

const getCompliment = () => {
  axios.get(localHost + '/api/compliment/').then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
  axios.get(`${localHost}/api/fortune`).then((res) => {
    alert(res.data);
  });
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
  });
  addComplimentInput.value = '';
};

complimentForm.addEventListener('submit', addCompliment);
