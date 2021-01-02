loadDownloadLinkByIndex = function (sheetIndex) {
  var url = "http://furkanturan.com/sheets/";
  url = url.concat(sheetTitles[sheetIndex].replace(" ","_"));
  url = url.concat(".pdf");
  document.getElementById("downlink").href=url;
}
  
loadDownloadLinkByName= function (sheetName) {
  var url = "http://furkanturan.com/sheets/";
  url = url.concat(sheetName.replace(" ","_"));
  url = url.concat(".pdf");
  document.getElementById("downlink").href=url;
}