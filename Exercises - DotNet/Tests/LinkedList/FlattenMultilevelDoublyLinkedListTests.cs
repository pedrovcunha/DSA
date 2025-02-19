using Presentation.LinkedList;

namespace Tests.LinkedList;

public class FlattenMultilevelDoublyLinkedListTests
{
    [Theory]
    [MemberData(nameof(TestData))]
    public void Should_FlattenMultilevel_WhenMultiplevelsPresent(DlNode head, int[] expected)
    {
        // Arrange & Act
        var result = FlattenMultilevelDoublyLinkedList.Execute(head);
        var arrayResult = FlattenMultilevelDoublyLinkedList.GetArrayResult(result).ToArray();

        // Assert
        Assert.Equal(expected, arrayResult);
    }

    public static IEnumerable<object[]> TestData()
    {
        var head = new DlNode(1);
        var node2 = new DlNode(2);
        head.next = node2;
        node2.prev = head;

        var child1 = new DlNode(3);
        head.child = child1;

        yield return [
            head,
            new int[]{1, 3, 2}
        ];

        var n1 = new DlNode(1);
        var n2 = new DlNode(2);
        var n3 = new DlNode(3);

        n1.child = n2;
        n2.child = n3;

        yield return
        [
            n1,
            new int[] { 1, 2, 3 }
        ];
    }
}