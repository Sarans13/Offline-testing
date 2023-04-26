// const connectButton = document.getElementById("connectButton");
// connectButton.addEventListener("click", connectToDevice);


// async function connectToDevice() {
//     const device = await navigator.bluetooth.requestDevice({
//       acceptAllDevices: true
//     });
//     const server = await device.gatt.connect();
//   }

  
//   async function sendMessage() {
//     const message = document.getElementById("messageInput").value;
//     const encoder = new TextEncoder();
//     const value = encoder.encode(message);
//     await server.getPrimaryService('generic_access').getCharacteristic('device_name').writeValue(value);
//   }



let device;
let server;

const connectButton = document.getElementById("connectButton");
connectButton.addEventListener("click", connectToDevice);

async function connectToDevice() {
    try {
        device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        });
        server = await device.gatt.connect();
    } catch (error) {
        console.log('Error:', error);
    }
}

async function sendMessage() {
    try {
        const message = document.getElementById("messageInput").value;
        const encoder = new TextEncoder();
        const value = encoder.encode(message);
        const service = await server.getPrimaryService('generic_access');
        const characteristic = await service.getCharacteristic('device_name');
        await characteristic.writeValue(value);
    } catch (error) {
        console.log('Error:', error);
    }
}

