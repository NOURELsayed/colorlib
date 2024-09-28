import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-hot-deal',
  standalone: true,
  imports: [],
  templateUrl: './hot-deal.component.html',
  styleUrl: './hot-deal.component.scss'
})
export class HotDealComponent {


  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private countdownInterval: any;
  private countDownDate: number = new Date("Sep 30, 2024 00:00:00").getTime();
  private isStopped: boolean = false;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = this.countDownDate - now;

      if (distance < 0) {
        this.days = this.hours = this.minutes = this.seconds = 0;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }

      // use requestAnimationFrame to update the countdown every second
      if (!this.isStopped) {
        requestAnimationFrame(updateCountdown);
      }
    };

    updateCountdown();
  }

  ngOnDestroy(): void {
    // if the component is destroyed, stop the countdown
    this.isStopped = true;
  }



}
