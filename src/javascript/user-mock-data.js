function defaultData(){
  let arrayUsers = [];
  let user1 = {
    'nickname': 'LionelMessi',	  
    'password': 'Barcelona',
	'names' : 'Lionel',
	'lastName': 'Messi',
	'birthday': '1990-01-01',
	'email': 'Lionel_Messi@Barcelona.com',
    'type': 'Developer'	
  };
  arrayUsers.push(user1);
  let user2 = {
    'nickname': 'CristianoRonaldo',	  
    'password': 'Piemonte',
	'names' : 'Cristiano',
	'lastName': 'Ronaldo',
	'birthday': '1990-01-01',
	'email': 'Cristiano.Ronaldo@Piemonte.com',
    'type': 'Developer'	
  };
  arrayUsers.push(user2);
  let user3 = {
    'nickname': 'NeymarJr',	  
    'password': 'PSG',
	'names' : 'Neymar',
	'lastName': 'Jr',
	'birthday': '1990-01-01',
	'email': 'Neymar.Jr@PSG.com',
    'type': 'Developer'	
  };
  arrayUsers.push(user3);
  let user4 = {
    'nickname': 'Mbappe',	  
    'password': 'PSG',
	'names' : 'Mbappe',
	'lastName': 'Mbappe',
	'birthday': '1990-01-01',
	'email': 'Mbappe@PSG.com',
    'type': 'Developer'	
  };
  arrayUsers.push(user4);
  let user5 = {
    'nickname': 'Modric',	  
    'password': 'RealMadrid',
	'names' : 'Modric',
	'lastName': 'Modric',
	'birthday': '1990-01-01',
	'email': 'Modric@RealMadrid.com',
    'type': 'Developer'	
  };
  arrayUsers.push(user5);
  storeData('arrayUsers', arrayUsers);
}
