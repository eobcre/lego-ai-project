import { PoweredUP } from "node-poweredup";
import { sleep } from "../../utils/sleep.js";

/* 
connect hub test
- get connect method in hub object to connect
*/

export async function connectTrain() {
  // lego powered-up instance
  const poweredUP = new PoweredUP();

  // default ms
  const discoverTimeoutMs = 20000;
  const connectWaitMs = 1000;

  // ** scan and get hub **
  const hub = await new Promise((resolve, reject) => {
    // set the timer in case hub is not found
    const timer = setTimeout(() => {
      poweredUP.stop();
      reject(new Error("Hub not found."));
    }, discoverTimeoutMs);

    // when hub is found
    poweredUP.on("discover", async (hub) => {
      clearTimeout(timer);
      poweredUP.stop();
      resolve(hub);
      console.log("Hub is found.");
    });
    // scan and find
    poweredUP.scan();
    console.log("Scanning...");
  });

  hub.connect();
  await sleep(connectWaitMs);

  if (!hub.connect) {
    throw new error("Hub is not connected.");
  }

  console.log("Connected!!!");

  // console.log("hub:", hub);
  // console.log("uuid:", hub.uuid);
}
