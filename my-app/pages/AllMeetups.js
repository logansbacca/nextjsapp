import React from 'react';
import MeetupItem from './Meetupitem'

const DUMMY_DATA = [
    {
		"names": "Chester",
		"phones": "1-423-828-2925",
		"email": "et.lacinia.vitae@ligula.ca",
		"adress": "56464",
		"img" : 'https://images.generated.photos/AeZIkR_5ONUxi1dK_3nvpR_wkxy0UIGQYw1nfG3qS3o/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMzE5MzMuanBn.jpg'
	},
	{
		"names": "Ulric",
		"phones": "1-959-792-2344",
		"email": "tempor@liberodui.com",
		"adress": "33382",
		 "img" : "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1482984849/t3vue2kdp2ajdfvxvlof.png"
	},
	{
		"names": "Iliana",
		"phones": "1-295-207-3828",
		"email": "Donec.tincidunt@ipsumSuspendisse.net",
		"adress": "11822",
		"img" : "https://news.stv.tv/wp-content/uploads/2020/02/peter_cassidy_square_560-256x256.jpg"
	},
	{
		"names": "Reuben",
		"phones": "1-571-572-0619",
		"email": "Cum.sociis.natoque@auctor.co.uk",
		"adress": "58155",
		"img" : "https://secure.gravatar.com/avatar/1396322542354e41ef2b8180e47bbb6a?s=256&d=mm&r=g"
	}
];

function AllMeetups () {

    return(
        <div>
			<MeetupItem/>
            <h1>These people what to meet you!</h1>
            {DUMMY_DATA.map((meetup) => (
			<MeetupItem key = {meetup.adress}image={meetup.img}names={meetup.names} phones={meetup.phones} email={meetup.email} adress={meetup.adress}/>
			))}
            </div>
    )
}

export default AllMeetups