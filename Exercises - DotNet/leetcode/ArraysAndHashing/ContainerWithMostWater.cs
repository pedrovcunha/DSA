namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/container-with-most-water/
/// </summary>
public static class ContainerWithMostWater
{
    /// <summary>
    /// area = min(a,b) * (b_index - a_index)
    /// Note that when using two pointers, we note that the thing that affect the area size is the minimal
    /// value between them both. Meaning if a is lesser than b progress a further ahead for the next index.
    /// <para>Note the pointers should not cross each other</para>
    /// </summary>
    /// <param name="height"></param>
    /// <returns></returns>
    public static int Execute(int[] height)
    {
        var maxArea = 0;
        var p1 = 0; // Pointer 1
        var p2 = height.Length - 1; // Pointer 2

        while (p1 < p2)
        {
            var h = Math.Min(height[p1], height[p2]);
            var width = p2 - p1;
            var area = h * width;
            maxArea = Math.Max(maxArea, area);
            
            if (height[p1] <= height[p2]) p1++;
            else p2--;
        }

        return maxArea;
    }
}