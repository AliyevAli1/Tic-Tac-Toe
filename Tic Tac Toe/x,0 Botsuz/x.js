function myfunc() {
	var b1, b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	if (( b1 == 'X' && b2 == 'X' && b3 == 'X') || ( b1 == 'X' && b4 == 'X' && b7 == 'X') || ( b7 == 'X' && b8 == 'X' && b9 == 'X') || (b3 == 'X' && b6 == 'X' && b9 == 'X') || ( b1 == 'X' && b5 == 'X' && b9 == 'X') || ( b3 == 'X' && b5 == 'X' && b7 == 'X') || ( b2 == 'X' && b5 == 'X' && b8 == 'X') || ( b4 == 'X' && b5 == 'X' && b6 == 'X')) {
		for (i = 0; i < 9; i++) {
			document.getElementsByTagName("input")[i].disabled = true;
		  }
		document.getElementById('soz').innerHTML = "Oyuncu X qalibdir.";
		window.alert('Oyuncu X qalibdir.');
	}
	else if (( b1 == '0' && b2 == '0' && b3 == '0') || ( b1 == '0' && b4 == '0' && b7 == '0') || ( b7 == '0' && b8 == '0' && b9 == '0') || (b3 == '0' && b6 == '0' && b9 == '0') || ( b1 == '0' && b5 == '0' && b9 == '0') || ( b3 == '0' && b5 == '0' && b7 == '0') || ( b2 == '0' && b5 == '0' && b8 == '0') || ( b4 == '0' && b5 == '0' && b6 == '0')) {
		for (i = 0; i < 9; i++) {
			document.getElementsByTagName("input")[i].disabled = true;
		  }
		  document.getElementById('soz').innerHTML = "Oyuncu O qalibdir.";
		window.alert('0yuncu O qalibdir.');
	}
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print').innerHTML = "Oyun bərabərədir.";
			window.alert('Oyun beraberedir.');
	}
}
function myfunc_2() {
	location.reload();
}
	nese = 1;
	function myfunc_3(x) {
		if (nese == 1) {
			x.value = "X";
			x.disabled = true;
			nese = 0;
		}
		else {
			x.value = "0";
			x.disabled = true;
			nese = 1;
		}
	}

