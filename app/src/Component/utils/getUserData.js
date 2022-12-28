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
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJwcFdPdXZFU3U2OE9nVjJGaWcwajA1d1NoUGNwdWs1cW5VYUtZRTgxTWt5emdJQW9iSCIsImp0aSI6IjY1MzkxNDE2ZTMwYmI3NGQ2N2NmM2E4MWEwZjExMDk3MzhhMGVlYzVmMjE0Y2NlMmI2M2E1ZDVkZGRhNTM5ZWUzNDNiMjA1YjI5Y2JlYzNlIiwiaWF0IjoxNjcyMjY0MTMzLCJuYmYiOjE2NzIyNjQxMzMsImV4cCI6MTY3MjI2NzczMywic3ViIjoiIiwic2NvcGVzIjpbXX0.rr8KBjjBLTJX2Zs6wA5Rt1J-RWdh-KsNlarnpdr2AQsGx15W_lt2rSJA4iUTufNJu2GHgXcWjxojBd8jORD3RXVBSzGu3GlF6LRd0x-GXRSBXYJQ4t5x-TPTYAPVm6QG45q9BPFFhLzFxjp2REs3zY_XhSDEHCRzrIgi1TZEFOKBr8h--_wHTkFSDeLo-jkv8WJswfQpzrZ0_l6SQ5YjD2GJVFIMsZDjZeAfjkRxr-RyywVzPsusWKMPnMOsXl_cbIv9YFhTqMFprdeERXGkCPOd81V1JC5Q9w_2aJWSYce_YGyRHgahSvxOTz4WDmNZ1YO8BKrhBnnVir_0LsUixw",
      },
    }
      ).then(checkResponse);
  };
 