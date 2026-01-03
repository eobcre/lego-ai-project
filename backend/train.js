import { PoweredUP } from "node-poweredup";

const poweredUP = new PoweredUP();

// test
const SPEED = 30;
const RUN_MS = 1000;

// sleep function for stable connect to bluetooth
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

poweredUP.on("discover", async (hub) => {
  // hub # not showing in my end so uuid instead
  console.log("uuid:", hub.uuid);

  poweredUP.stop();

  // connect to hub
  hub.connect().catch(() => {});

  // 3 seconds connection to be stable
  await sleep(3000);

  if (!hub.connected) {
    console.log("Hub not connected.");
    return;
  }

  console.log("Connected!!!");

  // hub port check
  const motor = await hub.waitForDeviceAtPort("B");
  // console.log("Motor detected:", motor.constructor.name);
  
  console.log("RUN");
  // run
  motor.setPower(SPEED);

  await sleep(RUN_MS);

  console.log("STOP");
  // stop
  motor.setPower(0);

  process.exit(0);
});

poweredUP.scan();
console.log("Scanning...");
