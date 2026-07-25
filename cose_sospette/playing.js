import { exec } from "child_process";

exec(
  `#!/bin/bash
cava -p <(cat <<EOF
[general]
bars = 23
[output]
method = raw
raw_target = /dev/stdout
data_format = ascii
ascii_max_range = 7
EOF
) | sed -u 's/;//g;s/0/▁/g;s/1/▂/g;s/2/▃/g;s/3/▄/g;s/4/▅/g;s/5/▆/g;s/6/▇/g;s/7/█/g;'`,
  (error, output) => { // Elabora un comando dallo shell tramite string
    if (error) {       // E ti permette di controllare due risultati di output
      console.log("EWW Desktop Widgets");
      return;
    }

    console.log(output.trim());
  }
);