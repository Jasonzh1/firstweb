import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function WeatherWidget() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=49.25&lon=-123.24&exclude=hourly,daily&appid=0ff9b8168b589fb3dd33ca2e16bc8296&units=metric')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    }, []);


    return (
        <div className='text-lg'>
            <Image
                src={"/Icons/location.svg"}
                alt={"Icon of location pin."}
                width={30}
                height={30}
            />
            Vancouver, BC
            {posts.lat}
        </div>
    );
}