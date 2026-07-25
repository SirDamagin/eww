import { exec } from "child_process";

exec(
  "playerctl metadata --format '- {{artist}}'",
  (error, output) => { // Elabora un comando dallo shell tramite string
    if (error) {       // E ti permette di controllare due risultati di output
      console.log("- SirDamagin");
      return;
    }
    console.log(output.trim());
  }
);
