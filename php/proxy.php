<?php
    $request_body = file_get_contents('php://input');

    $username = 'malachipartlow@southern.edu';
    $password = 'partlow8';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://login.southern.edu/adfs/ls?version=1.0&action=signin&realm=urn%3AAppProxy%3Acom&appRealm=f26b5faf-cc06-e411-80c3-005056a86eb0&returnUrl=https%3A%2F%2Fmyaccess.southern.edu%2F%3F_ga%3D1.243127883.813319874.1479507497&client-request-id=C467D82A-7FB7-0000-3EC0-08C5B77FD201');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'username='.$username.'&password='.$password );
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_COOKIEJAR, '/cookie.txt');
    curl_setopt($ch, CURLOPT_COOKIEFILE, '/cookie.txt');

    curl_exec($ch);

    curl_setopt($ch, CURLOPT_URL, "https://portal.southern.edu/wsa/application/jsonrpc/FinancialAidCalculator/Calculate");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);
    curl_setopt($ch, CURLOPT_HTTPHEADER,
               array('Content-Type:application/json',
                      'Content-Length: ' . strlen($request_body))
               );

    $output = curl_exec($ch);

    //var_dump($request_body);

    //print curl_strerror(curl_errno($ch));
    
    curl_close($ch);     

    print $output;
?>