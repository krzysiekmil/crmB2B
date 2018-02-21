import {
  Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges,
  ViewChild
} from '@angular/core';
import {AlertController, Content, IonicPage, NavController, NavParams, Popover, PopoverController} from 'ionic-angular';
import {ActivityRule, Question, Section} from "../../model/inguiry-model";
import {isUndefined} from "ionic-angular/es2015/util/util";
import {ConfirmPage} from "../confirm/confirm";

/**
 * Generated class for the InquirySectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inquiry-section',
  templateUrl: 'inquiry-section.html',
})
export class InquirySectionPage implements OnInit, DoCheck {
  @ViewChild(Content) content: Content;
  @Input() @Output() sectionList: Array<Section>;
  @Input() @Output() sectionResult: number;
  @Input() @Output() selectedSection: number;
  @Output() slides = new EventEmitter();
  @Input() @Output() selectedQuestionId: number;
  section: Section;
  disabled: boolean;
  selectedQuestion: number;
  rangeMin: number = 0;
  rangeMax: number = 0;
  sectionConst: number;
  popOver: Popover;
  count: number = 0;

  constructor(private popover: PopoverController, public navCtrl: NavController, public navParams: NavParams, public alertCtr: AlertController) {
    this.selectedQuestion = 1;
    this.selectedQuestionId = 0;
    this.selectedSection = 0;
  }


  ngOnInit() {
    this.selectedQuestion = 1;
    this.selectedQuestionId = 0;
    this.selectedSection = 0;
    this.sectionConst = 0;
    this.section = this.sectionList[this.selectedSection];
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

  test() {
    this.count++;
  }

  nextQuestionButton() {
    console.log(this.selectedQuestionId, this.selectedQuestion);
    if (this.selectedQuestionId >= this.section.questionsList.length - 1) {
      this.slides.next();
    }
    console.log(this.selectedQuestionId, this.selectedQuestion);
    if (this.selectedQuestionId < this.section.questionsList.length - 1)
      if (this.section.questionsList[this.selectedQuestionId + 1].disabled == false) {
        let yOffset = document.getElementById((this.selectedQuestion).toString()).offsetTop;
        if (this.selectedQuestion + 1 != this.section.questionsList[this.selectedQuestionId].id)
          this.selectedQuestion = this.section.questionsList[this.selectedQuestionId + 1].id;
        else {
          this.selectedQuestion++;
        }
        this.content.scrollTo(0, yOffset + 108, 650).catch(err => {
          console.error(err)
        });

      }
      else {
        while (this.section.questionsList[this.selectedQuestionId + 1].disabled == true) {
          this.selectedQuestionId++;
        }
        this.selectedQuestion = this.section.questionsList[this.selectedQuestionId].id;
        let yOffset = document.getElementById(this.selectedQuestion.toString()).offsetTop;
        this.selectedQuestion++;
        if (this.maxQuestionValue(this.section.questionsList[this.selectedQuestionId - 1]))
          this.content.scrollTo(0, yOffset - 86, 650).catch(err => {
          console.error(err)
        });
        else
          this.content.scrollTo(0, yOffset - 20, 650).catch(err => {
            console.error(err)
          });
      }
    if (this.selectedQuestionId < this.section.questionsList.length - 1)
      this.selectedQuestionId++;


  }

  selectQuestion(id: number) {

    if (this.selectedQuestion == id) {
      this.selectedQuestion = null;
      this.selectedQuestionId == null;
    }
    else {
      if (id > this.selectedQuestion && this.selectedQuestion != null) {
        this.selectedQuestion = id;
        this.selectedQuestionId = this.section.questionsList.map(question => {
          return question.id
        }).indexOf(this.selectedQuestion);
        let yOffset = document.getElementById((this.selectedQuestion).toString()).offsetTop;
        this.content.scrollTo(0, yOffset - 108, 650).catch(err => console.error(err));
      }
      else {

        this.selectedQuestion = id;
        this.selectedQuestionId = this.section.questionsList.map(question => {
          return question.id
        }).indexOf(this.selectedQuestion);
        let yOffset = document.getElementById((this.selectedQuestion).toString()).offsetTop;
        this.content.scrollTo(0, yOffset, 650);
      }
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
      buttons: [
        {
          text: 'Popraw',
          handler: () => {
          }
        },
        {
          text: 'Nastepne pytanie',
          handler: () => {
            this.nextQuestionButton()
          }
        }
      ]
    });

    alert.present();
    setTimeout(() => {
      alert.dismiss()
    }, 22000)
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

  popoverQuestion(question: Question) {
    this.popOver = this.popover.create(ConfirmPage, {question: question}, {cssClass: "contact", showBackdrop: true});
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: 359
          };
        }
      }
    };
    this.popOver.present({duration: 350, ev});
    console.log(document.getElementById((2).toString()).offsetTop + 112);
    setTimeout(() => this.popOver.dismiss({}, null, {duration: 3500}), 12000)

  }


}
