import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const i = imageData()
  return(
    <div className="app">
      <h1>Kalvium gallary</h1>
      <div className='imgContainer'>
      {
        i.map((images)=>(
          <img src={images.img} />
        ))
      }
      </div>
    </div>
  )
}

export default App;
