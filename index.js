(async () => {
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
  console.log(users);
})();
