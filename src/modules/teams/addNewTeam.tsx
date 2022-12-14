import Navifation from '../../common/components/navigation'
import Search from '../../common/UI/search'
import Add from '../../common/UI/add+'
import ReactPaginate from 'react-paginate'
import { NavLink } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Input1 from '../../common/UI/Input1'
import Input from '../../common/UI/input_type'
import Selector from '../../common/UI/selector'
import SmallInput from '../../common/UI/smallInput'
import SideBar from '../../common/components/sideBar.jsx'
import api from '../../API copy'
import { useParams } from 'react-router-dom'
import store from '../../core/redux/store'
import { useSelector } from 'react-redux'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../../css/addNewTeam.css'
const AddnewTeam: React.FC = () => {
  const { coloritem, setColoritem } = useState(false)
  const [photo, setPhoto] = useState('')
  let teamData: object = useSelector((state: any) => state.team)
  let teams = store.getState().team
  const navigate = useNavigate();
  interface team {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
    id: number
  }
  useEffect(() => {
    if (id) {
      console.log(id)
      api.team
        .getTeam({
          id: id,
        })
        .then((res) => {
          console.log(res)
          store.dispatch({
            type: 'team/set',
            payload: res.data,
          })
        })
    }
  }, [])
  let teamParams: team = store.getState().team as team
  const params = useParams()
  const id = params.id
  console.log(id)

  const sendData = () => {
    if (id) {
      api.team
        .upDateTeam(store.getState().team)
        .then((r) => {
          console.log(r)
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      api.team
        .add(teams)
        .then((r) => {
          console.log(r)
        })
        .catch((e) => {
          console.log(e)
        })
    }
    navigate('/cardsTeam')
  }
  interface value {
    target: {
      value: string
    }
  }
  interface valueNumber {
    target: {
      value: number
    }
  }

  const sendName = (e: value) => {
    console.log(e)
    name = e.target.value
    console.log(name)
    store.dispatch({
      type: 'team/set',
      payload: { name: name },
    })
  }
  const sendDivision = (e: value) => {
    division = e.target.value
    console.log(division)
    store.dispatch({
      type: 'team/set',
      payload: { division: division },
    })
  }
  const sendConference = (e: value) => {
    conference = e.target.value
    console.log(conference)
    store.dispatch({
      type: 'team/set',
      payload: { conference: conference },
    })
  }
  const SendYear = (e: valueNumber) => {
    year = e.target.value
    console.log(year)
    store.dispatch({
      type: 'team/set',
      payload: { foundationYear: year },
    })
  }

  const sendPhoto = (e) => {
    let formData = new FormData()
    formData.append('file', e.target.files[0])
    api.saveImage(formData).then((response) => {
      setPhoto(response.data)
      console.log(response)
      store.dispatch({
        type: 'team/set',
        payload: { imageUrl: response.data },
      })
    })
  }

  let name: string
  let division: string
  let conference: string
  let year: number

  // let photo
  const domain = 'http://dev.trainee.dex-it.ru'
  function changeColorofSign() {
    setColoritem(!coloritem)
  }

  return (
    <div className="cardsTeam">
      <Navifation />
      <div className="underNavPlayer">
        <SideBar />
        <div className="AddPlayer">
          <div className="NavAddPlayer">
            <p className="textinAddplayer">Teams/Add new team</p>
          </div>
          <div className="ADDPlayerONE">
            {!teamParams.imageUrl && (
              <label>
                <div className="inputPhoto">
                  <input
                    type="file"
                    className="Input_file"
                    onInput={sendPhoto}
                  />
                  <img
                    src="/assets/img/add_a_photo_24px_rounded.png"
                    className="ImgofCamera"
                  />
                </div>
              </label>
            )}
            {teamParams.imageUrl && (
              <label>
                <input
                  type="file"
                  className="changePhoto"
                  onInput={sendPhoto}
                />
                <img
                  src={`${domain}${teamParams.imageUrl}`}
                  className="photo-location"
                />
              </label>
            )}

            <div className="InputNameAddPlayer">
              <Input1
                label="Name"
                type="text"
                onInput1={sendName}
                value={teamParams.name}
              />
              <div className="DivisionInput">
                <Input1
                  label="Division"
                  onInput1={sendDivision}
                  value={teamParams.division}
                />
              </div>
              <div className="ConferenceInput">
                <Input1
                  label="Conference"
                  onInput1={sendConference}
                  value={teamParams.conference}
                />
              </div>
              <div className="Year of foundation1">
                <Input1
                  label="Year of foundation"
                  onInput1={SendYear}
                  value={teamParams.foundationYear}
                />
              </div>
              <div className="buttons">
                <div className="marginforcancel">
                  <button className="cancel">Cancel</button>
                </div>
                <div className="marginforsave">
                  <button className="save" onClick={sendData}>
                    Save
                  </button>
                </div>
              </div>
            </div>
            {photo}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddnewTeam
