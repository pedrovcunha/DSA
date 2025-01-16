using System.Diagnostics;
using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class TopKFrequentElementsTests
{
    [Theory]
    [InlineData(new int[] { 1,1,1,2,2,3 }, 2,new int[]{1, 2})]
    [InlineData(new int[] { 1 }, 1, new int[]{ 1 })]
    [InlineData(new int[] { -1, -1 }, 1, new int[]{ -1 })]
    public void Should_ReturnkFrequent_WhenValidInput(int[] input, int kElements, int[] expected)
    {
        // Arrange & Act
        var result = TopKFrequentElements.Execute(input, kElements);

        // Assert
        Assert.Equal(expected, result);
    }
    
    [Fact]
    public void Should_ExecuteWith20ms_WhenInvoked()
    {
        // Arrange
        var input = new int[] { 1, 1, 1, 2, 2, 3 };
        const int k = 2;
        
        // Act
        var stopwatch = Stopwatch.StartNew();
        var result = TopKFrequentElements.Execute(input, k);
        stopwatch.Stop();
        
        // Assert
        var elapsedMs = stopwatch.ElapsedMilliseconds;
        Assert.True(elapsedMs <= 20, $"Execution time was too long: {elapsedMs} ms");
    }
}