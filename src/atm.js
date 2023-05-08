const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = {
  name: "user",
  password: "password",
  balance: 120000,
};

const question1 = () => {
  return new Promise((resolve, reject) => {
    const enteredUser = prompt("Enter your Username:");
    if (enteredUser === user.name) {
      resolve();
    } else {
      console.log("can't find username");
      question1();
    }
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.setPrompt("Password : ");
    rl.prompt();

    rl.on("line", (input) => {
      if (input !== user.password) {
        console.log("\n Wrong password \n");
        rl.prompt();
      } else {
        rl.close();
        resolve();
      }
    });
  });
};

const main = async () => {
  try {
    await question1();
    await question2();
  } catch (error) {
    console.log(error);
  }
  rl.close();
};

main();
