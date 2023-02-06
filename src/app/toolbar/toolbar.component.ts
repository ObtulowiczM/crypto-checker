import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  selectedCurrency: string = 'EUR';

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }

  goToMainPage() {
    this.router.navigate(['/coin-list']);
  }
}
