namespace Presentation.ArraysAndHashing;

/// <summary>
/// Problem details": https://leetcode.com/problems/contains-duplicate/description/
/// O(n)
/// </summary>
public static class ContainsDuplicate
{
    public static bool Execute(int[] nums)
    {
        if (nums is null || nums.Length <= 1) return false;

        var hashmap = new Dictionary<int, int>();
        foreach (var number in nums)
        {
            if (hashmap.ContainsKey(number)) return true;

            hashmap.Add(number, 1);
        }

        return false;
    }
}