import { Component, Input } from '@angular/core';
import { IJob } from './job.model';

@Component({
	selector: 'job-card',
  	templateUrl: 'job-card.component.html'
})
export class JobCardComponent {
	@Input() job: IJob;

	constructor() {

	}
}