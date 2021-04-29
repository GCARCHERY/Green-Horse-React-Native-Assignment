export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Challange: undefined;
  Profile: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type HomeParamList = {
  SkillChallangeScreen: undefined;
};

export type AlertPage = 'Profile' | 'Challange';

export type UserData = {
  userId: number,
  level: number,
  gold: number,
  userName: string,
  clubName: string,
  medals: Array<UserMedals>
} | null;

export type UserMedals = {
  type: string,
  amount: string
};

export type Currency = number;

export type Challanges = {
  challengeGroup: Array<ChallangeUser>,
  uncollectedReward?: Reward
} | null;

export type ChallangeUser = {
  skill: number,
  userId: number,
  userName: string
};

type Reward = {
  reward: number,
  type: string
};
