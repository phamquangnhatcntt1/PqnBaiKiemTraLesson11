import axios from 'axios';

axios.get('https://668b4f3f0b61b8d23b0914fd.mockapi.io/pqnApi/v1/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // Request made and server responded with a status code
      console.log(error.response.data); // lỗi từ server
      console.log(error.response.status); // mã lỗi từ server
      console.log(error.response.headers); // headers từ server
    } else if (error.request) {
      // Yêu cầu được gửi nhưng không có phản hồi
      console.log(error.request);
    } else {
      // Xảy ra lỗi khi thiết lập yêu cầu
      console.log('Error', error.message);
    }
    console.log(error.config);
  });