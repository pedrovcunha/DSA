using Presentation.ArraysAndHashing;

namespace Tests.ArraysAndHashing;

public class GroupAnagramsTests
{
    [Theory]
    [MemberData(nameof(TestData))]
    public void Should_GroupAllCorrectAnagrams_WhenValidInput(string[] input, List<List<string>> expected)
    {
        // Arrange & Act
        var result = GroupAnagrams.Execute(input);
        
        // Assert
        Assert.Equal(result.Count, expected.Count);
    }
    
    public static IEnumerable<object[]> TestData()
    {
        var expected = new List<List<string>>
        {
            new() { "bat" },
            new() { "nat", "tan" },
            new() { "ate", "eat", "tea" }
        };
        
        yield return
        [
            new[] { "eat", "tea", "tan", "ate", "nat", "bat" },
            expected
        ];
    }
}