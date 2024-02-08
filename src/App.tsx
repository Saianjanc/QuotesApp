import { Card } from 'react-bootstrap'
import sun from './assets/sun.png'
import moon from './assets/moon.png'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import c6 from './assets/c6.png'
import s from './assets/smStar.svg'
import { Switch } from 'antd'
import { useEffect, useState } from 'react'
import en from './languages/en.json'

interface IQuote{
  author:string,
  text:string
}

function App(){
  const [mode,setMode] = useState(false)
  const [quote,setQuote] = useState<IQuote>()
  const getQuote = () => {
    const randomNum = Math.floor(Math.random()* ((en.length-1) - 0 + 1)) +0;
    setQuote(en[randomNum])
  }
  useEffect(()=>{getQuote()},[])
    return(
        <div>
        {mode?<div className="h-[100vh] bg-gradient-to-t from-[#2980b9] to-[#6dd5fa]">
        <img src={sun} alt='Sun' width="150px" className='absolute top-10 left-20 drop-shadow-[0px_20px_50px_rgba(255,242,0,1)] animate-[sun_30s_linear_infinite]'/>
        <img src={c5} alt='c5' width="180px" className='absolute top-[25px] right-[600px] animate-[cloud_50s_linear_infinite]'/>
        <img src={c2} alt='c2' width="220px" className='absolute top-[30px] left-[360px] animate-[cloud_20s_linear_infinite]'/>
        <img src={c6} alt='c6' width="150px" className='absolute top-[90px] right-[332px] animate-[cloud_30s_linear_infinite]'/>
        <img src={c4} alt='c4' width="150px" className='absolute top-[80px] left-0 animate-[cloud_60s_linear_infinite]'/>
        <img src={c1} alt='c1' width="200px" className='absolute top-2 right-20 animate-[cloud_30s_linear_infinite]'/>
        </div>:<div className="h-[100vh] bg-gradient-to-t from-[#213239] to-black">
        <img src={moon} alt='Moon' width="150px" className='absolute top-10 right-20 drop-shadow-[0px_20px_50px_rgba(255,255,255,1)]'/>
        <img src={s} alt='Star' width="50px" className='absolute top-40 right-[200px] animate-[star_2s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="80px" className='absolute top-40 left-[100px] animate-[star_3s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="50px" className='absolute top-5 right-[100px] animate-[star_12s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="60px" className='absolute top-2 right-[200px] animate-[star_12s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-5 right-[200px] animate-[star_12s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-20 left-5 animate-[star_2s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-5 left-[200px] animate-[star_12s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-5 left-[100px] animate-[star_12s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-5 left-[500px] animate-[star_10s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="50px" className='absolute top-40 right-[200px] animate-[star_8s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="40px" className='absolute top-2 left-[200px] animate-[star_3s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="40px" className='absolute top-[100px] left-[600px] animate-[star_3s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-[100px] left-[680px] animate-[star_4s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-[150px] left-[700px] animate-[star_8s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="100px" className='absolute top-10 right-[300px] animate-[star_6s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="40px" className='absolute top-5 right-[400px] animate-[star_6s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="40px" className='absolute top-2 right-[600px] animate-[star_2s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="30px" className='absolute top-20 right-[10px] animate-[star_7s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        <img src={s} alt='Star' width="50px" className='absolute top-40 left-[200px] animate-[star_8s_ease-in-out_infinite_alternate] drop-shadow-[0px_0px_8px_rgba(255,242,0,1)]'/>
        </div>}
        <div className='h-full flex justify-center'>
        <Card className='absolute top-[250px] w-[40%] h-[200px] bg-black text-white rounded p-5 bg-opacity-30'>
        <Card.Body className='backdrop-blur'>
            <Card.Title className='text-3xl pb-5 flex justify-between'>{mode?"Good Morning":"Good Night"}<Switch onClick={()=>setMode(!mode)}/></Card.Title>
            <Card.Text className='text-2xl'>
              {quote?.text}
            </Card.Text>
            <br/>
            <div className='flex justify-end text-xl'>-{quote?.author}</div>
          </Card.Body>
        </Card>
        </div>
        </div>
    )
}
export default App