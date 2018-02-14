import {Component, DoCheck, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {Answer, Question, Section} from "../../model/inguiry-model";
import {isUndefined} from "ionic-angular/util/util";

/**
 * Generated class for the InquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inguiry',
  templateUrl: 'inguiry.html',
})
export class InquiryPage implements DoCheck {
  @ViewChild(Content) content: Content;
  questionInput: Question = {
    id: 1,
    label: "Czy krowa to ptak?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionInput2: Question = {
    id: 2,
    label: "Czy krowa to ptak?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionCheckBox: Question = {
    id: 3,
    label: "Czy krowa to ptak?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionCheckBox2: Question = {
    id: 4,
    label: "Czy krowa to ptak?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionSelectBox: Question = {
    id: 5,
    label: "Czy krowa to ptak?",
    type: 'select',
    defaultValue: 10,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBox2: Question = {
    id: 6,
    label: "Czy krowa to ptak?",
    type: 'select',
    defaultValue: 10,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti: Question = {
    id: 7,
    label: "Czy krowa to ptak?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti2: Question = {
    id: 8,
    label: "Czy krowa to ptak?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: '',
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionRange: Question = {
    id: 9,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  questionRange2: Question = {
    id: 10,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  section: Section = {
    name: 'sekcja 1', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput, this.questionInput2
      , this.questionCheckBox, this.questionCheckBox2
      , this.questionSelectBox, this.questionSelectBox2
      , this.questionSelectBoxMulti, this.questionSelectBoxMulti2
      , this.questionRange, this.questionRange2]
  };
  sections: Array<Section> = [this.section, this.section];
  selectedSegment: string;
  slides: any;
  selectedQuestion: number;
  sectionResult: number;
  seletedAnswer: any;
  anwsersValue: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedQuestion = 1;

  }

  ngDoCheck() {
    this.sectionResult = 0;
    this.checkAnswer();
  }


  questionSelected(id: number) {
    return this.selectedQuestion == id;
  }

  nextQuestionButton() {
    let yOffset = document.getElementById(this.selectedQuestion.toString()).offsetTop;
    this.selectedQuestion++;
    this.content.scrollTo(0, yOffset + 100, 650);

  }

  selectQuestion(id: number) {
    if (this.selectedQuestion == id)
      this.selectedQuestion = null;
    else {
      if (id > this.selectedQuestion) {
        this.selectedQuestion = id;
        let yOffset = document.getElementById((this.selectedQuestion).toString()).offsetTop;
        this.content.scrollTo(0, yOffset - 125, 650);
      }
      else {
        this.selectedQuestion = id;
        let yOffset = document.getElementById((this.selectedQuestion).toString()).offsetTop;
        this.content.scrollTo(0, yOffset, 650);
      }
    }
  }

  disabled(question: Question) {
    return true;
  }


  checkAnswer() {
    this.section.questionsList.forEach(question => {
        if (question.answer != null && question.answer !== '') {
          this.anwsersValue = 0;
          question.questionAnswers.forEach(answer => {
              if (question.answer.toString().toLowerCase().includes(answer.label.toString().toLowerCase().trim())) {
                this.anwsersValue = this.anwsersValue + answer.value;
              }
            }
          );
          if (this.anwsersValue >= 100) {
            this.sectionResult = this.sectionResult + question.defaultValue;
          }
        }
        ;
      }
    );
  }


  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
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

  sectionValue() {

  }

}
