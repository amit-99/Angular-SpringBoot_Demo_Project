// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
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
