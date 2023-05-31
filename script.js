function threeSum(arr, target) {
// write your code here
	arr(sort(a,b) => a-b);
	let closestsum = infinity;
	for(let i=0;i<arr.length;i++)
		{
			let left = i+1;
			let right = arr.length-1;
			while (left<right)
				{
					let sum = arr[i] +arr[left]+arr[right];
					if(Math.abs(sum-target)<Math.abs(closestsum-target))
					{
						closestsum = sum;
					}
					if(sum<target)
					{
						left++;
					}
					else
					{
						right--;
					}
				}
		}
  return closestsum;
}

module.exports = threeSum;
