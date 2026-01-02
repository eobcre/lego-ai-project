const { PoweredUP } = require('node-poweredup');

const poweredUP = new PoweredUP();

poweredUP.on('discover', async (hub) => {
  console.log(`Discovered: ${hub.name}`);

  try {
    await hub.connect();
    console.log('Connected!!!');
  } catch (e) {
    console.error('Connect failed:', e);
  }
});

poweredUP.scan();
console.log('Scanning for hubs...');
