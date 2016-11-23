
export class UserDataService {
  public activeTeam_id;
  public availableTeams;


  setActiveTeam(team_id) {
    this.activeTeam_id = team_id;
  }


  getActiveTeam(){
    return this.activeTeam_id;
  }

  getUserUid(){
    let user = firebase.auth().currentUser;
    let uid = user.uid;
    return uid;
  }

  getTeams(){
    let uid = this.getUserUid();
    //TODO
    this.availableTeams = [];

    return this.availableTeams;
  }

}
