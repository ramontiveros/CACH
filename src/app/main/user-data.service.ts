
export class UserDataService {
  public activeTeam_id;


  setActiveTeam(team_id) {
    return this.activeTeam_id = team_id;
  }


  getActiveTeam(){
    return this.activeTeam_id;
  }

}
