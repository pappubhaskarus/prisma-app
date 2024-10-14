import Metadata from "../models/Metadata";
import {loopEnum, mapValueToType} from "./util";

export enum EDomainType {
  Blog = "blog",
  EdTech = "edtech",
  Bakeries = "bakeries",
}

export enum Celebrations {
  Birthdays = "Birthdays",
  Weddings = "Weddings",
  Anniversaries = "Anniversaries",
  Graduations = "Graduations",
  BabyShowers = "Baby Showers",
  BaptismsChristenings = "Baptisms/Christenings",
  Engagements = "Engagements",
  Retirements = "Retirements",
  Christmas = "Christmas",
  Easter = "Easter",
  Halloween = "Halloween",
  Thanksgiving = "Thanksgiving",
  Hanukkah = "Hanukkah",
  Diwali = "Diwali",
  Eid = "Eid",
  ValentinesDay = "Valentine's Day",
  NewYearsEve = "New Year's Eve",
  NewYearsDay = "New Year's Day",
  MothersDay = "Mother's Day",
  FathersDay = "Father's Day",
  Passover = "Passover",
  Ramadan = "Ramadan",
  Holi = "Holi",
  Vesak = "Vesak",
  Kwanzaa = "Kwanzaa",
  CorporateAchievements = "Corporate achievements",
  EmployeeMilestones = "Employee milestones",
  TeamGatherings = "Team gatherings",
  Farewells = "Farewells",
  Promotions = "Promotions",
  Housewarmings = "Housewarmings",
  GenderRevealParties = "Gender Reveal Parties",
  FriendshipDay = "Friendship Day",
  Sweet16Birthdays = "Sweet 16 Birthdays",
  TwentyFirstBirthdays = "21st Birthdays",
  FiftiethBirthdays = "50th Birthdays",
  Quinceañeras = "Quinceañeras",
  BarBatMitzvahs = "Bar/Bat Mitzvahs",
  RetirementParties = "Retirement Parties",
  SportsVictories = "Sports Victories",
  WelcomeHomeParties = "Welcome Home Parties",
  ThankYouCelebrations = "Thank You Celebrations",
  FamilyReunions = "Family Reunions",
  OpeningNight = "Opening Night (theater, film premiere)",
  BookReleasesSignings = "Book Releases or Signings",
  CharityEvents = "Charity Events",
  SchoolReunions = "School Reunions",
  BonVoyageParties = "Bon Voyage Parties",
  Commencements = "Commencements",
  AwardCeremonies = "Award Ceremonies",
  FestivalsAndFairs = "Festivals and Fairs",
  CulturalCelebrations = "Cultural Celebrations",
  IndependenceDaysNationalHolidays = "Independence Days/National Holidays",
  NewBusinessLaunches = "New Business Launches",
  TeacherAppreciationDay = "Teacher Appreciation Day",
  PetBirthdaysAdoptionAnniversaries = "Pet Birthdays or Adoption Anniversaries",
  BridalShowers = "Bridal Showers",
  DivorceParties = "Divorce Parties",
  SobrietyAnniversaries = "Sobriety Anniversaries",
  SummerSolsticeCelebrations = "Summer Solstice Celebrations",
  SpringEquinoxCelebrations = "Spring Equinox Celebrations",
  SuperBowlParties = "Super Bowl Parties",
  OlympicsParties = "Olympics Parties",
  VideoGameLaunchParties = "Video Game Launch Parties",
  CraftOrHobbyClubs = "Craft or Hobby Clubs",
  GardenParties = "Garden Parties",
  SubscriberCountMilestone = "Reaching a Subscriber Count on YouTube/Twitch",
  Other = "Other",
}

export enum EDomainRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

export type MetaType = "ROLE" | "DOMAIN" | "USER" | "CATEGORY" | "CELEBRATION";

interface IExtra {
  name: string;
  value: Record<string, string>;
}

interface IMetadata {
  type: MetaType;
  value: string;
  parent?: IMetadata;
  extras?: IExtra[];
}

const MetadataJson: IMetadata[] = [
    // CATEGORIES
  {
    type: "CATEGORY",
    value: "CAKES",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Bakeries,
    },
  },
  {
    type: "CATEGORY",
    value: "PASTRIES",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Bakeries,
    },
  },
  {
    type: "CATEGORY",
    value: "PIZZA",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Bakeries,
    },
  },
  {
    type: "CATEGORY",
    value: "MACHINE LEARNING",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Blog,
    },
  },
  {
    type: "CATEGORY",
    value: "ARTIFICIAL INTELLIGENCE",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Blog,
    },
  },
  {
    type: "CATEGORY",
    value: "ENGINEERING",
    parent: {
      type: "DOMAIN",
      value: EDomainType.Blog,
    },
  },
  {
    type: "CATEGORY",
    value: "Class 1",
    parent: {
      type: "DOMAIN",
      value: EDomainType.EdTech,
    },
  },
  {
    type: "CATEGORY",
    value: "Class 2",
    parent: {
      type: "DOMAIN",
      value: EDomainType.EdTech,
    },
  },
  {
    type: "CATEGORY",
    value: "Class 3",
    parent: {
      type: "DOMAIN",
      value: EDomainType.EdTech,
    },
  },
];


function transformer() {
  const mapped1: IMetadata[] = loopEnum(Celebrations).map((value) =>
      mapValueToType(value, "CELEBRATION")
  );
  const mapped2: IMetadata[] = loopEnum(EDomainType).map((value) =>
      mapValueToType(value, "DOMAIN")
  );

  const mapped3: IMetadata[] = loopEnum(EDomainRole).map((value) =>
      mapValueToType(value, "ROLE")
  );
  return MetadataJson.concat(mapped1).concat(mapped2).concat(mapped3);
}

export default async function dbLoad() {
  console.log("Loading started");
  const concat = transformer();

  for (const value of concat) {
    await genericMetaLoader(value);
  }
}

async function genericMetaLoader(metadata: IMetadata) {
  const { type, value, parent, extras } = metadata;
  if (parent) {
    const parentMetadata = await Metadata.findOne({
      type: parent?.type,
      value: parent?.value,
    });

    const exists = await Metadata.exists({
      type,
      value,
      parent: parentMetadata?._id,
    });

    if (!exists) {
      await Metadata.create({
        type,
        value,
        parent: parentMetadata?._id,
        extras,
      });
    }
  } else {
    const exists = await Metadata.exists({
      type,
      value,
    });

    if (!exists) {
      await Metadata.create({
        type,
        value,
        extras,
      });
    }
  }
}
