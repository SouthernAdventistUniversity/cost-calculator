<?php
    $request_body = file_get_contents('php://input');

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://genesis.intranet.southern.edu:8310/financialaidcalculator/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);
    curl_setopt($ch, CURLOPT_HTTPHEADER,
               array('Content-Type:application/json',
                      'Content-Length: ' . strlen($request_body))
               );

    $output = curl_exec($ch);
    curl_close($ch);

    print $output;