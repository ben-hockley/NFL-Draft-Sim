teamList = document.getElementById('activeTeams').innerHTML;
draftOrder = document.getElementById('draftOrder').innerHTML;

prospectNames = document.getElementById('prospectNames').innerHTML;
prospectColleges = document.getElementById('prospectColleges').innerHTML;
prospectPositions = document.getElementById('prospectPositions').innerHTML;

console.log(teamList);

draftPicks = []; //array which holds all 32 draft picks in order


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
    teamImage.setAttribute('src','/static/img/NFL/' + draftOrder[i] + '.webp');
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
    collegeImage.setAttribute('src','/static/img/CFB/' + prospectColleges[i] + '.png');
    collegeImage.className = 'college';

    headshot = document.createElement('img');
    headshot.setAttribute('src','/static/img/Players/2024/24-' + (i+1) + '.png')
    headshot.className = 'headshot';

    prospectName = document.createElement('div');
    prospectName.className = 'name';
    prospectName.innerHTML = prospectNames[i] + " " + prospectColleges[i];

    prospectPosition = document.createElement('div');
    prospectPosition.className = 'position';
    prospectPosition.innerHTML = prospectPositions[i];

    prospect.appendChild(prospectNo);
    prospect.appendChild(collegeImage);
    prospect.appendChild(headshot);
    prospect.appendChild(prospectName);
    prospect.appendChild(prospectPosition);
    prospect.classList.add(prospectPositions[i]); //add position class to prospect for filters.
    prospect.classList.add('undrafted');

    document.getElementById('Prospects').appendChild(prospect);
}

document.getElementById('start').addEventListener("click",startDraft)

function startDraft(){
    for (i=0;i<prospectNames.length;i++){
        document.getElementsByClassName('prospect')[i].addEventListener("click",makePick);
        document.getElementsByClassName('prospect')[i].id = i+1; //id = prospect ranking
    }
    document.getElementById('start').style.display = 'none';
    autoPick(); //makes cpu pick or leaves user to pick for their chosen team/s.
}


var activePick = 0; //zero indexed (activePick 0 is first overall pick)
function makePick(){
    console.log(this.id);
    console.log(this.childNodes[3].innerHTML);
    console.log(this.childNodes[4].innerHTML);

    prospectHeadshot = this.childNodes[2].getAttribute('src');
    prospectName = this.childNodes[3].innerHTML;
    prospectPos = this.childNodes[4].innerHTML;

    pickHeadshot = document.createElement('img');
    pickHeadshot.className = 'headshot';
    pickHeadshot.setAttribute('src',prospectHeadshot)

    pickName = document.createElement('div');
    pickName.className = 'name';
    pickName.innerHTML = prospectName;

    if (draftPicks.length<32){
        draftPicks.push(prospectName)
    }

    pickPos = document.createElement('div');
    pickPos.className = 'position';
    pickPos.innerHTML = prospectPos;

    
    document.getElementsByClassName('pick')[activePick].appendChild(pickHeadshot);
    document.getElementsByClassName('pick')[activePick].appendChild(pickName);
    document.getElementsByClassName('pick')[activePick].appendChild(pickPos);

    activePick += 1;
    checkForEnd(activePick);
    this.classList.remove('undrafted');
    this.classList.add('drafted');
    this.style.display = 'none';
    autoPick(); //recursive function
}

function autoPick(){
    console.log(draftOrder[activePick]);
    console.log(teamList);
    if (teamList.includes(draftOrder[activePick])){
        console.log('user pick');
        //leave user to pick
    } else {
        console.log('cpu pick');
        window.setTimeout(makeCpuPick,1000); //pause 1 second, then make cpu pick;
    }
}

function makeCpuPick(){
    //take highest ranked undrafted prospect.
    cpuPick = document.querySelector('.undrafted')
    console.log(cpuPick.id);
    console.log(cpuPick.childNodes[3].innerHTML);
    console.log(cpuPick.childNodes[4].innerHTML);

    prospectHeadshot = cpuPick.childNodes[2].getAttribute('src');
    prospectName = cpuPick.childNodes[3].innerHTML;
    prospectPos = cpuPick.childNodes[4].innerHTML;

    headshot = document.createElement('img');
    headshot.setAttribute('src',prospectHeadshot)
    headshot.className = 'headshot';

    pickName = document.createElement('div');
    pickName.className = 'name';
    pickName.innerHTML = prospectName;

    if (draftPicks.length<32){
        draftPicks.push(prospectName);
    }

    pickPos = document.createElement('div');
    pickPos.className = 'position';
    pickPos.innerHTML = prospectPos;

    document.getElementsByClassName('pick')[activePick].appendChild(headshot);
    document.getElementsByClassName('pick')[activePick].appendChild(pickName);
    document.getElementsByClassName('pick')[activePick].appendChild(pickPos);

    activePick += 1;
    checkForEnd(activePick);
    cpuPick.classList.remove('undrafted');
    cpuPick.classList.add('drafted');
    cpuPick.style.display = 'none';
    autoPick(); //recursive function
}




//prospect filter
document.getElementById('submitFilter').addEventListener('click',filterByPosition);

function filterByPosition(){
    positionFiltered = document.getElementById('positions').value;
    console.log(positionFiltered);

    if (positionFiltered == 'Any'){
        //show all undrafted prospects
        for (i=0;i<(50-activePick);i++){
            document.getElementsByClassName('undrafted')[i].style.display = 'flex';
        }
    } else {
        for (i=0;i<(50-activePick);i++){
            if (document.getElementsByClassName('undrafted')[i].classList.contains(positionFiltered)){
                document.getElementsByClassName('undrafted')[i].style.display = 'flex';
                //show matching prospects
            } else {
                document.getElementsByClassName('undrafted')[i].style.display = 'none';
                //hide none matching prospects
            }
        }
    }
}

for (i=0;i<draftOrder.length;i++){
    document.getElementsByClassName('team')[i].addEventListener("click",tradePick)
}

function tradePick(){
    console.log('trade pick');
    document.getElementById('popup').style.display = 'block';
    tradingAway = this;

    document.getElementById('tradePick').addEventListener("click",function(){
        tradingAway.setAttribute('src','/static/img/NFL/' + document.getElementById('newOwner').value + '.webp');
        document.getElementById('popup').style.display = 'none';
    })
    document.getElementById('cancelTrade').addEventListener("click",function(){
        document.getElementById('popup').style.display = 'none';
    })
}

function checkForEnd(activePick){
    if (activePick == 32){
        getDraftResults();
    }
}

function getDraftResults(){
    alert(draftPicks);
    newDraftOrder = [];
    for (i=0;i<32;i++){
        source = document.getElementsByClassName('team')[i].getAttribute('src');
        console.log(source);
        team = source.substring(16,source.length-5)
        console.log(team);
        newDraftOrder.push(team);
        console.log(newDraftOrder);
    }
    //make new 2D array with [draftTeam,draftPick] x 32
    draftResults = []
    for (i=0;i<32;i++){
        draftResult = [];
        draftResult.push(newDraftOrder[i]);
        draftResult.push(draftPicks[i]);
        draftResults.push(draftResult);
    }
    console.log(draftResults);
    //add hidden form which submits draft results to server;
    endDraftForm = document.createElement('form');
    endDraftForm.setAttribute('action','/2024Draft/DraftResults');
    endDraftForm.setAttribute('method','post')
    endDraftForm.setAttribute('id','hiddenForm')

    draftResultsInput = document.createElement('input');
    draftResultsInput.setAttribute('type','text');
    draftResultsInput.id = 'draftResultsInput';
    draftResultsInput.setAttribute('name','draftResultsInput');
    draftResultsInput.value = draftResults;

    endDraftButton = document.createElement('button');
    endDraftButton.setAttribute('type','submit');
    endDraftButton.setAttribute('id','endDraftButton');
    endDraftButton.innerHTML = 'End Draft';

    endDraftForm.appendChild(draftResultsInput);
    endDraftForm.appendChild(endDraftButton);
    document.getElementById('Picks').appendChild(endDraftForm);
    
}