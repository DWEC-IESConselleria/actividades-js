function fecha() {
     var d = new Date();
     alert(d.toUTCString());
}

setTimeout("fecha();", 2000);
