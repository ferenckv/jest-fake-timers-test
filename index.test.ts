/**
 * @jest-environment <rootDir>/environment.ts
 */

jest.useFakeTimers({
    advanceTimers: true,
    now: new Date("2023-01-01").getTime(),
});

describe("A test", () => {
    it("Should fail", () => {
        expect(global.dater.getDate().getTime()).toEqual(new Date("2023-01-01").getTime())
    })
})