import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { settings } from '../../config/config'

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Message } from 'openride-shared'
import { User } from 'openride-shared'
import { Ride } from 'openride-shared'

const LAST_READ_KEY = 'openride-last-read-messages'

@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MessageProvider Provider');
  }

	/*
	 *
	 * This will get the populated list of message for the current ride
	 *
	 */
	getMessages(ride: Ride) : Promise< {

		let lastRead = <Date>Cookie.get(LAST_READ_KEY);

		// Get the messages
		return this.http.get(`${ settings.apiEndpoint }/api/rides/${ ride._id }/messages`).toPromise()
			.then((messages: Message[]) => (

				// For each message
				Promise.all(messages.map((message: Message) => 

					// Populate the author
					this.http.get(`${ settings.apiEndpoint }${ message.author['@id'] }`).toPromise()
						.then((user: User) => ( message.author = user, message ))
				
				))  

			)).then((messages: Message[]) => {

				unreads = message.filter((message: Message) => 
					message.date > lastRead).length;
			
				Cookie.set(LAST_READ_KEY, Date.now())
				return { messages, unreads };

			})
	
	}

	/*
	 *
	 * This will post a message
	 *
	 */
	postMessage(message: Message, ride: Ride) {

		return this.http.post(`${ settings.apiEndpoint }/api/rides/${ ride._id }/messages`, 
			{ message: message } )
			.toPromise()
			.then((ans) => 'OK')
			.catch((error: any) => {

				console.error(`Couldn't post message`)
			  console.error(error)  

				return 'NOT_OK';

			})
	
	}

}
