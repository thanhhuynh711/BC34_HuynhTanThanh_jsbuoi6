// Bài tập 1
document.getElementById("btnsubmit1").onclick = function () {
  var m = 0;
  var sum = 0;
  while (sum <= 10000) {
    m++;
    sum = sum + m;
  }

  document.getElementById("thongBao1").innerHTML = m;
};

// Bài tập 2
document.getElementById("btnsubmit2").onclick = function () {
  var soX = document.getElementById("soX").value * 1;
  var soN = document.getElementById("soN").value * 1;

  var total = 0;
  var count = 0;
  do {
    total += soX ** count;
    count++;
  } while (count <= soN);
  var ketQua = total - 1;

  document.getElementById("thongBao2").innerHTML = ketQua;
};

// Bài tập 3
document.getElementById("btnsubmit3").onclick = function () {
  var number3 = document.getElementById("number3").value * 1;
  var sum = 1;
  for (var i = 1; i <= number3; i++) {
    sum *= i;
  }

  document.getElementById("thongBao3").innerHTML = sum;
};

// Bài tập 4
document.getElementById("btnsubmit4").onclick = function () {
  var content = "";
  var soChan =
    "<div style='background-color: red; color: white; padding: 6px;'>" +
    "Số chẵn" +
    "</div>";
  var soLe =
    "<div style='background-color: blue; color: white; padding: 6px;'>" +
    "Số lẻ" +
    "</div>";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += soChan;
    } else {
      content += soLe;
    }
  }
  document.getElementById("thongBao4").innerHTML = content;
};
