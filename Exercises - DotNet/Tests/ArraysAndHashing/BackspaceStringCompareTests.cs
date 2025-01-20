using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class BackspaceStringCompareTests
{
    [Theory]
    [InlineData("ab#z", "ab#z", true)]
    [InlineData("abc#d", "acc#c", false)]
    [InlineData("x#y#z#", "a#", true)]
    [InlineData("a###b", "b", true)]
    public void Should_CompareStrings_WhenBackspacingIsPartOfString(string s, string t, bool expected)
    {
        // Arrange & Act
        var result = BackspaceStringCompare.Execute1(s, t);

        // Assert
        Assert.Equal(expected, result);
    }
}