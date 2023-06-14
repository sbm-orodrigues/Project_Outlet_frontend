
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeItem } from 'src/model/ShoeItem';
import { BasePageComponent } from '../../base-page/base-page.component';
import { TesteServiceService } from 'src/service/TesteService.service';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.css']
})
export class ShoePageComponent extends BasePageComponent{
getData() {
throw new Error('Method not implemented.');
}
  public shoe:ShoeItem|any;

  data: any;

  constructor(private route: ActivatedRoute,
    testeServiceService: TesteServiceService) {
    super();
    this.shoe = null;

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!);
      testeServiceService.getShoeById(id).subscribe(
        (data: any) => {
          this.shoe = data;
          console.log(this.shoe.ratings[0].id);
        },
        (error) => {
          console.log(error);
        });
    });

  }




}
