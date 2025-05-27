<?php
	include("config.php");
	
	$kpr = $_POST['kpr']; 
	$user_create = 'PENGUNDI';

	//DEFINED VALUES
	$pemenangJSON = array();
	$listPemenang = array();
	
	//AMBIL LIST PEMENANG
	$sql_list_pemenang = "SELECT 
								NO_AGEN, 
								NAMA, 
								POLIS, 
								KPR 
							FROM 
								TM_PEMENANG_KPR 
							WHERE 
								KPR = '$kpr'";
	//echo $sql_list_pemenang;							
								
	$q_list_pemenang = mysqli_query($connection,$sql_list_pemenang);
	$no = 0;
	while($row_list_pemenang = mysqli_fetch_array($q_list_pemenang))
	{
		$no++;
		$pemenang=$no."-".$row_list_pemenang['NO_AGEN']."-".$row_list_pemenang['NAMA']."-".$row_list_pemenang['POLIS']."-".$row_list_pemenang['KPR'];
		array_push($listPemenang, $pemenang);
	}
		

	//RESPONSE DATA	
	$pemenangJSON = array("status" => "200", 
							"message" => "OK", 
							"data" => $listPemenang);
	
	mysqli_close($connection);
	echo json_encode($pemenangJSON);
	
?>