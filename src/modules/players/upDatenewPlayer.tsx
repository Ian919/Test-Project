// import Navifation from "./navigation"
// import Search from "../UI/search"
// import Add from "../UI/add+"
// import ReactPaginate from 'react-paginate';
// import { NavLink, useParams } from "react-router-dom";
// import { useState } from "react/cjs/react.development";
// import  Input1 from '../UI/Input1'
// import  Input from '../UI/input_type'
// import Selector from "../UI/selector";
// import SmallInput from "../UI/smallInput";
// import SideBar from "./sideBar.tsx";
// import api from "../API copy";
// import { useEffect } from "react";
// import calendar from "./calendar";
// import Calendar from "./calendar";
// // s=10
// // let s
// function UpDateNewPlayer () {
//     const [positions, setPositions] = useState([])
//     const [teams1, setTeams] = useState([])
//     const [photo, setPhoto] = useState('')
//     const domain = "http://dev.trainee.dex-it.ru";
//     const sendData = () => {
//         console.log({
           
//             "name": name,
//             "number":+number,
//             "position": position,
//             "team": +team,
//             "birthday": currentDate,
//             "height": +height,
//             "weight": +weight,
//             "avatarUrl": "string",
//             "id": +id          
//         })
//         api.player.upDate({
//             // "id": teams1.value,
//             "id": +id,
//             "name": name,
//             "number":+number,
//             "position": position,
//             "team": +team,
//             "birthday": currentDate,
//             "height": +height,
//             "weight": +weight,
//             "avatarUrl": 'photo'          
//         }).then((r) => {
//             console.log(r)
//         }).catch((e) => {
//             console.log(e)
//         })
//     }

//     const params = useParams();
//     const id = params.id
//     useEffect(() => {
//         api.player.getPositions().then((res) => {console.log(res) 
//             setPositions(res.data)})
//     }, [])
//     useEffect(() => {
//         api.team.getTeams({
//             name:'',
//             page:1,
//             pageSize:10
//         }).then((response) => {
//             setTeams(response.data.data.map((one) => ({
//                 name: one.name,
//                 value:one.id
//             })))
//             console.log(response)

//         })
//     }, [])
//     //   let s
//     const {coloritem, setColoritem} = useState(false);
//     // var s = 7
//     // var s = 15
//     // let num = 7
//     // num=15
//     function changeColorofSign () {
//         // s=10
//         // let num = 3;
//         setColoritem(!coloritem);
//     }
//     // num = 5
//     // {
//     //     let n = 7
//     //     {
//     //         n=10
//     //     }
//     // }

//     // {
//     //     var s = 11
//     //     {
//     //         s=15
//     //     }
//     // }
//     // s=17
//     let name
//     let position
//     let team
//     let height
//     let weight
//     let currentDate
//     let number
//     function onDateChange(date) {
//         currentDate = date
//         console.log(date)
//     }
//     const sendName= (e) => {
//         name = e.target.value
//         console.log(name)
//     }
//     const sendPosition= (e) => {
//         position = e.target.value
//         console.log(position)
//     }
//     const sendteam= (e) => {
//         team = e.target.value
//         console.log(team)
//     }
//     const sendHeight = (e) => {
//         height = e.target.value
//         console.log(height)
//     }

//     const sendPhoto = (e) => {
//         let formData = new FormData();
//         formData.append('file', e.target.files[0])
//         api.saveImage(formData).then((response) => setPhoto(response.data))
//     }

//     const sendWeight = (e) => {
//         weight = e.target.value
//         console.log(weight)
//     }

//     const sendNumber = (e) => {
//         number = e.target.value
//         console.log(number)
//     }
   
//     return <div className="cardsTeam">
//     <Navifation/>
//     <div className="underNavPlayer">
//     <SideBar/>
//         <div className="AddPlayer">
//             <div className="NavAddPlayer">
//                 <p className="textinAddplayer">Players/Add Players</p>
//             </div>
//             <div className="ADDPlayerONE">
//             {!photo && <label>
//                     <div className="inputPhoto">
//                             <input type="file" className="Input_file" onInput={sendPhoto} />
//                             <img src={ "img/add_a_photo_24px_rounded.png"} className="ImgofCamera"/>
                    
                            
                    

//                     </div>
                    
//                 </label>}
//                 {photo && <img src={ `${domain}${photo}` } className="photo-location"/> }
//                 <div className="InputNameAddPlayer">
//                 <Input1 label="Name"  type="text" onInput1={sendName}/>
               
//                 <Selector label='Position' options={positions} onInput={sendPosition}/>
               
              
//                 <Selector label='Team' options={teams1} onInput={sendteam}/>
            
//             <div className="FourInputs">
//                 <div className="ftwofirsrsmallinputs">
                  
//                         <SmallInput label='Height (cm)' onInput={sendHeight}/>
                
//                     <div className="small2">
//                         <SmallInput label='Weight (kg)' onInput={sendWeight}/>
//                     </div>
//                 </div>
//                 <div className="stwosecondsmallinputs">
                    
//                         <Calendar onDateChange={onDateChange} />
                    
//                     <div className="small4">
//                         <SmallInput label='Number' onInput={sendNumber}/>
//                     </div>
//                  </div>
//             </div>
//             <div className="buttons">
//          <div className="marginforcancel">
//          <button className="cancel">Cancel</button>
//          </div>
//             <div className="marginforsave">
//             <button className='save' onClick={sendData}>Save</button>
//             </div>
       
//             </div>
         
                
               
//                 </div>
         
//             </div>
//         </div>
    
    
//     </div>
// </div>
// }

// export default UpDateNewPlayer