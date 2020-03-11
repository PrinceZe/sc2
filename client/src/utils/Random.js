const arr = ['https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4','https://media.w3.org/2010/05/sintel/trailer_hd.mp4']
const random  = ()=>{
    const temp = []
   for(let i = 0;i<5;i++){
    let rom = Math.floor(Math.random()*arr.length)
      temp.push(rom)
   }
   return temp
}



export default random