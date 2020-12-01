const path = require('path');
const fs = require('fs');
const root = path.join(__dirname, './ui/vk');

export async function getStatic(req, res) {
  console.log('get static ' + req.path);
  fs.stat(root + req.path, function(err) {
    if (err) {
      res.sendFile('index.html', {root});
    } else {
      res.sendFile(req.path, {root});
    }
  });
}
