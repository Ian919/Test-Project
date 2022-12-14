import "./App.css";
import { Routes, Route, Link, Redirect, Navigate } from "react-router-dom";
import SignUp from "./common/components/signup/singUp.tsx";
// import SignIn1 from "./components/signIn";
import TeamsCard from "./modules/teams/teamsCard.tsx";
import PlayerCard from "./modules/players/playerCard.tsx";
import Roster from "./common/components/roster.tsx";
import Add from "./common/UI/add+";
import Navifation from "./common/components/navigation.jsx";
import CardsTeam from "./modules/teams/cardsTeams.tsx";
import PlayesTeams from "./modules/players/playerTeams.tsx";
import PageNotfound from "./common/components/pageNotfound.tsx";
import AddnewPlayer from "./modules/players/addnewPlayer.tsx";
import AddnewTeam from "./modules/teams/addNewTeam.tsx";
import useAuth from "./hooks/useAuth";
import { AuthContext } from "./context/AuthContexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "./API copy";
import CardTeam from "./modules/teams/cardTeam.tsx";
import UpDateNewPlayer from "./modules/players/upDatenewPlayer.tsx";
import SignIn from "./common/components/signin/signIn.tsx";
import store from "./core/redux/store";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    auth === null && navigate("/signin");
  }, []);
  let auth = useSelector((state) => state.auth.token);
  console.log(auth);
  console.log(store.getState().auth.token);
  console.log(Cookies.get("token"), "cookies");
  // if auth === null {navigate("/signin")}
  // if (auth === true)  {navigate("/signin")}
  // else {
  //   // navigate('/AddNewTeam')
  // }
  return (
    <div className="App">
      {/* {store.getState().auth.token + ''} */}

      <Routes>
        {!auth && <Route path="/signin" element={<SignIn />} />}
        {!auth && <Route path="/signup" element={<SignUp />} />}
        {auth && <Route path="/Roster" element={<AddnewPlayer />} />}
        {auth && <Route path="/playerTeams" element={<PlayesTeams />} />}
        {auth && <Route path="/cardsTeam" element={<CardsTeam />} />}
        {auth && <Route path="/cardTeam/:id" element={<CardTeam />} />}
        {auth && <Route path="*" element={<PageNotfound />} />}
        {auth && <Route path="/addnewPlayer" element={<AddnewPlayer />} />}
        {auth && <Route path="/AddNewTeam" element={<AddnewTeam />} />}
        {auth && (
          <Route path="/updateNewPlayer/:id" element={<AddnewPlayer />} />
        )}
        {auth && <Route path="/playerCard/:id" element={<PlayerCard />} />}
        {auth && <Route path="/updateNewTeam/:id" element={<AddnewTeam />} />}
      </Routes>
    </div>
  );
}

export default App;
