const express = require("express");

const app = express();

app.get("/auth", (req, res) => {
  res.send(`
<html>
  <form action="${req.query.callback}">
    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</html>
`);
});

const PORT = process.env.PORT || 60000;
console.log(`Listening to port ${PORT}...`);
app.listen(PORT);
