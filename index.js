const firstNames = (async () => {
  const rawResponse = await fetch(
    "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "matthewcaldwell2033@gmail.com",
        password: "registered",
      }),
    }
  );
  const content = await rawResponse.json();
  let users = content.users;
  const obj = users.forEach((user) => {
    console.log(Object.values(user)[1]);
  });
})();

firstNames.catch((err) => console.error("something went wrong", err));
