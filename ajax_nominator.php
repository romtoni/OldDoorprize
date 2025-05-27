<?php
	include("config.php");
	
	$kpr = $_POST['kpr']; 
	
	$nominatorJSON = array();
	$sql = "SELECT 
				NO_AGEN, 
				NAMA, 
				POLIS, 
				KPR 
			FROM 
				TM_NOMINATOR_KPR 
			WHERE 
				KPR = '$kpr'
				AND NO_AGEN NOT IN (SELECT NO_AGEN FROM TM_PEMENANG_KPR WHERE KPR = '$kpr')";
	
	$q=mysqli_query($connection, $sql);
	while($row=mysqli_fetch_array($q))
	{               
		$nominator=$row['NO_AGEN']."-".$row['NAMA'];
		array_push($nominatorJSON, $nominator);
	}
	mysqli_close($connection);
	//print_r($nominatorJSON);
	echo json_encode($nominatorJSON);
?>