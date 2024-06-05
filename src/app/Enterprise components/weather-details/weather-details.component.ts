import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherData: Data[] = [];
  cityName: string = '';
  selectedCityWeather: Data | null = null;

  ngOnInit() {}

  onCityNameChange(event: any) {
    const cityName = event?.target?.value; // Accessing value only if event.target is not null
    if (cityName) {
      this.cityName = cityName;
      this.updateWeatherDetails();
    }
  }

  updateWeatherDetails() {
    if (this.cityName) {
      const cityWeather = this.weatherData.find(city => city.name.toLowerCase() === this.cityName.toLowerCase());
      this.selectedCityWeather = cityWeather ? cityWeather : null;
    } else {
      this.selectedCityWeather = null;
    }
  }
}

interface Data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
