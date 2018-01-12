describe('Merge Sort', function(){
  // beforeAll(function() {
  //   spyOn(window, 'swap').and.callThrough();
    it('is a function', function() {
      expect(typeof mergeSort).toBe('function');
    });
    it('sorts an unsorted array', function(){
      expect(mergeSort([7,5,2,9,8])).toEqual([2,5,7,8,9]);
    });
    it('sorts a shorter array', function(){
      expect(mergeSort([200,150])).toEqual([150,200]);
    });

    it('sorts an array of 1', function(){
      expect(mergeSort([1])).toEqual([1]);
    });

    it('sorts an array with negative numbers',function(){
      expect(mergeSort([5, -1, -10, 0, 7])).toEqual([-10, -1, 0, 5, 7]);
    });
    it('can take a sorted array and return the same array and not alter it',function(){
      expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('SPLIT', function(){
    // beforeAll(function() {
    //   spyOn(window, 'swap').and.callThrough();
    it('is a function', function() {
      expect(typeof split).toBe('function');
    });




    });

    describe('MERGE', function(){
      // beforeAll(function() {
      //   spyOn(window, 'swap').and.callThrough();
      it('is a function', function() {
        expect(typeof merge).toBe('function');
      });
      it('merges two sorted arrays', function(){
        expect(merge([1,4,7], [2,6,9])).toEqual([1,2,4,6,7,9]);
      });
      it('merges arrays of a different length',function(){
        expect(merge([5], [1,2,3,4,6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
      })


      });
