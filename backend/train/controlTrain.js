export async function controlTrain(getHub) {
  const hub = getHub;
  // console.log("hub from controlTrain:", hub);

  const portName = process.env.LEGO_PORT;
  const motor = await hub.waitForDeviceAtPort(portName);
  // console.log("motor:", motor);
}
