using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class ValidAnagramTests
{
    [Theory]
    [InlineData("anagram", "nagaram", true)]
    [InlineData("rat", "car",false)]
    public void Should_Sum_WhenValuesAddedOrSubtracted(string a, string b, bool expected)
    {
        // Arrange & Act
        var result = ValidAnagram.Execute(a, b);

        // Assert
        Assert.Equal(expected, result);
    }
}