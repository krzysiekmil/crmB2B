import {Component} from "@angular/core";

export interface Visibility {
  name:string;
  comparator:string;
  value:string;
}

export interface ValueRule {
  value:number;
  ValueRuleVisibility:Array<Visibility>;
}

export interface Answer {
  id:number;
  label:string;
  value:number;
  ValueRules?: Array<ValueRule>;
  ActivityRules?: Array<ActivityRule>;
  VisibilityRules?: Array<Visibility>;
}

export interface ActivityRule {
  targetQuestion:number;
  type:string;
  value: any;
}

export interface Question {
  id:number;
  label:string;
  type:string;
  answer?: any;
  active: string;
  disabled: boolean;
  selected?: boolean;
  state?: any;
  placeholder?: any;
  min?: number;
  max?: number;
  visibilityRules?: Array<Visibility>;
  defaultValue:number;
  ValueRules?: Array<ValueRule>;
  questionAnswers:Array<Answer>;
  activityRules?: Array<ActivityRule>
}


export interface Section {
  hint: boolean;
  id: number;
  name:string;
  sectionVisibility?:Array<Visibility>
  maxValue:number;
  relativeValue:number;
  result: number;
  questionsList:Array<Question>;
}

export interface Inquiry {
  id: number;
  name:string;
  visibilityList?: Array<Visibility>;
  result: number;
  sectionsList:Array<Section>;
}

export interface QuestionState {
  id: number;
  state: string;
  disabled: boolean;
  selected: boolean;
  placeholder: any;
}
