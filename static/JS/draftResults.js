draftResults = document.getElementById('draftResults').innerHTML;
draftResults = draftResults.split(",")

teamList = [];
playerList = [];

for (i=0;i<32;i++){
    teamList.push(draftResults[0]);
    playerList.push(draftResults[1]);
    draftResults.splice(0,2);
}

console.log(teamList);
console.log(playerList);

for (i=0;i<2;i++){
    for (j=0;j<16;j++){
        draftPick = document.createElement('div');
        draftPick.className = 'draftPick';

        pickNo = document.createElement('div');
        pickNo.className = 'pickNo';
        pickNo.innerHTML = (j+1)+(i*16);

        team = document.createElement('div');
        team.className = 'team';
        team.innerHTML = teamList[j+(i*16)];

        playerName = document.createElement('div');
        playerName.className = 'playerName';
        playerName.innerHTML = playerList[j+(i*16)];

        draftPick.appendChild(pickNo);
        draftPick.appendChild(team);
        draftPick.appendChild(playerName);

        document.getElementsByClassName('halfBox')[i].appendChild(draftPick);
    }
}

document.getElementById('backToHome').addEventListener("click",function(){
    window.location.href = '/';
})