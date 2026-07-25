import { exec } from "child_process";


exec(
  "playerctl position",
  (error, output) => { // Elabora un comando dallo shell tramite string
    if (error) {       // E ti permette di controllare due risultati di output
      console.log("Nessun media :(");
      return;
    }

    console.log(output);
  }
);
