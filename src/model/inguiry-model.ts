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
  answerValueRules?:Array<ValueRule>;
}

export interface ActivityRule {
  targetQuestion:number;
  type:string;
  value:number;
}

export interface Question {
  id:number;
  label:string;
  type:string;
  questionVisibility?:Array<Visibility>;
  defaultValue:number;
  questionValueRules?:Array<ValueRule>;
  questionAnswers:Array<Answer>;
  activityRules?:Array<ActivityRule>
}
export interface questionClick{

}

export interface Section {
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
