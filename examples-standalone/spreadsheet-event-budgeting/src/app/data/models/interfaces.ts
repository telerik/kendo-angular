export interface TicketPrices {
  fullPackage: number;
  workshopFirstDay: number;
  workshopSecondDay: number;
  talksOnly: number;
  onlineTickets: number;
}

export interface SpeakerProfile {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  companyName: string;
  linkedinProfile: string;
  speakerType: string;
  suggestedTopics: string;
  suggestedDescription: string;
}
