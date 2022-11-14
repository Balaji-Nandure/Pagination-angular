import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Himalayas',
      url: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'In Love',
      url: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'Thinking about you',
      url: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
