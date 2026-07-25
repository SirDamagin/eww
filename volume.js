import { exec } from "child_process";


exec(
  `wpctl get-volume $(wpctl status | grep -i brave | grep -oP '\\d+' | tail -1) | awk '{print $2}'`,
  (error, output) => { // Elabora un comando dallo shell tramite string
    if (error) {       // E ti permette di controllare due risultati di output
      console.log(0);
      return;
    }

    console.log(output*100);
  }
);