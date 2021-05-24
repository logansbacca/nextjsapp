import  {useRef} from 'react';
import axios from 'axios'

function MeetupForm () {
    const titleRef=  useRef()
    const locationRef = useRef()
    const interestsRef = useRef()
    const descriptionRef = useRef()

    function submitHandler(e){
      e.preventDefault()
      const enteredTitle = titleRef.current.value;
      const enteredLocation = locationRef.current.value;
      const enteredInterests = interestsRef.current.value;
      const enteredDescription= descriptionRef.current.value;
    

    const userData = {
      age : enteredTitle,
      location : enteredLocation,
      interests : enteredInterests,
      description : enteredDescription
    }
    
    

  async function makeGetRequest() {
    let res = await axios.post('https://meetup-next-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', userData);
    let data = res.data;
    console.log(data);
  }
  makeGetRequest();
}


    return (
      
        <form>
          <label text="text">Age</label>  
          <input ref={titleRef} type="text"></input>
          <label >Location</label>  
          <input ref={locationRef} type="text"></input>
          <label htmlFor="interests">Interests</label>  
          <input ref={interestsRef} type="text"></input>
          <label htmlFor="description">Description</label>
          <textarea ref={descriptionRef}></textarea>
          <button onClick={submitHandler} type="submit">Add</button>
        </form>
        
    )
}

export default MeetupForm