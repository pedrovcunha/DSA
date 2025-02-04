namespace Presentation.Stack;

/// <summary>
/// https://leetcode.com/problems/valid-parentheses/submissions/1530369312/
/// </summary>
public class ValidParentheses
{
    public bool IsValid(string s)
    {   
        var isEven = s.Length % 2 == 0;
        if (!isEven) return false;
        
        var stack = new Stack<char>();
        foreach (var c in s)
        {
            if (c is '(' or '{' or '[') stack.Push(c);
            else
            {
                if (stack.Count == 0) return false;
                
                var peek = stack.Peek();
                switch (peek)
                {
                    case '(' when c is ')':
                    case '{' when c is '}':
                    case '[' when c is ']':
                        stack.Pop();
                        break;
                        
                    default: return false;
                }
            }
        }

        return stack.Count == 0;
    }
}