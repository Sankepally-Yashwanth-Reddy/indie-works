import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Job {
  jobTitle: string;
  categories: string[];
  budget: number;
  deadline?: string;
  jobDescription: string;
  attachments?: File[];
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobList: Job[] = [];
  private jobsSubject = new BehaviorSubject<Job[]>([]);

  constructor() { }

  // Add a new job and update the observable
  addJob(job: Job): void {
    this.jobList.push(job);
    this.jobsSubject.next([...this.jobList]); // Emit new value
  }

  // Get the jobs as an observable
  getJobs(): Observable<Job[]> {
    return this.jobsSubject.asObservable();
  }

  // Retrieve job list directly (for non-reactive use cases)
  getJobList(): Job[] {
    return this.jobList;
  }
}
