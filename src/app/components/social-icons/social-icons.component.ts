import { Component } from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';

@Component({
  selector: 'app-social-icons',
  imports: [],
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss', '../../shared/scss/hover-effects.scss']
})
export class SocialIconsComponent {

  constructor(public utilService: UtilsService) {}

}
