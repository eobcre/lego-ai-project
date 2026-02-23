/* 
motor api
*/

export async function controlTrain(getHub) {
  const hub = getHub;
  // console.log("hub from controlTrain:", hub);

  const portName = process.env.LEGO_PORT;
  const motor = await hub.waitForDeviceAtPort(portName);
  // console.log("motor:", motor);
  // console.log("portName:", portName);

  const motorApi = {
    forward: async (speed) => {
      await motor.setPower(speed);
    },
    backward: async (speed) => {
      await motor.setPower(-speed);
    },
    stop: async () => {
      await motor.setPower(0);
    },
  };

  return motorApi;
}
