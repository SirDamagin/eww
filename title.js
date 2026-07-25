import { exec } from "child_process";

exec(
  "playerctl metadata --format '{{title}}'",
  (error, output) => { // Elabora un comando dallo shell tramite string
    if (error) {       // E ti permette di controllare due risultati di output
      console.log("EWW Desktop Widgets");
      return;
    }

    console.log(output.trim());
  }
);