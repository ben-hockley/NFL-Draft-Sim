teamList = document.getElementById('activeTeams').innerHTML;
draftOrder = document.getElementById('draftOrder').innerHTML;
console.log(teamList);


// form arrays used to populate html file.
teamList = teamList.split(",");
draftOrder = draftOrder.substring(3,draftOrder.length-4);
draftOrder = draftOrder.split("',), ('")

//write content to html file.
for (i=0; i<draftOrder.length ; i++){
    pick = document.createElement('div');
    pick.className = 'pick';

    pickNo = document.createElement('div');
    pickNo.className = 'pickNo';
    pickNo.innerHTML = i+1;

    teamImage = document.createElement('img');
    teamImage.setAttribute('src','/static/img/' + draftOrder[i] + '.webp')
    teamImage.className = 'team';

    pick.appendChild(pickNo);
    pick.appendChild(teamImage);


    document.getElementById('Picks').appendChild(pick);
}
