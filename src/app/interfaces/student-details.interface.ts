import { Gender } from "../enums/gender.enum";


export interface IAddStudentDetails {
    name: string;
    dob: string;
    gender: Gender;
    email: string;
    address: string;
    subjects: String[];
    standard: string;
}
export interface IStudentDetails extends IAddStudentDetails {
    rollNumber: number;
}