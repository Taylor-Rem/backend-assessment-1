const localHost = 'http://localhost:4000';

const complimentBtn = document.getElementById('complimentButton');

const getCompliment = () => {
  axios.get(localHost + '/api/compliment/').then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener('click', getCompliment);

const fortuneBtn = document.getElementById('fortuneButton');

const getFortune = () => {
  axios.get(`${localHost}/api/fortune`).then((res) => {
    alert(res.data);
  });
};

fortuneBtn.addEventListener('click', getFortune);
