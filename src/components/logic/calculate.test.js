import calculate from './calculate';

describe('Calculate Function Test', () => {
  const Obj = { total: 2, next: 2, operation: '-' };
  let result = {};
  it('when AC is selected, it should be null', () => {
    result = calculate(Obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('First non AC Button Pressed', () => {
    result = calculate(result, '1');
    expect(result).toEqual({ next: '1', total: null });
  });

  it('Operation Pressed After First Number', () => {
    result = calculate(result, '+');
    expect(result).toEqual({ total: '1', next: null, operation: '+' });
  });

  it('Number After Operation', () => {
    result = calculate(result, '2');
    expect(result).toEqual({ total: '1', next: '2', operation: '+' });
  });

  it('Number After Number', () => {
    result = calculate(result, '7');
    expect(result).toEqual({ total: '1', next: '27', operation: '+' });
  });

  it('Equal Button Pressed.', () => {
    result = calculate(result, '=');
    expect(result).toEqual({ total: '28', next: null, operation: null });
  });
});
