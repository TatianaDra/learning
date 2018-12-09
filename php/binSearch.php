<?php
function binsearch($keyForSearch, $fileWithData)
{
	$Values=file_get_contents($fileWithData, true);
	$arrOfValues = explode("\x0A", $Values);
	
foreach ($arrOfValues as $key => $value)
		{ 
		
	$arr[] =explode("\t", $value);
		
		
		}
		$start=0;
		$end=count($arr)-1;
		//echo $end;
		//$middle= floor(($start+$end)/2);
		//echo $arr[$middle][0];
		//echo $keyForSearch;
			while ($start<$end) 
				
		{
	$middle= floor(($start+$end)/2);
	$compare=strnatcmp ($arr[$middle][0], $keyForSearch);
	
	if ($compare>0)
			{
				$end=$middle-1;
				//echo $end;
							
			}
				elseif ($compare<0)
			{
				$start=$middle+1;
				//echo $arr[$start][1];
				
			}
			 
			elseif ($compare==0) { 
			return $arr[$middle][1];
			}
			
		}
		return 'undef';
}
	
echo binsearch ('key4', './valuesForProgramm.txt');

