using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class ContainsDuplicateTests
{
    [Theory]
    [InlineData(new int[] { 1, 2, 3, 1 }, true)]
    [InlineData(new int[] { 1, 2, 3, 4 }, false)]
    [InlineData(new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 }, true)]
    public void Should_Sum_WhenValuesAddedOrSubtracted(int[] input, bool expected)
    {
        // Arrange & Act
        var result = ContainsDuplicate.Execute(input);

        // Assert
        Assert.Equal(expected, result);
    }
}

