import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/api/api-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  resume?: any;

  constructor(private ResumeService: ResumeService) {}

  ngOnInit(): void {
    this.retrieveResume();
  }

  retrieveResume(): void {
    this.ResumeService.getAll().subscribe(
      (data: any) => {
        console.log('yes');
        this.resume = data;
        console.log(data.name);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
