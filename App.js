import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
function App() {

  const [joke, setJoke] = useState(null);



  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }


  const fetchedApi = () => {
    console.log(`render begin`);
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        "Accept": 'application/json'
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    setInterval(() => {
      playSound("https://download2270.mediafire.com/4tnq4x1ts1yg/qlbyegp49jaytw9/RICK+ROLL+SOUND_NEVER+GONNA+GIVE+YOU+UP-High+Quality.wav")

      fetchedApi();
    }, 10000);
  }, [])


  return (
    <>
      <h1> WELCOME TO MY JOKES APP </h1>
      <div>
        {toast.info(`${joke}`, {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}

        <ToastContainer
          id="toast"
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  )
}
export default App;
