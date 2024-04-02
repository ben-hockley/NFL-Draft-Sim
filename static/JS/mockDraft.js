ActiveTeams = [] //Array for active teams

document.getElementById('ARI').addEventListener("click", addARI);
document.getElementById('ATL').addEventListener("click", addATL);
document.getElementById('CAR').addEventListener("click", addCAR);
document.getElementById('CHI').addEventListener("click", addCHI);
document.getElementById('DAL').addEventListener("click", addDAL);
document.getElementById('DET').addEventListener("click", addDET);
document.getElementById('GB').addEventListener("click", addGB)
document.getElementById('LAR').addEventListener("click", addLAR)
document.getElementById('MIN').addEventListener("click", addMIN)
document.getElementById('NO').addEventListener("click", addNO)
document.getElementById('NYG').addEventListener("click", addNYG)
document.getElementById('PHI').addEventListener("click", addPHI)
document.getElementById('SF').addEventListener("click", addSF)
document.getElementById('SEA').addEventListener("click", addSEA)
document.getElementById('TB').addEventListener("click", addTB)
document.getElementById('WAS').addEventListener("click", addWAS)
document.getElementById('BAL').addEventListener("click", addBAL)
document.getElementById('BUF').addEventListener("click", addBUF)
document.getElementById('CIN').addEventListener("click", addCIN)
document.getElementById('CLE').addEventListener("click", addCLE)
document.getElementById('DEN').addEventListener("click", addDEN)
document.getElementById('HOU').addEventListener("click", addHOU)
document.getElementById('IND').addEventListener("click", addIND)
document.getElementById('JAX').addEventListener("click", addJAX)
document.getElementById('KC').addEventListener("click", addKC)
document.getElementById('LV').addEventListener("click", addLV)
document.getElementById('LAC').addEventListener("click", addLAC)
document.getElementById('MIA').addEventListener("click", addMIA)
document.getElementById('NE').addEventListener("click", addNE)
document.getElementById('NYJ').addEventListener("click", addNYJ)
document.getElementById('PIT').addEventListener("click", addPIT)
document.getElementById('TEN').addEventListener("click", addTEN)

function add(team){
    if (ActiveTeams.includes(team)){
        document.getElementById(team).style.backgroundColor = 'lightgray';
        ActiveTeams.splice(ActiveTeams.indexOf(team),1)
    } else {
        document.getElementById(team).style.backgroundColor = 'red';
        ActiveTeams.push(team);
    }
    document.getElementById('activeTeams').setAttribute('value',ActiveTeams)
}

function addARI(){add('ARI')}
function addATL(){add('ATL')}
function addCAR(){add('CAR')}
function addCHI(){add('CHI')}
function addDAL(){add('DAL')}
function addDET(){add('DET')}
function addGB(){add('GB')}
function addLAR(){add('LAR')}
function addMIN(){add('MIN')}
function addNO(){add('NO')}
function addNYG(){add('NYG')}
function addPHI(){add('PHI')}
function addSF(){add('SF')}
function addSEA(){add('SEA')}
function addTB(){add('TB')}
function addWAS(){add('WAS')}
function addBAL(){add('BAL')}
function addBUF(){add('BUF')}
function addCIN(){add('CIN')}
function addCLE(){add('CLE')}
function addDEN(){add('DEN')}
function addHOU(){add('HOU')}
function addIND(){add('IND')}
function addJAX(){add('JAX')}
function addKC(){add('KC')}
function addLV(){add('LV')}
function addLAC(){add('LAC')}
function addMIA(){add('MIA')}
function addNE(){add('NE')}
function addNYJ(){add('NYJ')}
function addPIT(){add('PIT')}
function addTEN(){add('TEN')}