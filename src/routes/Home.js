/* Home */
import React, {useState} from 'react'
import {db} from 'fbase'

function Home() {

  const [tweet, setTweet] = useState("");

  const onChange = e => {
    // console.log(e.target.value);
    const {target: {value}} =  e;
    setTweet(value);
  }

  const onSubmit = e => {
    
  }

  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholder="What's on your mind"
     value={tweet} onChange={onChange} maxLength={120} />
    <input type="submit" value="Tweet"/>
    </form>
  )
}

export default Home