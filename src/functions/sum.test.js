import sum from './sum';

describe('Test sum function', () => {
    it('Should add function arguments', () => {
        const a = [1, 0, -0.75, -1000000];
        const b = [5, 99, 0.25, 1000000];
        const expectedSums = [6, 99, -0.5, 0];

        const returnedSums = a.map((num, index) => {
            return sum(num, b[index]);
        });

        const sumsAreCorrect = expectedSums.every((sum, index) => {
            return sum === returnedSums[index];
        });

        expect(sumsAreCorrect).toBeTruthy();
    });
});
