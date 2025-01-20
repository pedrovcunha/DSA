using System.Diagnostics;
using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class TrappingRainWaterTests
{
    // internal class TrappingRainWaterBenchmark
    // {
    //     [Params(new int[] { 0,1,0,2,1,0,1,3,2,1,2,1}, new int[] { 4,2,0,3,2,5 })]
    //     public int[] height;
    //
    //     [Benchmark]
    //     public int TestTrappingRainWater()
    //     {
    //         return TrappingRainWater.Execute(height);
    //     }
    // }
    
    [Theory]
    [InlineData(new int[] { 0,1,0,2,1,0,1,3,2,1,2,1 }, 6)]
    [InlineData(new int[] { 4,2,0,3,2,5 }, 9)]
    public void Should_CalculateTrappingRainWater_When_MultipleHeights(int[] heights, int expected)
    {
        // Arrange & Act
        var stopwatch = Stopwatch.StartNew();
        var result = TrappingRainWater.Execute(heights);
        stopwatch.Stop();
    
        // Assert
        var elapsedMs = stopwatch.ElapsedMilliseconds;
        Assert.Equal(expected, result);
        Assert.True(elapsedMs <= 10, $"Execution time was too long: {elapsedMs} ms");
    }
}