// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService.getHello().subscribe((response) => {
      this.message = response;
    });
  }
}
