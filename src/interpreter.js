// Simple Programming Language Interpreter in JavaScript

function run(code) {
  const lines = code.split("\n");

  for (let line of lines) {
    line = line.trim();

    // PRINT command
    if (line.startsWith("print")) {
      const text = line.replace("print", "").trim();
      console.log(text.replace(/"/g, ""));
    }

    // ADD command
    else if (line.startsWith("add")) {
      const parts = line.split(" ");

      if (parts.length === 3) {
        const a = Number(parts[1]);
        const b = Number(parts[2]);
        console.log(a + b);
      } else {
        console.log("Error: add requires two numbers");
      }
    }
  }
}

// Example program
const program = `
print "Hello world"
add 2 3
`;

run(program);
