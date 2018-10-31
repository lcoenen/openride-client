import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditRidePage } from '../pages/edit-ride/edit-ride';
import { AddressModalPage} from '../pages/address-modal/address-modal'
import { MatchesPage } from '../pages/matches/matches'
import { RideBoardPage } from '../pages/ride-board/ride-board'
import { MyRidesPage } from '../pages/my-rides/my-rides'
import { ProfilePage } from '../pages/profile/profile';
import { SignInPage } from '../pages/sign-in/sign-in'
import { EditProfilePage } from '../pages/edit-profile/edit-profile'
import { ConfirmConfirmationPage } from '../pages/confirm-confirmation/confirm-confirmation'
import { ConfirmFinalizePage } from '../pages/confirm-finalize/confirm-finalize'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RideProvider } from '../providers/ride/ride';
import { UserProvider, ApiKeyInterceptor } from '../providers/user/user';
import { NominatimProvider } from '../providers/nominatim/nominatim';

import { PayementSelectorComponent } from '../components/payement-selector/payement-selector' 
import { PlaceSelectorComponent } from '../components/place-selector/place-selector'
import { TimeSelectorComponent } from '../components/time-selector/time-selector'
import { RideWidgetComponent } from '../components/ride-widget/ride-widget' 
import { MessageWhenEmptyComponent } from '../components/message-when-empty/message-when-empty';
import { WizardComponent } from '../components/wizard/wizard' 
import { WizardPageComponent } from '../components/wizard-page/wizard-page' 
import { UsersRaterComponent } from '../components/users-rater/users-rater' 
import { CenteredMessageComponent } from '../components/centered-message/centered-message' 

import { Ionic2RatingModule } from 'ionic2-rating';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AutoCompleteModule } from 'ionic2-auto-complete';
import { MessageProvider } from '../providers/message/message';

import { MomentModule } from 'ngx-moment';

import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		EditRidePage,
		AddressModalPage, 
		MatchesPage,
		RideBoardPage,
		MyRidesPage,
		ProfilePage,
		SignInPage,
		EditProfilePage,
		ConfirmConfirmationPage,
		ConfirmFinalizePage,
		RideWidgetComponent,
		PlaceSelectorComponent,
		TimeSelectorComponent,
		PayementSelectorComponent,
		WizardComponent,
		WizardPageComponent,
		MessageWhenEmptyComponent,
		UsersRaterComponent,
		CenteredMessageComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		LeafletModule,
		AutoCompleteModule,
		MomentModule,
		Ionic2RatingModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		EditRidePage,
		AddressModalPage,
		MatchesPage,
		RideBoardPage,
		MyRidesPage,
		ProfilePage,
		SignInPage,
		ConfirmConfirmationPage,
		ConfirmFinalizePage,
		EditProfilePage,
		RideWidgetComponent,
		PlaceSelectorComponent,
		TimeSelectorComponent,
		PayementSelectorComponent,
		WizardComponent,
		WizardPageComponent,
		MessageWhenEmptyComponent,
		UsersRaterComponent,
		CenteredMessageComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		RideProvider,
		UserProvider,
		NominatimProvider,
		HttpClientModule,
		{ 
			provide: HTTP_INTERCEPTORS, 
			useClass: ApiKeyInterceptor, 
			multi: true 
		},
		MessageProvider,
		ImagePicker,
		Base64
	]
})
export class AppModule {}
