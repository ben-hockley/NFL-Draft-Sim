teamList = document.getElementById('activeTeams').innerHTML;
draftOrder = document.getElementById('draftOrder').innerHTML;
console.log(teamList);



teamList = teamList.split(","); //turn into list of active teams

draftOrder = draftOrder.substring(3,draftOrder.length-4);
console.log(draftOrder);

draftOrder = draftOrder.split("',), ('")

console.log(teamList[0]);
console.log(draftOrder)
console.log(draftOrder.length)