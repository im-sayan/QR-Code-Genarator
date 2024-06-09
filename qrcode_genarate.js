const fs = require('fs');
const QRCode = require('qrcode');

let data = {
    name: "Employee Name",
    age: 27,
    department: "Police",
    id: "aisuoiqu3234738jdhf100223"
}

let stringdata = JSON.stringify(data)

QRCode.toDataURL(stringdata, function(err, code) {
    if (err) return console.log("error occurred")
    fs.writeFileSync('qrcode.png', code.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    console.log("QR code saved to file: qrcode.png");
});