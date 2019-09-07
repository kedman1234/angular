import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			border: 1px solid green;
		}
		.offline {
			border: 1px solid red;
		}
		.status {
			padding: 20px;
		}
	`]
})
export class ServerComponent {
  
	serverID: number = 10;
	serverStatus: string = 'offline';
	showSecret:  boolean = false;
	logs = [];

	getServerStatus() {
		return this.serverStatus;
	}

  constructor() { 
  	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
  	return this.serverStatus === 'online' ? 'palegreen' : 'mistyrose'
  }

  onToggleDetails() {
  	this.showSecret = !this.showSecret;
  	// this.logs.push(this.logs.length + 1);
  	this.logs.push(new Date);
  }

  ngOnInit() {
  }
}
