import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RideProvider } from '../../providers/ride/ride'

import { User } from 'openride-shared'

@IonicPage()
@Component({
  selector: 'page-confirm-finalize',
  templateUrl: 'confirm-finalize.html',
})
export class ConfirmFinalizePage {

  constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public rideProvider: RideProvider) {
  }

  ionViewDidLoad() {

		this.users =  this.rideProvider.toRate()
		
	}

	/*
	 *
	 * This will be the users being rated by users-rater
	 *
	 */
	users: User[];

	/*
	 *
	 * This will tell if the users have been rated yet
	 *
	 */
	rated: boolean;

	/*
	 *
	 * This will dismiss the modal
	 *
	 */
	cancel() {
	
		this.navCtrl.pop()
	
	}

	/*
	 *
	 * This will finalize the ride
	 *
	 */
	finalize() {
	
		this.rideProvider.finalize(this.rideProvider.currentRide, this.users);	
		this.navCtrl.pop();
	
	}

	/*
	 *
	 * This will report an user
	 *
	 */
	report() {
	
		throw 'Not implemented';	
	
	}

}
