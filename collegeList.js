var axios = require('axios');

 function getCollegeList(from , success , failure){
  var result;
  console.log("Getting data from : "+from);
  var data = JSON.stringify({
    "config": {
      "size": 15,
      "from": from,
      "highlight": "name"
    },
    "criteria": {}
  });
  
  var config = {
    method: 'post',
    url: 'https://cs-search-api-prod.collegeplanning-prod.collegeboard.org/colleges',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(response => {
    // console.log("response finish...");
    // console.log(response.data);
    // result=  response;
    success(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 
}
module.exports = (from, success , failure) => getCollegeList(from , success , failure)


