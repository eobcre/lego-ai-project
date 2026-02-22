import { PoweredUP } from "node-poweredup";

/* 
get powered-up hub object test
- scan and get hub object
- timer is set to 20 sec to scan
- if hub is not found promise will return reject
- if hub is found promise will return resolve and get hub object
*/

export async function connectTrain() {
  // lego powered-up instance
  const poweredUP = new PoweredUP();

  // timer time
  const discoverTimeoutMs = 20000;

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

  // console.log("hub:", hub);
  // console.log("uuid:", hub.uuid);

  return hub;
}
