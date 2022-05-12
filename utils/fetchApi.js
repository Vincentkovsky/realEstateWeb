import axios from 'axios'

export const baseUrl= 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url),{
        headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'f9dc88b713mshe746dab1c21c03dp1b5991jsn2f66233eca0c'
  }
    })

    return data;
}

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f9dc88b713mshe746dab1c21c03dp1b5991jsn2f66233eca0c'
//   }