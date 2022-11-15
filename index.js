let firstNames = (async () => {
  const rawResponse = await fetch(
    "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "madelyn@devpipeline.com",
        password: "jazz1187",
      }),
    }
  );
  const content = await rawResponse.json();
  let users = content.users;
  const obj = users.forEach((user) => {
    console.log(Object.values(user)[1]);
  });
})();

const domLeft = firstNames.body.createElement();
