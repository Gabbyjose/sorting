
describe('Bubble Sort', function(){
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  beforeEach(function(){

  })

  it('it checks the type of Bubble Sort', function(){
    expect(typeof bubbleSort).toBe('function');
  });

  it('checks the amount of swaps', function(){
    bubbleSort([1, 2, 3, 4]);
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual( [] );
  });

  it('sorts an unsorted array', function(){
    expect(bubbleSort([7,5,2,9,8])).toEqual([2,5,7,8,9]);
  });

  it('sorts a shorter array', function(){
    expect(bubbleSort([200,150])).toEqual([150,200]);
  });

  it('sorts an array of 1', function(){
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('sorts an array with negative numbers',function(){
    expect(bubbleSort([5, -1, -10, 0, 7])).toEqual([-10, -1, 0, 5, 7]);
  });
  it('can take a sorted array and return the same array and not alter it',function(){
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });



});

describe('swap', function(){
  it('it checks to see if swap is a function', function(){
    expect(typeof swap).toBe('function');
  });
});
