import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})
export class ServerComponent {
	serverID: number = 10;
	serverStatus: string = 'offline';
	allowNewServer: boolean = false;
	serverCreationStatus: string = 'No server was created!';
  serverName = '';

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		},2000);
	}

	getServerStatus() {
		return this.serverStatus;
	}
	onServerCreate() {
		this.serverCreationStatus = 'Server was created';
	}
	onUpdateServerName(event: Event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}