import {Component, Input, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Task, Target} from "../section-daily-plan/section-daily-plan";
import {TargetComponentPage} from "../target-component/target-component";

/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage implements OnInit {
  @Input() data: Array<Task>;
  @Input() type: string;
  @Input() monthlyPlan: Array<Target>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log(this.type, this.data, this.monthlyPlan)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanPage');
  }

  showTarget(name: string) {
    this.navCtrl.push(TargetComponentPage, {title: name})
  }

}
