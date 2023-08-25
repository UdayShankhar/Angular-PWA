import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular PWA';
  constructor(private swPush: SwPush) {}
  ngOnInit(): void {}

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notifications is not enabled');
      return;
    }

    this.swPush
      .requestSubscription({
        serverPublicKey:
          'BPzmREvQsHaVK5beR0D2vtyf2S_TJBhKdWlbgzSTh0Ahapu9YRmbsaauYH1bmNBHPF7HH2bO9pAfHRt5Nbwdh5s',
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
