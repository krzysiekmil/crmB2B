import {
  ChangeDetectorRef,
  Component, ContentChild, Directive, DoCheck, ElementRef, Input, OnChanges, OnInit, Pipe, ViewChild,
  ViewChildDecorator
} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Scroll, Slide, Slides} from 'ionic-angular';
import {ActivityRule, Inquiry, Question, Section} from "../../model/inguiry-model";
import {InquirySectionPage} from "../inquiry-section/inquiry-section";


/**
 * Generated class for the InquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//https://codepen.io/LOTUSMS/pen/pRNLwo

@IonicPage()
@Component({
  selector: 'page-inguiry',
  templateUrl: 'inguiry.html',
})
export class InquiryPage implements DoCheck, OnInit, OnChanges {
  @ViewChild(InquirySectionPage) inquirySection;
  @ViewChild(Slides) slides: Slides;
  activityRule: ActivityRule = {targetQuestion: 1, type: "VALUE_COMPARE_EQUAL", value: "NIE"}
  questionInput2: Question = {
    id: 2,
    label: "Czy krowa to ptak?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}],
    activityRules: [this.activityRule]
  };
  questionCheckBox2: Question = {
    id: 4,
    label: "Czy krowa to ptak?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}],
    activityRules: [this.activityRule]
  };
  questionInput: Question = {
    id: 1,
    label: "Czy krowa to ptak?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionInput3: Question = {
    id: 1,
    label: "Czy krowa to ptak?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionCheckBox: Question = {
    id: 3,
    label: "Czy krowa to ptak?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionCheckBox3: Question = {
    id: 3,
    label: "Czy krowa to ptak?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionSelectBox: Question = {
    id: 5,
    label: "Czy krowa to ptak?",
    type: 'select',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBox3: Question = {
    id: 5,
    label: "Czy krowa to ptak?",
    type: 'select',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBox2: Question = {
    id: 6,
    label: "Czy krowa to ptak?",
    type: 'select',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti: Question = {
    id: 7,
    label: "Czy krowa to ptak?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti3: Question = {
    id: 7,
    label: "Czy krowa to ptak?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti2: Question = {
    id: 8,
    label: "Czy krowa to ptak?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionRange3: Question = {
    id: 9,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  questionRange: Question = {
    id: 9,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: "0",
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  questionRange2: Question = {
    id: 10,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: 0,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  section2: Section = {
    result: 0,
    id: 1,
    name: 'sekcja 2', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput3
      , this.questionCheckBox3
      , this.questionSelectBox3
      , this.questionSelectBoxMulti3
      , this.questionRange3]
  };
  section: Section = {
    result: 0,
    id: 0,
    name: 'sekcja 1', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput, this.questionInput2
      , this.questionCheckBox, this.questionCheckBox2
      , this.questionSelectBox, this.questionSelectBox2
      , this.questionSelectBoxMulti, this.questionSelectBoxMulti2
      , this.questionRange, this.questionRange2]
  };
  sectionList: Array<Section> = [this.section, this.section2];
  inquiry: Inquiry = {
    id: 0,
    name: "inquiry 1",
    sectionsList: [this.section, this.section2],
    result: 0
  }
  disabled: boolean;
  sectionResult: number;
  selectedSection: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private changeDetectionRef: ChangeDetectorRef) {
    this.selectedSection = 0;
  }


  ngOnInit() {

    // this.section.questionsList=this.section.questionsList.filter(question=>{
    //   console.log(question.id,this.visibilityQuestion(question));
    //   return this.visibilityQuestion(question)
    // })
    // this.section=this.sectionList[this.slides.getActiveIndex()];

  }

  ionViewDidLoad() {

  }

  ngDoCheck() {
    this.checkAnswer();
    this.countPoints();
  }


  ngOnChanges() {

  }


  checkAnswer() {
    this.inquiry.sectionsList.forEach(section => {
      section.result = 0;
      section.questionsList.forEach(question => {
        if (question.answer != null && question.answer !== '') {
          let answerValue = 0;
          question.questionAnswers.forEach(answer => {
              if (question.answer.toString().toLowerCase().includes(answer.label.toString().toLowerCase().trim())) {
                answerValue = answerValue + answer.value;
              }
            }
          );
          if (answerValue >= 100) {
            section.result = section.result + question.defaultValue;
          }
        }
      }
    );
    })
  }

  countPoints() {
    this.inquiry.result = 0;
    this.sectionList.forEach(section => {
      this.inquiry.result = this.inquiry.result + (section.result * section.relativeValue / 100);
    })
  }

  onSegmentChanged(segmentButton) {
    console.log('Segment changed')
    this.selectedSection = segmentButton.value;
    this.slides.slideTo(segmentButton.value)

  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    this.selectedSection = slider.realIndex;
  }

  next() {
    this.slides.slideNext(700);
    this.selectedSection = this.slides.realIndex;
  }

}
