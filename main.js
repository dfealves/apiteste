function getDados() {
  // const formData = new FormData();

  // formData.append("username", "performaweb");
  // formData.append("token", "pTspjI1jYxQngonfgbSPa");

  // var request = new XMLHttpRequest();
  // request.open("POST", "https://www.api.performaweb.com.br/teste/");
  // request.send(formData);

  // console.log();

  const url = "https://www.api.performaweb.com.br/teste/";

  const auth = {
    username: "performaweb",
    token: "pTspjI1jYxQngonfgbSPa"
  };

  // create request object
  const request = new Request(url, {
    method: "POST",
    body: auth,
    headers: new Headers({
      "Content-Type": "multipart/form-data"
    })
  });

  // pass request object to `fetch()`

  fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));
}
