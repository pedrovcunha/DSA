namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/two-sum/description/
/// </summary>
public static class TwoSum
{
    public static int[] Execute(int[] nums, int target)
    {
        // key = numbers to be complemented, value = index(es in case of repeated values)
        var complements = new Dictionary<int, List<int>>();

        for (int i = 0; i < nums.Length; i++)
        {   
            var currentValue = nums[i];
            var complement = target - currentValue;
            var complementExists = complements.ContainsKey(complement);
            if (complementExists)
            {
                return [complements[complement][0], i];
            }

            if (!complements.ContainsKey(currentValue)) complements[currentValue] = [i];
            else complements[currentValue].Add(i);

        }

        return [];
    }
}