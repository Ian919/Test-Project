
import Link1 from "../../common/UI/link"
import Create from "../../common/UI/create"
import Delete from "../../common/UI/delete"


const TeamsCard: React.FC = () => {
    const team = {
        "name": "string1",
        "foundationYear": 0,
        "division": "string",
        "conference": "string",
        "imageUrl": "img/POR 1 (1).png",
        "id": 0
      }
    
   return <div className="cardBlock">
        <div className="navBarteam">
            <div className="teamsLink">
                <Link1 to='/Teams' text='Teams'></Link1>/
                <Link1 to='/DenverNuggets' text={team.name}></Link1>
            </div>
            <div className="DeleteCreate">
                <Create/>
                <Delete/>
            </div>
        </div>
        <div className="teamInf">
            <img src={team.imageUrl} className="logotip"/> 
            <div className="teamsinf">
                <div className="DenverNuggets">{team.name}</div>
                <div className="middleColumn">
                    <div className="middleColumn1">
                        <div>Year of foundation</div>
                        <div>{team.foundationYear}</div>
                    </div>
                    <div className="middleColumn2">
                       <div>Difision</div>  
                        <div>{team.division}</div>
                    </div>
                </div>
                <div className="middleColumn3">
                <div>Conference</div> 
                 <div>{team.conference}</div>  
                </div>
            </div>
        </div>   
    </div>
}



export default TeamsCard