import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {Content, Keyboard, NavController, NavParams} from 'ionic-angular';
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
      transition('false=>true', animate('500ms linear')),
      transition('true=>false', animate('100ms linear'))
    ]),
    trigger('expand', [
      state('true', style({height: '*'})),
      state('false', style({height: '0'})),
      transition('void=>*', animate('0s')),
      transition('false => true', animate('250ms linear')),
      transition('true=>false', animate('100ms linear'))
    ]),
    trigger('state', [
      state('active', style({backgroundColor: '#2790f4', boxShadow: '0 5px 15px -6px #007fd9'})),
      state('wrong', style({backgroundColor: '#ff1c15'})),
      state('correct', style({backgroundColor: '#32CD32'})),
      state('special', style({backgroundColor: '#8A2BE2'})),
      state('notClicked', style({backgroundColor: '#8a8a8a'})),
      transition('void=>*', animate('0s')),
      transition('*=>*', animate('350ms linear'))
    ])
  ],
  selector: 'page-inquiry-section',
  templateUrl: 'inquiry-section.html',
})
export class InquirySectionPage implements OnInit, OnChanges {
  hint: boolean;
  @Output() test = new EventEmitter<any>();
  @ViewChild(Content) content: Content;
  @Input() section: Section;
  @Input() sectionResult: number;
  @Input() sectionId: number;
  @Output() slides = new EventEmitter();
  selectedQuestionId: number;
  rangeMin: number = 0;
  rangeMax: number = 100;


  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
    this.selectedQuestionId = 0;

  }

  ngOnInit() {
    this.init();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.content.scrollToTop().catch(err => {
      console.error(err);
    });
    this.changeSection();
  }

  changeSection(): void {
    console.log('changeSection_inside');
    if (this.sectionId !== 0) {
      this.selectedQuestionId = 0;
      this.section.questionsList[this.selectedQuestionId].selected = true;
      this.setQuestionState(this.section.questionsList[this.selectedQuestionId], 'active');
      this.hint = this.section.hint;
    }
  }

  init(): void {
    this.selectedQuestionId = 0;
    this.hint = this.section.hint;
    this.section.questionsList.forEach(question => {
        this.disabledQuestion(question);
        this.placeholderQuestion(question);
        this.initStateQuestion(question);
      });


  }

  doNothing() {
    console.log('NIC NIE ROBIE')
  }

  getLength(tag: string, id: string) {
    console.log(Array.from(document.getElementsByTagName(tag)).find(element => {
      return element.id === id
    }).scrollHeight);

  }

  initStateQuestion(question: Question): void {
    if (question.selected == true)
      question.state = 'active';
    else
      question.state = 'notClicked'
  };

  setQuestionState(question: Question, state: string): void {
    if (question.state !== 'correct')
      question.state = state;
  }

  placeholderQuestion(question: Question) {
    if (question.type === 'input') {
      question.placeholder = this.setInputPlaceHolder(question.id);
    }
    else if (question.type === 'select' || question.type === 'selectMultiple') {
      question.placeholder = this.setSelectPlaceholder(question);
    }
  }

  onChangeModel() {
    this.section.questionsList.forEach(question => {
      this.disabledQuestion(question);
      this.maxQuestionValue(question);
    });
  }


  nextQuestionButton(question: Question, id?: number) {
    this.setQuestionState(question, 'wrong');
    if (id >= this.section.questionsList.length - 1) {
        this.slides.next();
      }
      else {
      this.section.questionsList[id].selected = false;
        let yOffset = 0;
      while (this.section.questionsList[++id].disabled == true) {
      }
      this.selectedQuestionId = id;
      console.log(id);
      yOffset += document.getElementById((id).toString()).offsetTop;

      this.content.scrollTo(0, yOffset - 108, 750)
          .then(() => {
          }).catch(err => {
          console.error(err)
          }
        );
      this.section.questionsList[this.selectedQuestionId].selected = true;
      this.setQuestionState(this.section.questionsList[this.selectedQuestionId], 'active');
      }
  }

  clickQuestion(id: number) {
    if (this.selectedQuestionId != null) {
      this.section.questionsList[this.selectedQuestionId].selected = false;
      this.setQuestionState(this.section.questionsList[this.selectedQuestionId], 'wrong');
    }
    if (this.selectedQuestionId == id) {
      this.selectedQuestionId = null;
    }
    else {
      let yOffset = 0;
      if (id >= this.selectedQuestionId)
        yOffset = -108;
      this.selectedQuestionId = id;
      yOffset += document.getElementById((id).toString()).offsetTop;
      this.content.scrollTo(0, yOffset, 750).then(() => {
        console.log(yOffset);
      }).catch(err => {
        console.error(err);
      });
      this.section.questionsList[id].selected = true;
      this.setQuestionState(this.section.questionsList[id], 'active');
    }
  }

  disabledQuestion(question: Question) {
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
      );
      if (type === 'max')
        return this.rangeMax;
      else
        return this.rangeMin;
    }
  }

  maxQuestionValue(question: Question) {
    if (question.state !== 'notClicked') {
      let answerValue = 0;
      if (question.answer != null && question.answer !== '') {
        question.questionAnswers.forEach(answer => {
            if (question.answer.toString().toLowerCase().includes(answer.label.toString().toLowerCase().trim())) {
              answerValue = answerValue + answer.value;
            }
          }
        );
        if (answerValue < 100 && question.answer != null && question.answer !== '') {
          question.state = 'wrong';
        }
        else {
          question.state = 'correct';
        }
      }
    }

  }
}
