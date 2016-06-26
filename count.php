<?php

	if (file_exists('count_file.txt'))
	{
		$fil = fopen('count_file.txt', r);
		$dat = fread($fil, filesize('count_file.txt'));
		fclose($fil);
		$fil = fopen('count_file.txt', w);
		fwrite($fil, $dat+1);
	}

	else
	{
		$fil = fopen('count_file.txt', w);
		fwrite($fil, 1);
		fclose($fil);
	}
?>
