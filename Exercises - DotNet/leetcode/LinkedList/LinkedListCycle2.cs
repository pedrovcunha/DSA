namespace Presentation.LinkedList;

/// <summary>
/// https://leetcode.com/problems/linked-list-cycle-ii/
/// </summary>
public static class LinkedListCycle2
{
    /// <summary>
    /// Floyd's Algorithm
    /// Time: O(n)
    /// Space: O(1)
    /// </summary>
    /// <param name="head"></param>
    /// <returns></returns>
    public static LNode Execute(LNode head)
    {
        if (head == null) return head;
        
        var hare = head; // hare/rabbit
        var tortoise = head; // tortoise

        LNode meetingPoint = null;
        while (true)
        {
            hare = hare.Next;
            tortoise = tortoise.Next;
            
            // we found our tail
            if (hare?.Next == null)
            {
                meetingPoint = null;
                break;
            }

            hare = hare.Next; // Advance hare again so hare always goes 2x faster

            if (hare == tortoise)
            {
                meetingPoint = hare;
                break;
            }
            
        }

        if (meetingPoint is null) return null;

        var newP1 = head;
        var newP2 = meetingPoint;
        while (newP1 != newP2)
        {
            newP1 = newP1.Next;
            newP2 = newP2.Next;
        }
        
        return newP1;
    }
    
    /// time: O(n)
    /// space: O(n)
    public static LNode Execute1(LNode head)
    {
        var currentNode = head;
        var seenNodes = new HashSet<LNode>();

        while (currentNode != null)
        {
            if (seenNodes.Contains(currentNode)) return currentNode;
            
            seenNodes.Add(currentNode);
            currentNode = currentNode.Next;
        }
        
        return null;
    }
}