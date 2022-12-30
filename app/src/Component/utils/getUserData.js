const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    return response.json();
  };
  
  export const getUserData = (url) => {
    return fetch(url
       ,
    {
      method: "GET",

      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJwcFdPdXZFU3U2OE9nVjJGaWcwajA1d1NoUGNwdWs1cW5VYUtZRTgxTWt5emdJQW9iSCIsImp0aSI6ImJkMmEwNzM5YjUxN2IzNGMzNzlhODU4M2FhZTIwZGZhOGUxODgxMDgwNGE1ZThhMWQwOTcyNzJiOTcxNjY3YWRjN2Q3ODcwOTE5NjY5YzQ0IiwiaWF0IjoxNjcyNDE4NDkxLCJuYmYiOjE2NzI0MTg0OTEsImV4cCI6MTY3MjQyMjA5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.U7nQcRsL19WQ1JlsrtgjDROsZnfW500ZuRrN06iwCHiHEGQQDK75VSYUVmqPXkFwktMObSjE5saBrkRaKogpb-iW2nhdmPHA2KG05zSmPzl7fiKvUTTPZRhaO0j-yoOPgCBOH3qmVK8JC_m3Z4gcyaUrN0tqyTNjfTHdn6ndxnD2gSM2ROzi4e94KLDDUoJDCRKRQHo6VbwR89jX6EaIiW7M00sAlmE_PDXfTH2Khy7YWgjfV_5TyBpn22JjAe9LT0JQTwyhXWOkGlkFSdfOreCmr1EXWSgL1G0xrsfldk1oBWYH4YnxBhEIjx6t-kKfhHQUojHt6F3p0dUPnIBfig"
        
      },
    }
      ).then(checkResponse);
  };
 