import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrypage',
  templateUrl: './by-countrypage.component.html',
  styleUrls: ['./by-countrypage.component.css'],
})
export class ByCountrypageComponent {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.initialValue =
      this.countriesService.cacheStore.byCountries.term;
  }
}
