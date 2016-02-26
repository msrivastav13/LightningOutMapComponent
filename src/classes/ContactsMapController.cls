public with sharing class ContactsMapController {

	public ContactsMapController() {
		
	}

	@RemoteAction
	public static List<Contact> getContacts(){
		return [Select Id,Name,
						Location__Latitude__s,
						Location__Longitude__s 
						From Contact 
						Order By CreatedDate 
						Limit 20];
	}

}