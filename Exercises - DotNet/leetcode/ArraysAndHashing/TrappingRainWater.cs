namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/trapping-rain-water/
/// </summary>
public static class TrappingRainWater
{
    /// <summary>
    /// current water = min(maxBlockLeft, maxBlockRight) - currentHeight
    /// Time Complexity: O(n2)
    /// Space Complexity: O(1)
    /// </summary>
    public static int Execute(int[] height)
    {
        var totalWater = 0;
        for (int p = 0; p < height.Length; p++)
        {
            var leftP = p;
            var rightP = p;
            var maxLeft = 0;
            var maxRight = 0;

            while (leftP >= 0)
            {
                maxLeft = Math.Max(maxLeft, height[leftP]);
                leftP--;
            }

            while (rightP < height.Length)
            {
                maxRight = Math.Max(maxRight, height[rightP]);
                rightP++;
            }

            var currentWater = Math.Min(maxLeft, maxRight) - height[p];
            if (currentWater >= 0) totalWater += currentWater;
        }

        return totalWater;
    }
}