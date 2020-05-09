function test() {
  if (event.key == "Enter") {
    let a = document.getElementById("exampleInputEmail1").value;
    alert(a);
  }
}

eel.expose(test);
function test() {
  if (event.key == "Enter") {
    let a = document.getElementById("exampleInputEmail1").value;
    eel.passKeywordToPython(a);
  }
}
