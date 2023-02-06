import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../../services/fetch/fetch.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit{

  public result?: any;
  public id?: any;
  public url: string = "https://rickandmortyapi.com/api/character/";

  constructor(private route: ActivatedRoute, private fetchService: FetchService) {}

  

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      console.log(this.id)
    })

    this.result = await this.fetchService.getData(this.url+this.id)
    console.log(this.result)
  }

}
