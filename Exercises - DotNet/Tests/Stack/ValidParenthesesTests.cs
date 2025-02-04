using Presentation.Stack;

namespace Tests.Stack;

public class ValidParenthesesTests
{
    [Theory]
    [MemberData(nameof(TestCases))]
    public void Should_ValidateParentheses_When_InputISValid(string s, bool excepcted)
    {
        // Arrange
        var validParentheses = new ValidParentheses();
        
        // Act
        var isValid = validParentheses.IsValid(s);

        // Assert
        Assert.Equal(isValid, excepcted);
    }

    public static IEnumerable<object[]> TestCases()
    {
        yield return ["()", true];
        yield return ["()[]{}", true];
        yield return ["(]", false];
        yield return ["([])", true];
    }
}