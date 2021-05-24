import React,{useState,useEffect} from 'react';
import axios from 'axios'


function Favorites () {



    useEffect(() => {
        axios.get('https://meetup-next-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then (res => {
          console.log(res.data);
        }, err => {
            console.log('An error has occurred!')
        })
      },[]);


    return(
        <div>
        <h1>Favorites Meetups</h1>
        </div>
    )
}

export default Favorites