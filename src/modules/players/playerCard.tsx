import React, { useState } from "react";
import Link1 from "../../common/UI/link";
import Navifation from "../../common/components/navigation";
import Create from "../../common/UI/create";
import Delete from "../../common/UI/delete";
import store from "../../core/redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../API copy";
import SideBar from "../../common/components/sideBar";
import { useEffect } from "react";
const PlayerCard: React.FC = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id: any = params.id?.toString().substring(1);
  const domain = "http://dev.trainee.dex-it.ru";
  const [player, setPlayer] = useState({})
  console.log(id);
  interface playerType {
    avatarUrl: string;
    birthday: string;
    height: number;
    id: number;
    name: string;
    number: number;
    position: string;
    team: number;
    teamName: string;
    weight: number;
  }
  // let player: playerType = store.getState().player as playerType;
  console.log(player);
  function getChange(id: string) {
    navigate(`/updateNewPlayer/${id}`);
    console.log(id);
    console.log(1);
  }
  function deletePlayer(id: string) {
    console.log(id);
    api.player
      .delete(id.slice(1))
      .then((r) => {
        console.log(r);
        navigate("/addnewPlayer");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    api.player
      .get({
        id: id,
      })
      .then((res) => {
        console.log(res);
        setPlayer(res.data);
      }) }, [])
  return (
    <div className="cardsTeam">
      {/* 1 */}
      <Navifation />
      <div className="underNavPlayer">
        <div className="SideBarNone">
          <SideBar />
        </div>
        {/* <div className="SideBarNone">
          <SideBar />
        </div> */}
        <div className="card_Block">
          <div className="navBarteam">
            {/* {.map(el => (<div>{el.name}</div>))} */}
            <div className="teamsLink">
              <Link1 to="/Player" text="Player"></Link1>/
              <Link1 to="/GregWhittinghton" text="Greg Whittinghton"></Link1>
            </div>
            <div className="DeleteCreate">
              <button className="create" onClick={() => getChange(id)}></button>
              <p onClick={() => deletePlayer(id)} className="deleteTeam">
                <img src="\assets\img\delete.png" />
              </p>
              {/* <button className="btn" onClick={() => deletePlayer(id)}>
                delete
              </button>
              <Delete /> */}
            </div>
          </div>
          <div className="teamInf">
            <div className="logotip">
              <img
                src={`${domain}${player.avatarUrl}`}
                className="logotip_info"
              />
            </div>
            <div className="teamsinf">
              <div className="name_number">
                <p className="DenverNuggets">{player.name}</p>
                <p className="font_number">#{player.number}</p>
              </div>
              <div className="middleColumn">
                <div className="middleColumn1">
                  <p className="font_character">Position</p>
                  <div className="font_define">{player.position}</div>
                  <p className="font_character">Height</p>
                  <div className="font_define">{player.height}</div>
                  <p className="font_character">Age</p>
                  <div className="font_define">
                    {new Date().getFullYear() -
                      new Date(player.birthday).getFullYear()}
                  </div>
                </div>
                <div className="middleColumn2">
                  <p className="font_character">Team</p>
                  <div className="font_define">{player.team}</div>
                  <p className="font_character">Weight</p>
                  <div className="font_define">{player.weight}</div>
                </div>
              </div>
              {/* <div className="middleColumn3">
                <div>Conference</div>
                <div>Western</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
