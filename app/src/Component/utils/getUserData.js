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
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJwcFdPdXZFU3U2OE9nVjJGaWcwajA1d1NoUGNwdWs1cW5VYUtZRTgxTWt5emdJQW9iSCIsImp0aSI6ImVlZDQ3ZmZlNjNjODMwNjFiMTliZWIzMDUyNTFlMjVmZmZhZTYwMGM0OTQ2M2IzMmE2NDkxNjc5ZDk4ZTA2YWY2NTc1ZmEzNTgzMWNjZjVlIiwiaWF0IjoxNjcyMjcyMTE0LCJuYmYiOjE2NzIyNzIxMTQsImV4cCI6MTY3MjI3NTcxNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Twq82DNp3yODzGjMNZ-8oz3-yvze2TNy3oIjRUdhge55nW-NelOc8j7XqCgo8i_GN0uD1hK1i00_GLyfQrPNR_zrZBWYS8zgwwZ--gyGZqmXVd-FTyPvFiKiMqfI67GtPHfC3aat72QDvSs1AxLDlNakTeU4r4igrDDF2VKP97ao8tlV7tbGQoH_7wWNq3ZvvGQFamZxHmWTVTtWx0g8gsO6t4CosN1ZtwsB7W2LZ4eNUahTFomBVWw7pTnWoADSiJn1_vfnK9-LozmfrGOOyMJ2VbjJCmS317_cD0SnzHYJcyrkjCJ543flcuezSFLzwDLL06CfTAVI27D4aDcTjg",
      },
    }
      ).then(checkResponse);
  };
 