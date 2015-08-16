var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

app.on('window-all-closed', function(){
  app.quit();
});

app.on('ready',function(){
  win = new BrowserWindow({width:1000,height:800});
  win.loadUrl('file://' + __dirname + '/app/index.html');
});
