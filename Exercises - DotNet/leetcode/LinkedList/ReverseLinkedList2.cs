namespace Presentation.LinkedList;

public class LNode(int value, LNode next = null)
{
    public int Value { get; set; } = value;
    public LNode Next { get; set; } = next;
}

public static class ReverseLinkedList2
{
    public static LNode Execute(LNode head, int left, int right)
    {
        if (head is null || head.Next is null) return head;

        var leader = TraverseToNode(head, left - 1);

        var first = left == 1 ? leader : leader.Next;
        var second = first.Next;
        var tempHead = first; // last element of our sequence to be reversed
        
        var reverserCount = 0;
        var max = right - left;

        var tempTail = second;
        while (reverserCount < max)
        {
            var temp = second.Next;
            second.Next = first;
            first = second;
            second = temp;

            reverserCount++;
            tempTail = second;
        }

        // If left > 1, it means we should preserve the leader at the beginning so we can point the leader to the new sequence.
        // e.g. 1 - 2 - 3 - 4 - 5, where left is 2 and right is 4
        // result 1 -> 4 - 3 - 2 -> 5, "1" will be the preserved leader, so we can point 1 to the inverted sequence
        if (left > 1) leader.Next = first;
        else head = first;

        // Note first will be the last of the original sequence and first of the new sequence.
        // Considering the original sequence, if the right index is greater than our last element in "first",
        // it means we need to point our last element to the raimaining part of the sequence.
        // e.g. 1 - 2 - 3 - 4 - 5, where left is 2 and right is 4
        // result 1 -> 4 - 3 - 2 -> 5, we need to point "2" to "5".
        // Otherwise, it means the last element on the right is the last element of our reversing process and we can return the head as usual
        tempHead.Next = tempTail; // else the last element is the tail itself


        return head;

    }

    private static LNode TraverseToNode(LNode head, int index)
    {
        var currentNode = head;
        var count = 1;

        while (count < index)
        {
            currentNode = currentNode.Next;
            count++;
        }

        return currentNode;
    }

    public static List<int> GetArrayResult(LNode head)
    {
        var result = new List<int>();
        var currentNode = head;
        while (currentNode is not null)
        {
            result.Add(currentNode.Value);
            currentNode = currentNode.Next;
        }

        return result;
    }
}