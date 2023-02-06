import { FetchService } from './../../services/fetch/fetch.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  public page: number = 1;

  public url: string = `https://rickandmortyapi.com/api/episode?page=${this.page}`;

  public result: any;

  constructor(private fetchService: FetchService) {

  }

  async ngOnInit(): Promise<void> {
    this.result = await this.fetchService.getData(this.url)
    console.log(this.result)
  }


}
