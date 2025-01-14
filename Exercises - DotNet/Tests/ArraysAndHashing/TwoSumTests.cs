using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class TwoSumTests
{
    [Theory]
    [InlineData(new int[]{2, 7, 11, 15}, 9, new int[]{0, 1})]
    [InlineData(new int[]{3, 2, 4}, 6, new int[]{1, 2})]
    [InlineData(new int[]{3, 3}, 6, new int[]{0, 1})]
    public void Should_ReturnCorrectResult_WhenValidInput(int[] numbers, int target, int[] expected)
    {
        // Arrange & Act
        var result = TwoSum.Execute(numbers, target);
        
        // Assert
        Assert.Equal(result, expected);
    }
}