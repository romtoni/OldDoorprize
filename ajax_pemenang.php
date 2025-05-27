<?php
	include("config.php");
	$kpr = $_POST['kpr']; 
	//$kpr = $_GET['kpr']; 
	$user_create = 'PENGUNDI';
	
	//MAX PEMENANG
	$sql_count = "SELECT MAX_PEMENANG FROM REF_PEMENANG_KPR WHERE KPR = '$kpr'";
	$q_count = mysqli_query($connection,$sql_count);
	$row_count = mysqli_fetch_array($q_count);
	$max_pemenang = $row_count["MAX_PEMENANG"];
	
	//JML PEMENAG SEKARANG
	$sql_count = "SELECT COUNT(*) AS JML_PEMENANG FROM TM_PEMENANG_KPR WHERE KPR = '$kpr'";
	$q_count = mysqli_query($connection,$sql_count);
	$row_count = mysqli_fetch_array($q_count);
	$total_pemenang_skrg = $row_count["JML_PEMENANG"];
	
	if ($total_pemenang_skrg < $max_pemenang)
	{
		///INSERT PEMENANG
		$sql_pemenang = "INSERT INTO TM_PEMENANG_KPR(NO_AGEN, NAMA, POLIS, KPR, TGL_CREATE, USER_CREATE)
							SELECT
									A.NO_AGEN, 
									A.NAMA, 
									A.POLIS,
									A.KPR,
									now() AS TGL_CREATE, 
									'$user_create' AS USER_CREATE
							FROM
								TM_NOMINATOR_KPR A
							WHERE 
								KPR = '$kpr'
							ORDER BY RAND()
							LIMIT $max_pemenang";
		$q_pemenang = mysqli_query($connection,$sql_pemenang);

	}
	mysqli_close($connection);

?>