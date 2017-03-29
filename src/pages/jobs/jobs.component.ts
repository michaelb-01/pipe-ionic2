import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob, Job } from './job.model';

@Component({
  templateUrl: 'jobs.component.html'
})
export class JobsComponent {
	isLoading: boolean;			// determing whether the jobs have loaded or not, useful for spinners etc
	jobs: Observable<any[]>;

	constructor() {
		this.isLoading = true;
		this.jobs = this.findJobs();
	}

    private findJobs(): Observable<IJob[]> {
	    return Observable.of([
	      {
	        _id: '0',
	        name: 'Sneakerboots',
	        client: 'Nike',
	        agency: 'More and More',
	        thumbUrl: '/img/nike_sprites.jpg',
	        public: true
	      },
	      {
	        _id: '1',
	        name: 'Service',
	        client: 'Audi',
	        agency: 'Radical',
	        thumbUrl: '/img/audi_sprites.jpg',
	        public: true
	      }
	    ]);
    }
}