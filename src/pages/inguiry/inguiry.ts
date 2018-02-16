import {Component, DoCheck, OnInit, ViewChild, ViewChildDecorator} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Scroll, Slide, Slides} from 'ionic-angular';
import {ActivityRule, Question, Section} from "../../model/inguiry-model";

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
export class InquiryPage implements DoCheck, OnInit {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild(Scroll) scroll: Scroll;
  @ViewChild(Slide) slide: Slide;
  selectedSegment: string;
  slides2: any;
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
  questionRange: Question = {
    id: 9,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  questionRange2: Question = {
    id: 10,
    label: "Czy krowa to ptak?",
    type: 'range',
    defaultValue: 10,
    answer: null,
    active: 'active',
    disabled: null,
    questionAnswers: [{id: 1, label: '100%', value: 0}, {id: 2, label: '0%', value: 100}]
  };
  section: Section = {
    id: 1,
    name: 'sekcja 1', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput, this.questionInput2
      , this.questionCheckBox, this.questionCheckBox2
      , this.questionSelectBox, this.questionSelectBox2
      , this.questionSelectBoxMulti, this.questionSelectBoxMulti2
      , this.questionRange, this.questionRange2]
  };
  section2: Section = {
    id: 2,
    name: 'sekcja 2', maxValue: 100, relativeValue: 50,
    questionsList: [this.questionInput, this.questionInput2
      , this.questionCheckBox, this.questionCheckBox2
      , this.questionSelectBox, this.questionSelectBox2
      , this.questionSelectBoxMulti, this.questionSelectBoxMulti2
      , this.questionRange, this.questionRange2]
  };
  sectionList: Array<Section> = [this.section, this.section2];
  disabled: boolean;
  selectedQuestionId: number;
  selectedQuestion: number;
  sectionResult: number;
  answerValue: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedQuestion = 1;
    this.selectedQuestionId = 0;
  }

  ngOnInit() {
    // this.section.questionsList=this.section.questionsList.filter(question=>{
    //   console.log(question.id,this.visibilityQuestion(question));
    //   return this.visibilityQuestion(question)
    // })

  }

  ngDoCheck() {
    this.sectionResult = 0;
    this.checkAnswer();
  }


  questionSelected(id: number) {
    return this.selectedQuestion == id;
  }

  nextQuestionButton() {
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
          this.selectedQuestion++;
          this.selectedQuestionId++;
        }
        let yOffset = document.getElementById(this.selectedQuestion.toString()).offsetTop;
        this.selectedQuestion++;
        this.content.scrollTo(0, yOffset, 650).catch(err => {
          console.error(err)
        });
      }
    if (this.selectedQuestionId < this.section.questionsList.length - 2)
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
        this.content.scrollTo(0, yOffset - 125, 650).catch(err => console.error(err));
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

  checkAnswer() {
    this.section.questionsList.forEach(question => {
        if (question.answer != null && question.answer !== '') {
          this.answerValue = 0;
          question.questionAnswers.forEach(answer => {
              if (question.answer.toString().toLowerCase().includes(answer.label.toString().toLowerCase().trim())) {
                this.answerValue = this.answerValue + answer.value;
              }
            }
          );
          if (this.answerValue >= 100) {
            this.sectionResult = this.sectionResult + question.defaultValue;
          }
        }
      }
    );
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

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides2.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides2[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
  }

}
