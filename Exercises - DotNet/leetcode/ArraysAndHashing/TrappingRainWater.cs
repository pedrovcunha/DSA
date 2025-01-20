using BenchmarkDotNet.Attributes;

namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/trapping-rain-water/
/// </summary>
public static class TrappingRainWater
{
    /// <summary>
    /// Optimized approach
    /// current water = min(maxBlockLeft, maxBlockRight) - currentHeight
    /// Time Complexity: O(n)
    /// Space Complexity: O(1)
    /// </summary>
    public static int Execute(int[] height)
    {
        var totalWater = 0;
        var p1 = 0; // Pointer 1 starts at the beginning
        var p2 = height.Length - 1; // Pointer 2 starts at the end
        
        var maxLeft = 0;
        var maxRight = 0;
        while (p1 < p2)
        {
            // the value we decide to operate on, is the lesser of the values min(maxBlockLeft, maxBlockRight)
            // this defines the level of the water
            var isP1Lower = height[p1] <= height[p2];
            
            // How to we decide if we calculate the water for P1 or update the maxLeft?
            // we know we need a wall on the left bigger than the current value (maxLeft > height[p1])
            // if so, we can calculate the water. If not, it means the wall on left is not high enough to hold any water on p1, 
            // so we try to update maxLeft and proceed with p1 to the next element
            if (isP1Lower)
            {
                if (height[p1] > maxLeft) maxLeft = height[p1];
                else totalWater += maxLeft - height[p1];
                p1++;
            }
            else
            {
                if (height[p2] > maxRight) maxRight = height[p2];
                else totalWater += maxRight - height[p2];
                p2--;
            }
        }

        return totalWater;
    }
    
    /// <summary>
    /// Brute force approach
    /// current water = min(maxBlockLeft, maxBlockRight) - currentHeight
    /// Time Complexity: O(n2)
    /// Space Complexity: O(1)
    /// </summary>
    public static int Execute1(int[] height)
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