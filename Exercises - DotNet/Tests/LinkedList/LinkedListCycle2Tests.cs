using Presentation.LinkedList;

namespace Tests.LinkedList;

public class LinkedListCycle2Tests
{
    [Theory]
    [MemberData(nameof(TestsData))]
    public void Should_DetectCycle_When_CycleIsPresent(LNode head, int expected)
    {
        // Arrange & Act
        var result = LinkedListCycle2.Execute(head);

        // Assert
        Assert.Equal(result.Value, expected);
    }

    public static IEnumerable<object[]> TestsData()
    {
        var n4 = new LNode(-4);
        var n3 = new LNode(0, n4);
        var n2 = new LNode(2, n3);
        var n1 = new LNode(3, n2);
        n4.Next = n2;
        yield return [
            n1,
            2
        ];
    }
}