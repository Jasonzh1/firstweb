import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function WeatherWidget() {
    const [posts, setPosts] = useState([]);
    let cold = ""
    
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=49.25&lon=-123.24&units=metric&appid=0ff9b8168b589fb3dd33ca2e16bc8296')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error(error);
          });       
    }, []);

    if (!posts.current) return <p>Sorry! I ran out of free API calls lol.</p>
    if (posts.current.temp < 10) {
      cold = "(brrrrr<span className='text-lg'>&#129398;</span>)"
    }

    return (
        <div>
            <Image
                src={"/Icons/location.svg"}
                alt={"Icon of location pin."}
                width={30}
                height={30}
                className='my-3'
            />
            <h3 className='font-bold text-2xl'>Vancouver, BC</h3>
            <p className='text-md'>
              {posts.current.temp}°C <span dangerouslySetInnerHTML={{__html: cold}}></span><br></br>
              UTC-8
            </p>
        </div>
    );
}