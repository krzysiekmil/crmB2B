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
  query,
  animateChild
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
      state('open', style({
        transform: 'rotate(0deg)'
      })),
      state('close', style({
        transform: 'rotate(180deg)'
      })),
      transition('*=>*', animate('500ms linear')),
    ]),
    // trigger('panelInOut', [
    //   transition('void => *', [
    //     style({transform: 'rotate(180deg)'}),
    //     animate(800)
    //   ]),
    //   transition('* => void', [
    //     animate(800, style({transform: 'rotate(180deg)'}))
    //   ])
    // ]),
    //   trigger('enlarge', [
    //       state('small', style({
    //         height: '100px',
    //         transform: 'translateY(0)',
    //       })),
    //       state('large', style({
    //         height: '200px',
    //         transform: 'translateY(-300px)',
    //         background: 'red'
    //       }))
    //   ]),
    // trigger('ngIfAnimation', [
    //   transition(':enter, :leave', [
    //     query('@*', animateChild())
    //   ])
    // ]),
    // trigger('easeInOut', [
    //   transition('void => *', [
    //     animate(1000, style({transform: 'rotate(-180deg)'}))
    //   ]),
    //   transition('* => void', [
    //     animate(1000, style({transform: 'rotate(180deg)'}))
    //
    //   ])
    // ])
  ],
  selector: 'page-inquiry-section',
  templateUrl: 'inquiry-section.html',
})
export class InquirySectionPage implements OnInit, DoCheck {
  hint: boolean;
  @Output() test = new EventEmitter<number>();
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
  jobs = [
    {id: 11, title: 'Item 1', state: 'small'},
    {id: 12, title: 'Item 2', state: 'small'},
    {id: 13, title: 'Item 3', state: 'small'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtr: AlertController) {
    console.log("constructor")
    this.questionIdConst = 1;
    this.hint = true;

  }

  enlarge(index) {
    index.state = (index.state === 'small' ? 'large' : 'small');

  }

  ngOnInit() {
    console.log("oninit")
    this.selectedSection = 0;
    this.selectedQuestionId = 0;
    this.sectionConst = 0;
    this.section = this.sectionList[this.selectedSection];
    this.selectedQuestion = this.section.questionsList[this.selectedQuestionId].id;
  }


  ngDoCheck() {
    if (this.sectionConst != this.selectedSection) {
      this.section = this.sectionList[this.selectedSection];
      this.sectionConst = this.selectedSection;
      this.selectedQuestion = 1;
      this.selectedQuestionId = 0;
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
      let yOffset = 0;
      if (this.section.questionsList[this.selectedQuestionId + 1].disabled == false) {
        yOffset = 108;
      }
      else {
        while (this.section.questionsList[this.selectedQuestionId + 1].disabled == true) {
          this.selectedQuestionId++;
        }
        this.selectedQuestion = this.section.questionsList[this.selectedQuestionId].id
      }
      yOffset += document.getElementById((this.selectedQuestion).toString()).offsetTop;
      this.selectedQuestion = this.section.questionsList[this.selectedQuestionId + 1].id;
      this.content.scrollTo(0, yOffset - 20, 650)
        .then(() => {
            this.selectedQuestionId = this.section.questionsList.map(question => {
              return question.id
            }).indexOf(this.selectedQuestion);
          }
        ).catch(err => {
        console.error(err)
      });
    }
  }

  selectQuestion(id: number) {

    this.state = (this.state === 'open' ? 'close' : 'open');

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
      this.content.scrollTo(0, yOffset, 650);
    }

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
