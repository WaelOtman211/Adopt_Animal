const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    return response.json();
  };
 let token=""; 
  export const getUserData =  (url) => {
   
return fetch(url
    ,
 {
   method: "GET",

   headers: {
     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJwcFdPdXZFU3U2OE9nVjJGaWcwajA1d1NoUGNwdWs1cW5VYUtZRTgxTWt5emdJQW9iSCIsImp0aSI6ImExMWFlZDFhNWNlOTlkZmE0MTY2MmNkYmZmMzkwODc3MWI1ZjZmNGVhOGRiMmU4YjUzMTU5MWJlMGIxOGYyNDRkNDc1YjZlYTYwNjQxNDQ4IiwiaWF0IjoxNjcyNDk3NDI1LCJuYmYiOjE2NzI0OTc0MjUsImV4cCI6MTY3MjUwMTAyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.aP4iusFjocSTzEyepkBCwdHIdiF1sUCzWrCznB_PW2D_Y0j6DNk_w54vTWSgdWo10iLc5v_kWBBg3Cu-uWuQ3Ym9_xgA5WnLWsW0FVHSjFpy5YcQU1IjTykN6zZBXH-EAJ0QPi6Qc9Jt3XlWTaTK3-q-P43vYbw9gvrecCEcreLKWRPNCC6VS-SQrd_mdkCCVs21R4iuw7Ln16dUuNB_bOkkSpqBE6crmihMa-MwuSvvFRr6NqYC8HmVel8VbfAMULeGQ2ia5-QycCGaZJbbDOpH7dtmEGZoQviPj8rBoP1HT2E6vjgKW4SVD5z_mLbsy-T5nazh9ynQmLouiGTSiw"
     
   },
 }
   ).then(checkResponse);


   
  }
 

  
  export const getToken=()=>{
     console.log("getting token")
    fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': 'ppWOuvESu68OgV2Fig0j05wShPcpuk5qnUaKYE81MkyzgIAobH',
        'client_secret': 'sTxK2leTzApWAddxLPRYZ3sKmyf5npAiuDGXAeoD'
    })}).then(res=>res.json()).then(data=>{
  token=data.access_token;
})

  }