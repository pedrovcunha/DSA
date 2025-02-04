namespace Presentation.LinkedList;

public class DlNode {
    public int val;
    public DlNode prev;
    public DlNode next;
    public DlNode child;

    public DlNode(int val, DlNode prev = null, DlNode next = null, DlNode child = null)
    {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

/// <summary>
/// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
/// Time: O(n)
/// Space: O(1)
/// </summary>
public static class FlattenMultilevelDoublyLinkedList
{
    public static DlNode Execute(DlNode head)
    {
        // if (head?.next == null) return head;
        
        var currentNode = head;
        while (currentNode?.next != null || currentNode?.child != null)
        {
            if (currentNode.child != null)
            {
                var childHead = currentNode.child;
                var childTail = TraverseToLast(childHead);

                var holdingPoint = currentNode.next;
                currentNode.next = childHead;
                childHead.prev = currentNode;
                
                childTail.next = holdingPoint;
                if (holdingPoint is not null) holdingPoint.prev = childTail;

                currentNode.child = null;
            }
            
            currentNode = currentNode.next;
        }

        return head;
    }
    
    private static DlNode TraverseToLast(DlNode head)
    {
        var currentNode = head;
        while (currentNode.next != null) currentNode = currentNode.next;
        
        return currentNode;
    }
    
    public static List<int> GetArrayResult(DlNode head)
    {
        var result = new List<int>();
        var currentNode = head;
        while (currentNode is not null)
        {
            result.Add(currentNode.val);
            currentNode = currentNode.next;
        }

        return result;
    }
}