import {
  ChangeDetectorRef,
  Component, ContentChild, Directive, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Pipe,
  ViewChild,
  ViewChildDecorator
} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Scroll, Slide, Slides} from 'ionic-angular';
import {ActivityRule, Inquiry, Question, Section} from "../../model/inguiry-model";
import {InquirySectionPage} from "../inquiry-section/inquiry-section";
import {SummaryPage} from "../summary/summary";


/**
 * Generated class for the InquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//https://codepen.io/LOTUSMS/pen/pRNLwo
export interface Button {
  id?: number;
  name: string;
  componentName?: string
}

@Component({
  selector: 'page-inguiry',
  templateUrl: 'inguiry.html',
})
export class InquiryPage implements DoCheck, OnInit, OnChanges {
  @Output() pop = new EventEmitter();
  @ViewChild(SummaryPage) summaryPage;
  @ViewChild(InquirySectionPage) inquirySection;
  @ViewChild(Slides) slides: Slides;
  activityRule: ActivityRule = {targetQuestion: 1, type: "VALUE_COMPARE_EQUAL", value: "NIE"}
  questionInput2: Question = {
    selected: false,
    id: 2,
    label: "Czy produkt znajduje się w widocznym miejscu?",
    type: 'input',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}],
    activityRules: [this.activityRule]
  };
  questionCheckBox2: Question = {
    selected: false,
    id: 4,
    label: "Czy zostały sprzedane wszystkie produkty z kat. 2?",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'nie', value: 0}, {id: 2, label: 'tak', value: 100}],
    activityRules: [this.activityRule]
  };
  questionInput: Question = {
    selected: false,
    id: 1,
    label: "Wizyta się odbyła?",
    type: 'input',
    defaultValue: 10,
    answer: '',
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionInput3: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 1,
    label: "Sklep otwarty w niedziele",
    type: 'input',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionCheckBox: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 3,
    label: "Czy nastąpiła zmiana danych osobowych ? ",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionCheckBox3: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 3,
    label: "Reklamy firm zewnętrznych",
    type: 'checkbox',
    defaultValue: 10,
    answer: false,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'false', value: 0}, {id: 2, label: 'true', value: 100}]
  };
  questionSelectBox: Question = {
    selected: false,
    id: 5,
    label: "Zainteresowanie klienta większą współpracą ?",
    type: 'select',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBox3: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 5,
    label: "Czy klient przejawia zainteresowanie nowymi produktami?",
    type: 'select',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 100}, {id: 2, label: 'NIE', value: 0}]
  };
  questionSelectBox2: Question = {
    selected: false,
    id: 6,
    label: "Czy produkty znajduja się w widocznym miejscu?",
    type: 'select',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'TAK', value: 0}, {id: 2, label: 'NIE', value: 100}]
  };
  questionSelectBoxMulti: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 7,
    label: "Produkty z której kategorii cieszyły się najwiekszym zainteresowaniem?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'kat. 1 ', value: 0}, {id: 2, label: 'kat. 2', value: 100}, {
      id: 3,
      label: 'kat. 3',
      value: 12
    }]
  };
  questionSelectBoxMulti3: Question = {
    camera: true,
    photo: null,
    selected: false,
    id: 7,
    label: "Ułożenie produktów zgodne z planogramem?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'Planogram nr. 1', value: 0}, {
      id: 2,
      label: 'Planogram nr.2 ',
      value: 100
    }, {id: 3, label: 'Planogram nr.23 ', value: 100}]
  };
  section2: Section = {
    hint: false,
    result: 0,
    id: 1,
    name: 'Sprzedaż', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput3
      , this.questionCheckBox3
      , this.questionSelectBox3
      , this.questionSelectBoxMulti3
      ,]
  };
  // questionRange3: Question = {
  //   selected: false,
  //   id: 9,
  //   label: "Czy krowa to ptak?",
  //   type: 'range',
  //   defaultValue: 10,
  //   answer: null,
  //   active: 'active',
  //   disabled: null,
  //   questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  // };
  // questionRange: Question = {
  //   selected: false,
  //   id: 9,
  //   label: "Czy krowa to ptak?",
  //   type: 'range',
  //   defaultValue: 10,
  //   answer: null,
  //   active: 'active',
  //   disabled: null,
  //   questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  // };
  // questionRange2: Question = {
  //   selected: false,
  //   id: 10,
  //   label: "Czy krowa to ptak?",
  //   type: 'range',
  //   defaultValue: 10,
  //   answer: null,
  //   active: 'active',
  //   disabled: null,
  //   questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  questionSelectBoxMulti2: Question = {
    selected: false,
    id: 8,
    label: "Reklamy produktów ?",
    type: 'selectMultiple',
    defaultValue: 12,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'Marka nr.1', value: 0}, {id: 2, label: 'Marka nr.2', value: 100}, {
      id: 3,
      label: 'Marka nr.3',
      value: 100
    }, {id: 4, label: 'Marka nr.4', value: 100}]
  };
  // };
  questionRadio: Question = {
    selected: false,
    id: 11,
    label: 'Lokalizacja produktu nr. 124',
    type: 'radio',
    defaultValue: 10,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: 'Kasa', value: 0}, {id: 2, label: 'Regał w alejce', value: 100}, {
      id: 2,
      label: 'Regał w widocznym miejscu',
      value: 100
    }]
  };
  section: Section = {
    hint: true,
    result: 0,
    id: 0,
    name: 'Informacje ogólne', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput, this.questionInput2
      , this.questionCheckBox, this.questionCheckBox2
      , this.questionSelectBox, this.questionSelectBox2
      , this.questionSelectBoxMulti, this.questionSelectBoxMulti2
      , this.questionRadio]
  };
  sectionList: Array<Section> = [this.section, this.section2];
  inquiry: Inquiry = {
    id: 0,
    name: "inquiry 1",
    sectionsList: [this.section, this.section2],
    result: 0
  };
  selectedButton: number = 0;
  disabled: boolean;
  sectionResult: number;
  selectedSection: number;
  selectedQuestionId: number = 0;
  buttonList: Array<Button> = [{name: 'Posumowanie', id: 0}];
  y = '45px';
  c = '100%';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSection = 0;
    this.inquiry.sectionsList[0].questionsList[0].selected = true;
    this.inquiry.sectionsList.forEach(section => {
      this.buttonList.push({name: section.name, id: section.id + 1});
    })
  }

  setSelectedQuestionId(id: number) {
    console.log("setSelectedQuestionId");
    this.selectedQuestionId = id;
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
    // this.checkAnswer();
    // this.countPoints();
  }


  ngOnChanges() {

  }

  setY() {
    if (this.c === '100%') {
      this.y = '5px'
      this.c = '120%';
    } else {
      this.y = '45px';
      this.c = '100%';
    }
    console.log(this.c, this.y)
  }

  swipeEvent(e) {
    console.log(e)
    if (e.additionalEvent === "panup")
      this.y = '80px';

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

  onSlideChanged(slider) {
    console.log('Slide changed', slider.realIndex, this.selectedSection);
    this.selectedSection = slider.realIndex;
  }

  next() {
    console.log(this.selectedSection, this.slides.realIndex);
    this.slides.slideNext(1000);

  }

  openSection(id) {
    if (this.selectedSection !== id)
      this.slides.slideTo(id);
  }
  selectedFromSummary(id) {
    this.slides.slideTo(id + 1)
  }

  closeInquiry() {
    // this.
  }

}
