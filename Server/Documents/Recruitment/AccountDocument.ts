import * as mongoose from "mongoose";
import { IRecruitChallenge } from "./ChallengeDocument";

export interface INewbieAccount extends mongoose.Document {
    uid: string;
    password: string;
    sNum: string;
    name: string;
    email: string;
    emailAuthed: boolean;   // true if email is authorized via mailauth.
    phoneNum: string;
    resume: string;
    solved: Array<IRecruitChallenge['_id']>;
    created: Date;
}

export const NewbieAccountSchema = new mongoose.Schema({
    uid: { type: String, required: true, index: 'hashed', unique: true },
    password: { type: String, required: true },
    sNum: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    emailAuthed: { type: Boolean },
    phoneNum: { type: String, required: true },
    resume: { type: String },
    solved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RecruitChallenge', required: true }],
    created: { type: Date },
}, { collection: 'NewbieAccountDocument' });
