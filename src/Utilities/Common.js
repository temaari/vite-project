import { EventsEnum, KeyEnum } from "./Enums";

export const isSubmitable = (target) => {
    return target.type === EventsEnum.Click || target.key === KeyEnum.Enter;
};

export const isValidEmailAddress = (email) => {
    if (!email || !email.includes('@')) return false;

    const fullEmailAddress = email.split('@');
    if (fullEmailAddress.length > 2) return false;

    const domain = fullEmailAddress[1];
    if (!domain.includes('.')) return false;

    const provider = domain.split('.');

    return provider[0] !== ''
};