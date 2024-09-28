import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CategoryCardComponent } from './pages/home-page/category-card/category-card.component';
import { HotDealComponent } from './pages/home-page/hot-deal/hot-deal/hot-deal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CategoryCardComponent,HotDealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-new-version-app';
}
