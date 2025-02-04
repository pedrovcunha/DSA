using Presentation.Stack;

namespace Tests.Stack;

public class MinimumRemoveToMakeValidParenthesesTests
{
    [Theory]
    [MemberData(nameof(TestCases))]
    public void Should_RemoveInvalidPharenteses_When_Necessary(string s, string excepcted)
    {
        // Arrange
        var validParentheses = new MinimumRemoveToMakeValidParentheses();
        
        // Act
        var isValid = validParentheses.Execute(s);

        // Assert
        Assert.Equal(isValid, excepcted);
    }

    public static IEnumerable<object[]> TestCases()
    {
        yield return ["lee(t(c)o)de)", "lee(t(c)o)de"];
        yield return ["a)b(c)d", "ab(c)d"];
        yield return ["))((", ""];
        yield return ["abc(d)", "abc(d)"];
        yield return ["(ab(c)d", "ab(c)d"];
    }
}