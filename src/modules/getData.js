const getData = (str) => {
  return fetch(
    `https://test-55330-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
};

export default getData;


// ? для реального проекта применяется query-запрос (файрбейс такое не умеет)
// `https://test-55330-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`