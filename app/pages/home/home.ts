import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Angulartics2On } from 'angulartics2';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [Angulartics2On]
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
}
