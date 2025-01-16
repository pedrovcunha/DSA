namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/top-k-frequent-elements/description/
/// </summary>
public static class TopKFrequentElements
{
    /// <summary>
    /// Slow - implement quick sort
    /// </summary>
    /// <param name="nums"></param>
    /// <param name="k"></param>
    /// <returns></returns>
    public static int[] Execute(int[] nums, int k) 
    {
        var frequency = new Dictionary<int, int>(); // key - number, value count

        for (var i = 0; i < nums.Length; i++) {
            if (!frequency.ContainsKey(nums[i]))
            {
                frequency.Add(nums[i], 0);
            }

            frequency[nums[i]]++;
        }
        
        var maxKValues = frequency
            .OrderByDescending(f => f.Value)
            .Take(k)
            .Select(f => f.Key)
            .ToArray();
        
        return maxKValues;
    }
}