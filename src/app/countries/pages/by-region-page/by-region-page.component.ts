import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByregion(region: Region): void {
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
}
