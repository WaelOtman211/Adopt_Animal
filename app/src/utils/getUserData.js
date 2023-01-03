const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    return response.json();
  };
 
  export const getUserData = async (url) => {
   let data = await getToken();
return fetch(url,{method: "GET",headers: {"Authorization": "Bearer "+data.access_token}}).then(checkResponse);
 }
 

  
   const getToken=async ()=>{
     console.log("getting token")
 let res=  await  fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': 'ppWOuvESu68OgV2Fig0j05wShPcpuk5qnUaKYE81MkyzgIAobH',
        'client_secret': 'sTxK2leTzApWAddxLPRYZ3sKmyf5npAiuDGXAeoD'
    })})
    
    let data =await  res.json()
   
 return data;
}

  