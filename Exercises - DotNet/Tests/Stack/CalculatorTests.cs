using Presentation.Stack;

namespace Tests.Stack;

public class CalculatorTests
{
    [Theory]
    [InlineData("1+2+3", 6)]
    [InlineData("50+66+89", 205)]
    [InlineData("50-15+5", 40)]
    public void Should_Sum_WhenValuesAddedOrSubtracted(string input, int expected)
    {
        // Arrange
        // Act
        var result = Calculator.Execute(input);
        
        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [MemberData(nameof(TestData))]
    public void Should_CalculateCorrectly_WhenManyOperationsAreExecuted(string input, int expected)
    {
        // Arrange
        // Act
        var result = Calculator.Execute(input);
        
        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Should_ThrowException_WhenInputHasInvalidOperator()
    {
        // Arrange
        var input = "1>2";
        
        // Act & Assert
        var exception = Assert.Throws<InvalidOperationException>(() => Calculator.Execute(input));
        Assert.Equal("Character not recognized", exception.Message);
        
    }

    public static IEnumerable<object[]> TestData()
    {
        yield return new object[] { "", 0 };
        yield return new object[] { " ", 0 };
        yield return new object[] { null, 0 };
        yield return new object[] { "2+3", 5 };
        yield return new object[] { "2+3*4", 14 };
        yield return new object[] { "8-5*2", -2 };
        yield return new object[] { "8/2*3", 12 };
    }
}
