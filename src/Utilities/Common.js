import { EventsEnum, KeyEnum } from "./Enums";

export const isSubmitable = (target) => {
    return target.type === EventsEnum.Click || target.key === KeyEnum.Enter;
};

export const isValidEmailAddress = (email) => {
    return email.includes('@') && email.includes('.co')
};