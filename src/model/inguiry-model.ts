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
  answer: any;
  active: string;
  disabled: boolean;
  visibilityRules?: Array<Visibility>;
  defaultValue:number;
  ValueRules?: Array<ValueRule>;
  questionAnswers:Array<Answer>;
  activityRules?: Array<ActivityRule>
}


export interface Section {
  id: number;
  name:string;
  sectionVisibility?:Array<Visibility>
  maxValue:number;
  relativeValue:number;
  questionsList:Array<Question>;
}

export interface inquiry{
  name:string;
  visibilityList:Array<Visibility>;
  sectionsList:Array<Section>;

}
