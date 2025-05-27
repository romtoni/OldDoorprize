var randomize;

function jsrandom()
{
	var txtnominator_list = document.getElementById("txtnominator_list").value;
	if (txtnominator_list == "[]") 
	{
		 alert("Maaf, sudah tidak ada nominator lagi"); 
		 document.getElementById('btnstop').click(); 
	}
	else
	{
		var txtnominator_list = txtnominator_list.replace('[','',txtnominator_list);
		var txtnominator_list = txtnominator_list.replace(']','',txtnominator_list);
		var txtnominator_list = txtnominator_list.replace(/"/g,'',txtnominator_list);
	
		var nominator = txtnominator_list.split(",");
		var jmldata = (nominator.length - 1);
		var array_nominator = [];
		
		for (i=0; i<=jmldata; i++) array_nominator.push(nominator[i]);
		var rand = array_nominator[Math.floor(Math.random() * array_nominator.length)];
		document.getElementById("lblnominator").innerHTML=rand;
		document.getElementById("txtnominator").value=rand;
	}
	
}

function ambil_nominator()
{
	var kpr = document.getElementById("kpr").value;
	
	var nominatorJSON;
	$.ajax({
		type: 'POST',
		url: 'ajax_nominator.php',
		data: {kpr:kpr},
		dataType: 'json',
		cache: false,
		success: function(result) {
			//$('#lblnominator_list').html(result[0]);
			$('#lblmessage').html('');
			nominatorJSON=JSON.stringify(result);
			$('#txtnominator_list').val(nominatorJSON);
		},
		error: function(result) {
			alert("error");
		},
	});
}

function insert_pemenang(kpr)
{
	var nominator = document.getElementById("txtnominator").value;
	var nominator_split = nominator.split("-");
	
	var stambuk = nominator_split[0];
	var nama = nominator_split[1];
	$.ajax({
		type:'POST',
		data:{kpr:kpr},
		url:"ajax_pemenang.php", //php page URL where we post this data to save in databse
		success: function(result){
			$('#lblnominator').html('');
			$('#lblmessage').html(result);
			
			var halaman = document.getElementById("halaman").value;
			window.open('doorprize_'+halaman+'_pemenang.html');
		}
	})
}

function ganti_halaman(halaman_param)
{
	var halaman = halaman_param;
	if  (halaman !== "") window.location.href='doorprize_'+halaman+'.html';
	else window.location.href='index.html';
}



$(document).ready(function(e) 
{
	document.getElementById("btnstart").src="start.png";
	document.getElementById("btnstop").src=""; //kosongkan

	document.getElementById("btnstop").style.display="none";
	document.getElementById("btnstart").style.display="block";
	
	$('#btnstart').click(function(){
		ambil_nominator(); //AMBIL DAFTAR NOMINATOR
		randomize = setInterval(function(){ jsrandom(); }, 1); //ACAK DATA
		
		document.getElementById("btnstart").src="start.png";
		document.getElementById("btnstop").src="stop.png";
			
		document.getElementById("btnstop").style.display="block";
		document.getElementById("btnstart").style.display="none";
	});

	$('#btnstop').click(function(){
		clearInterval(randomize); //STOP PENGACAKAN DATA
		var kpr = document.getElementById("kpr").value;
		insert_pemenang(kpr); //MASUKKAN PEMENANG KE TABEL
		
		document.getElementById("btnstart").src="start.png";
		document.getElementById("btnstop").src="stop.png";
		
		document.getElementById("btnstop").style.display="none";
		document.getElementById("btnstart").style.display="block";
	
	});
});