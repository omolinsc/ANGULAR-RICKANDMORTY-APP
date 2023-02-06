import { FetchService } from './../../services/fetch/fetch.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{

  public page: number = 1;

  public url: string = `https://rickandmortyapi.com/api/character?page=`;

  public result?: any;

  public lastPage!: number;

  constructor(private fetchService: FetchService, private router: Router) {

  }

  btnClick = (id:string) => {
          this.router.navigate([`characters/${id}`]);
  };

  async ngOnInit(): Promise<void> {
    this.result = await this.fetchService.getData(this.url+this.page)
    this.lastPage = this.result.info.pages;

    console.log(this.result.results)

  }

  lessPage = async () => {
    this.page--;
    this.result = await this.fetchService.getData(this.url+this.page)
    console.log(this.page)
  }

  morePage = async () => {
    this.page++;
    this.result = await this.fetchService.getData(this.url+this.page)
    console.log(this.page)
  }

}
