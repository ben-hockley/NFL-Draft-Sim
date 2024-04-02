teamList = document.getElementById('activeTeams').innerHTML;
draftOrder = document.getElementById('draftOrder').innerHTML;

prospectNames = document.getElementById('prospectNames').innerHTML;
prospectColleges = document.getElementById('prospectColleges').innerHTML;
prospectPositions = document.getElementById('prospectPositions').innerHTML;

console.log(teamList);


// form arrays used to populate html file.
teamList = teamList.split(",");


draftOrder = draftOrder.substring(3,draftOrder.length-4);
draftOrder = draftOrder.split("',), ('")

prospectNames = prospectNames.substring(3,prospectNames.length-4);
prospectNames = prospectNames.split("',), ('")

prospectColleges = prospectColleges.substring(3,prospectColleges.length-4);
prospectColleges = prospectColleges.split("',), ('")

prospectPositions = prospectPositions.substring(3,prospectPositions.length-4);
prospectPositions = prospectPositions.split("',), ('")

console.log(prospectNames)
console.log(prospectColleges)
console.log(prospectPositions)

//write content to html file.

//add draft order to Picks List
for (i=0; i<draftOrder.length ; i++){
    pick = document.createElement('div');
    pick.className = 'pick';

    pickNo = document.createElement('div');
    pickNo.className = 'pickNo';
    pickNo.innerHTML = i+1;

    teamImage = document.createElement('img');
    teamImage.setAttribute('src','/static/img/' + draftOrder[i] + '.webp');
    teamImage.className = 'team';

    pick.appendChild(pickNo);
    pick.appendChild(teamImage);
    
    document.getElementById('Picks').appendChild(pick);
}

//add draft prospects to prospect list
for (i=0;i<prospectNames.length;i++){
    prospect = document.createElement('div');
    prospect.className = 'prospect';

    prospectNo = document.createElement('div');
    prospectNo.className = 'prospectNo';
    prospectNo.innerHTML = i+1;

    collegeImage = document.createElement('img');
    collegeImage.setAttribute('src','/static/img/' + prospectColleges[i] + '.png');
    collegeImage.className = 'college';

    prospectName = document.createElement('div');
    prospectName.className = 'name';
    prospectName.innerHTML = prospectNames[i];

    prospectPosition = document.createElement('div');
    prospectPosition.className = 'position';
    prospectPosition.innerHTML = prospectPositions[i];

    prospect.appendChild(prospectNo);
    prospect.appendChild(collegeImage);
    prospect.appendChild(prospectName);
    prospect.appendChild(prospectPosition);

    document.getElementById('Prospects').appendChild(prospect);
}
