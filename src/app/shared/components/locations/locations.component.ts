import { FetchService } from './../../services/fetch/fetch.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  public page: number = 1;

  public url: string = `https://rickandmortyapi.com/api/location?page=${this.page}`;

  public result: any;

  constructor(private fetchService: FetchService) {

  }

  async ngOnInit(): Promise<void> {
    this.result = await this.fetchService.getData(this.url)
    console.log(this.result)
  }


}
