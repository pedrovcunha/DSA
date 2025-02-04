using Presentation.LinkedList;

namespace Tests.LinkedList;

public class ReverseLinkedList2Tests
{
    [Theory]
    [MemberData(nameof(TestData))]
    public void Should_ReverseList_WhenBoundariesAreSet(LNode head, int left, int right, int[] expected)
    {
        // Arrange & Act
        var result = ReverseLinkedList2.Execute(head, left, right);
        var arrayResult = ReverseLinkedList2.GetArrayResult(result).ToArray();

        // Assert
        Assert.Equal(expected, arrayResult);
    }

    public static IEnumerable<object[]> TestData()
    {
        yield return [
            new LNode(1,
                new LNode(2,
                    new LNode(3,
                        new LNode(4,
                            new LNode(5)
                        )
                    )
                )
            ),
            2,
            4,
            new int[]{1, 4, 3, 2, 5}
        ];
        
        yield return [
            new LNode(5),
            1,
            1,
            new int[]{5}
        ];
        
        yield return [
            new LNode(5,
                new LNode(3)),
            1,
            2,
            new int[]{3, 5}
        ];
        
        yield return [
            new LNode(1,
                new LNode(2,
                    new LNode(3)
                )
            ),
            3,
            3,
            new int[]{1, 2, 3}
        ];
    }
}
