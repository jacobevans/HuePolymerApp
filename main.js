// var toastGroupTemplate = document.querySelector('#toastGroup');
// toastGroupTemplate.showToast = function() {
//   document.querySelector('#toast').show();
// }
// ;//.text("You can't remove the last light from a group.");
window.displayAlert = function(text){
  var toast = document.querySelector("paper-toast#toast");
  toast.text = text;
  toast.show();
}