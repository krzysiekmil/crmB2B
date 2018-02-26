import {
  Component, DoCheck, EventEmitter, Input, OnInit, Output,

  ViewChild
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import {Question, Section} from "../../model/inguiry-model";
/**
 * Generated class for the InquirySectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  animations: [
    trigger('rotate', [
      state('true', style({transform: 'rotate(0deg)'})),
      state('false', style({transform: 'rotate(180deg)'})),
      transition('void=>*', animate('0s')),
      transition('*=>*', animate('525ms linear')),
    ]),
    trigger('expand', [
      state('true', style({height: '*'})),
      state('false', style({height: '0'})),
      transition('void=>*', animate('0s')),
      transition('* => *', animate('650ms ease-in-out'))

    ])
  ],
  selector: 'page-inquiry-section',
  templateUrl: 'inquiry-section.html',
})
export class InquirySectionPage implements OnInit, DoCheck {
  hint: boolean;
  @Output() test = new EventEmitter<any>();
  state: string = 'open';
  @ViewChild(Content) content: Content;
  @Input() @Output() sectionList: Array<Section>;
  @Input() @Output() sectionResult: number;
  @Input() @Output() selectedSection: number;
  @Output() slides = new EventEmitter();
  selectedQuestionId: number;
  section: Section;
  disabled: boolean;
  selectedQuestion: number;
  rangeMin: number = 0;
  rangeMax: number = 0;
  sectionConst: number;
  questionIdConst: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtr: AlertController) {
    console.log("constructor")
    this.questionIdConst = 1;
    this.hint = true;

  }

  ngOnInit() {
    console.log("onInit")
    this.selectedSection = 0;
    this.selectedQuestionId = 0;
    this.sectionConst = 0;
    this.section = this.sectionList[this.selectedSection];
    this.selectedQuestion = this.section.questionsList[this.selectedQuestionId].id;
  }


  ngDoCheck() {
    if (this.sectionConst != this.selectedSection) {
      this.section.questionsList[this.selectedQuestionId].selected = false;
      this.section = this.sectionList[this.selectedSection];
      this.sectionConst = this.selectedSection;
      this.selectedQuestion = 1;
      this.selectedQuestionId = 0;
      this.section.questionsList[this.selectedQuestionId].selected = true
      this.content.scrollToTop();
    }
  }

  questionSelected(id: number) {
    return this.selectedQuestion == id;
  }


  nextQuestionButton() {
    if (this.selectedQuestionId >= this.section.questionsList.length - 1) {
      this.slides.next();
    }
    else {
      this.section.questionsList[this.selectedQuestionId].selected = false;
      let yOffset = 0;
      if (this.section.questionsList[this.selectedQuestionId + 1].disabled == false) {
        yOffset = 98;
      }
      else {
        while (this.section.questionsList[this.selectedQuestionId + 1].disabled == true) {
          this.selectedQuestionId++;
        }
        this.selectedQuestion = this.section.questionsList[this.selectedQuestionId].id
      }
      yOffset += document.getElementById((this.selectedQuestion).toString()).offsetTop;
      this.selectedQuestion = this.section.questionsList[this.selectedQuestionId + 1].id;
      this.content.scrollTo(0, yOffset - 20, 850)
        .then(() => {
          }
        ).catch(err => {
        console.error(err)
      });
      this.selectedQuestionId = this.section.questionsList.map(question => {
        return question.id
      }).indexOf(this.selectedQuestion);
      this.section.questionsList[this.selectedQuestionId].selected = true;
    }
    this.test.emit(this.selectedQuestionId);
  }

  checkQuestion(id: number): boolean {
    return id == this.selectedQuestionId;
  }

  selectQuestion(id: number) {
    this.section.questionsList[this.selectedQuestionId].selected = false;
    if (this.selectedQuestion == id) {
      this.selectedQuestion = null;
      this.selectedQuestionId == null;

    }
    else {
      let yOffset = 0
      if (id > this.selectedQuestion && this.selectedQuestion != null)
        yOffset = -108;
      this.selectedQuestion = id;
      this.selectedQuestionId = this.section.questionsList.map(question => {
        return question.id
      }).indexOf(this.selectedQuestion);
      yOffset += document.getElementById((this.selectedQuestion).toString()).offsetTop;
      this.section.questionsList[this.selectedQuestionId].selected = true;
      this.content.scrollTo(0, yOffset, 850);
    }
    this.test.emit(this.selectedQuestionId);

  }

  disabledQuestion(question: Question): boolean {
    question.disabled = false;
    if (question.activityRules != null) {
      question.disabled = true;
      question.activityRules.forEach(rule => {
          switch (rule.type) {
            case "VALUE_COMPARE_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer.toLocaleLowerCase().trim() === (rule.value.toString().toLocaleLowerCase().trim()))
                question.disabled = false;
              break;
            }
            case "VALUE_COMPARE_GREATER": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer > (rule.value))
                question.disabled = true;
              break;
            }
            case "VALUE_COMPARE_GREATER_OR_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer >= (rule.value))
                question.disabled = true;
              break;
            }
            case "VALUE_COMPARE_SMALLER": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer < (rule.value))
                question.disabled = true;
              break;
            }
            case "VALUE_COMPARE_SMALLER_OR_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer <= (rule.value))
                question.disabled = true;
              break;
            }
            case "VALUE_COMPARE_NOT_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer.toString().toLocaleLowerCase().trim() !== (rule.value.toString().toLocaleLowerCase().trim()))
                question.disabled = true;
              break;
            }
          }
        }
      );
    }
    return question.disabled;
  }

  visibilityQuestion(question: Question) {
    let visibility = true;
    if (question.activityRules != null) {
      visibility = false;
      question.activityRules.forEach(rule => {
          switch (rule.type) {
            case "VALUE_COMPARE_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer.toLocaleLowerCase().trim() === (rule.value.toString().toLocaleLowerCase().trim()))
                visibility = true;
              break;
            }
            case "VALUE_COMPARE_GREATER": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer > (rule.value))
                visibility = true;
              break;
            }
            case "VALUE_COMPARE_GREATER_OR_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer >= (rule.value))
                visibility = true;
              break;
            }
            case "VALUE_COMPARE_SMALLER": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer < (rule.value))
                visibility = true;
              break;
            }
            case "VALUE_COMPARE_SMALLER_OR_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer <= (rule.value))
                visibility = true;
              break;
            }
            case "VALUE_COMPARE_NOT_EQUAL": {
              if (this.section.questionsList[rule.targetQuestion - 1].answer.toString().toLocaleLowerCase().trim() !== (rule.value.toString().toLocaleLowerCase().trim()))
                visibility = true;
              break;
            }
            default: {
              break;
            }
          }
        }
      );
    }
    return visibility;
  }

  setInputPlaceHolder(id: number) {
    let placeholder = '';
    this.section.questionsList[id - 1].questionAnswers.forEach(answer => {
      if (placeholder === "")
        placeholder = answer.label;
      else
        placeholder = placeholder + "/" + answer.label
    });
    return placeholder;
  }

  setSelectPlaceholder(question: Question) {
    return question.questionAnswers[0].label.toString()

  }

  setRangeValue(question: Question, type: string): number {
    if (type === "max") {
      question.questionAnswers.forEach(question => {
          if (question.value > this.rangeMax) {
            this.rangeMax = question.value;
          }
          else {
            if (question.value < this.rangeMin) {
              this.rangeMin = question.value;
            }
          }
        }
      )
      if (type === 'max')
        return this.rangeMax;
      else
        return this.rangeMin;
    }
  }

  showAlert(question: Question) {


    let alert = this.alertCtr.create({
      title: question.label,
      message: 'tutaj tekst o tym, ze z krowy kiepski jest ptak',
      inputs: [
        {
          name: 'hint',
          type: 'checkbox',
          label: 'Nie wyswietlaj podowiedzi',
          value: 'true',
          checked: !this.hint
        }
      ],
      buttons: [
        {
          text: 'Popraw',
          handler: (data) => {
            if (data[0] !== 'true') {
              this.hint = true;
            }
            else {
              this.hint = false;
            }
            console.log(this.hint);
          }
        },
        {
          text: 'Nastepne pytanie',
          handler: (data) => {
            if (data[0] !== 'true') {
              this.hint = true;
            }
            else {
              this.hint = false;
            }
            console.log(this.hint)
            this.nextQuestionButton()
          }
        }
      ]
    });

    alert.present();
    // setTimeout(() => {
    //   alert.dismiss()
    // }, 22000)
  }

  maxQuestionValue(question: Question) {
    let answerValue = 0;
    if (question.answer != null && question.answer !== '') {
      question.questionAnswers.forEach(answer => {
          if (question.answer.toString().toLowerCase().includes(answer.label.toString().toLowerCase().trim())) {
            answerValue = answerValue + answer.value;
          }
        }
      );
      if (answerValue < 100 && question.answer != null && question.answer !== '') {
        return true;
      }
      else
        return false;
    }
  }



}
