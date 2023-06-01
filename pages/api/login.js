const handler = (request, response) => {
  const { email, password } = request.body;

  
  if (email === "chandansutradhar2@gmail.com" && password === "123456") {
    response.status(200).json({ message: "Welcome back!" });
  } else {
    response.status(400).json({ message: "Invalid credentials" });
  }
};

export default handler;
