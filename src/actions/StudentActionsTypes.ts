export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const STUDENTS_FAIL = "STUDENTS_FAIL";
export const STUDENTS_SUCCESS = "STUDENTS_SUCCESS";

export type Student = {
  _id: string;
  studentId: string;
  gender: string;
  nationality: string;
  motherTongue: string;
  passportNumber: string;
  lastName: string;
  firstName: string;
  dateOfBirth: number;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
  emergencyContact: {
    type: string;
    emergencyPhone: string;
  };
  programDetail: {
    location: string;
    school: string;
  };
  courseInformation: {
    name: string;
    startDate: number;
    weeksOfStudy: number;
  };
  airportTransfer: {
    arrivalDate: number;
    a_flightInformation: string;
    airportPickup: string;
    departureDate: number;
    d_flightInformation: string;
    airportDropoff: string;
  };
  accommodation: {
    type: string;
    specialRequest: string;
    weeks: number;
  };
  medicalInformation: {
    insuranceStatus: boolean;
    bookThroughSchool: boolean;
    allergiesStatus: boolean;
    policyNumber: string;
    listOfAllergies: string[];
  };
};

interface FetchStudent {
  type: typeof FETCH_STUDENTS;
}

interface StudentFail {
  type: typeof STUDENTS_FAIL;
}

interface StudentSuccess {
  type: typeof STUDENTS_SUCCESS;
  payload: Student[];
}

export type StudentDispatchTypes = FetchStudent | StudentFail | StudentSuccess;
