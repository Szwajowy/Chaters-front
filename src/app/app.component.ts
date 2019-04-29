import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'chaters-front';
  theme = 'light';

  transition() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
  }   

  changeTheme() {
    console.log('changed');
    if(this.theme == 'light') {
      this.theme = 'dark';
      this.transition();
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.theme = 'light';
      this.transition();
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
