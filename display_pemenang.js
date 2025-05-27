function ambil_pemenang()
{
	var kpr = document.getElementById("kpr").value;
	//alert (kpr);

	var pemenangJSON;
	var lastPemenangJSON;
	var response;
	var pemenang;
	var txtPemenang;
	var jmlPemenang;

	$.ajax({
		type: 'POST',
		url: 'ajax_pemenang_list.php',
		data: {kpr:kpr},
		dataType: 'text',
		cache: false,
		success: function(result) {
			//LIST PEMENANG
			response=JSON.parse(result);
			pemenangJSON = response["data"];
			//alert(pemenangJSON);
			jmlPemenang = pemenangJSON.length;
			//alert (jmlPemenang);
			var no;
			var no_agen;
			var nama;
			var polis;
			var kpr;
			
			for (i = 0; i < jmlPemenang; i++) 
			{
				pemenang = pemenangJSON[i].split("-");
				no = pemenang[0];
				no_agen = pemenang[1];
				nama = pemenang[2];
				polis = pemenang[3];
				kpr = pemenang[4];
				
				txtPemenang += "<tr><td align='center'>" + no + "</td><td align='center'>" + no_agen + "</td><td align='left'>" + nama + "</td><td align='center'>"+ polis + "</td><td align='center'>"+ kpr + "</td></tr>";
			}
			//alert(txtPemenang);

			//$('#tbl_pemenang').html('');
			$('#tbl_pemenang').html(txtPemenang);
			
		},
		error: function(result) {
			alert("error");
		},
	});
}



$(document).ready(function(e) 
{
	ambil_pemenang(); //AMBIL DAFTAR PEMENANG
});