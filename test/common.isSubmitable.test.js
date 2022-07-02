import { isSubmitable } from '../src/Utilities/Common'
import { EventsEnum, KeyEnum } from "../src/Utilities/Enums"

describe('test isSubmitable from common.js', () => {
    test('user keys in k should return false', () => {
        const target = { key: 'k' }
        expect(isSubmitable(target)).toBeFalsy()
    })

    test('user keys in enter should return true', () => {
        const target = { key: KeyEnum.Enter }
        expect(isSubmitable(target)).toBeTruthy()
    })

    test('user clicks submit should return true', () => {
        const target = { type: EventsEnum.Click }
        expect(isSubmitable(target)).toBeTruthy()
    })
})