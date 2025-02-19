using System.Text;

namespace Presentation.Stack;

/// <summary>
/// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/// </summary>
public class MinimumRemoveToMakeValidParentheses
{
    public string MinRemoveToMakeValid(string s)
    {
        if (string.IsNullOrWhiteSpace(s)) return s;

        var openStack = new Stack<int>();
        var closeStack = new Stack<int>();
        for (var i = 0; i < s.Length; i++)
        {
            switch (s[i])
            {
                case '(':
                    openStack.Push(i);
                    break;
                case ')':
                    if (openStack.Count > 0) openStack.Pop();
                    else closeStack.Push(i);
                    break;
            }
        }

        s = openStack.Aggregate(s, (current, index) => current.Remove(index, 1));
        foreach (var index in closeStack)
        {
            s = s.Remove(index, 1);
        }
        return s;
    }

    public string Execute(string s)
    {
        var res = s.Select(c => c.ToString()).ToList();
        var stack = new Stack<int>();

        for (var i = 0; i < res.Count; i++)
        {
            switch (res[i])
            {
                case "(":
                    stack.Push(i);
                    break;
                case ")" when stack.Count > 0:
                    stack.Pop();
                    break;
                case ")":
                    res[i] = "";
                    break;
            }
        }

        while (stack.Count > 0)
        {
            var index = stack.Pop();
            res[index] = "";
        }

        return string.Join("",res);
    }
}