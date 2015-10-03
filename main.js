// var toastGroupTemplate = document.querySelector('#toastGroup');
// toastGroupTemplate.showToast = function() {
//   document.querySelector('#toast').show();
// }
// ;//.text("You can't remove the last light from a group.");
// document.onkeydown = function(e) {
//   // console.log(e)
// };
window.displayAlert = function(text){
  var toast = document.querySelector("paper-toast#toast");
  toast.text = text;
  toast.show();
}
window.triggerMouseEvent = function(node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
window.getRGBtoXY = function(r,g,b){
  // For the hue bulb the corners of the triangle are:
  // -Red: 0.675, 0.322
  // -Green: 0.4091, 0.518
  // -Blue: 0.167, 0.04
  // double[] normalizedToOne = new double[3];
  var normalizedToOne = [];
  var cred, cgreen, cblue;
  cred = r
  cgreen = g
  cblue = b
  normalizedToOne[0] = (cred / 255);
  normalizedToOne[1] = (cgreen / 255);
  normalizedToOne[2] = (cblue / 255);
  var red, green, blue;

  // Make red more vivid
  if (normalizedToOne[0] > 0.04045) {
      red = Math.pow((normalizedToOne[0] + 0.055) / (1.0 + 0.055), 2.4);
  } else {
      red = (normalizedToOne[0] / 12.92);
  }

  // Make green more vivid
  if (normalizedToOne[1] > 0.04045) {
    green =  Math.pow((normalizedToOne[1] + 0.055) / (1.0 + 0.055), 2.4);
  } else {
      green = (normalizedToOne[1] / 12.92);
  }

  // Make blue more vivid
  if (normalizedToOne[2] > 0.04045) {
    blue = Math.pow((normalizedToOne[2] + 0.055)/ (1.0 + 0.055), 2.4);
  } else {
      blue = (normalizedToOne[2] / 12.92);
  }

  X = (red * 0.649926 + green * 0.103455 + blue * 0.197109);
  Y = (red * 0.234327 + green * 0.743075 + blue * 0.022598);
  Z = (red * 0.0000000 + green * 0.053077 + blue * 1.035763);

  x = X / (X + Y + Z);
  y = Y / (X + Y + Z);

  var xy = [];
  xy[0] = x;
  xy[1] = y;
  // List<Double> xyAsList = Doubles.asList(xy);
  return xy;
}