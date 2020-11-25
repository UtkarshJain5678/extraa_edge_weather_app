
export const fetchData = async () => {
    try {
        const key="3fbb2b31fd3e77c536be64abc677a4d1";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=agra&appid=${key}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };