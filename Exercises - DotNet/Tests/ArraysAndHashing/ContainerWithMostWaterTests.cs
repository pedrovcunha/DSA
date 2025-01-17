using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class ContainerWithMostWaterTests
{
    [Theory]
    [InlineData(new int[] { 1,8,6,2,5,4,8,3,7 }, 49)]
    [InlineData(new int[] { 1, 1 }, 1)]
    [InlineData(new int[] { 8,7,2,1 }, 7)]
    public void Should_FindMaxArea_WhenValidInput(int[] input, int expected)
    {
        // Arrange & Act
        var result = ContainerWithMostWater.Execute(input);

        // Assert
        Assert.Equal(expected, result);
    }
}