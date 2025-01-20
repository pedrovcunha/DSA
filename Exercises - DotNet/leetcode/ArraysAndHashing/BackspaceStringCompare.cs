namespace Presentation.ArraysAndHashing;

public static class BackspaceStringCompare
{

    /// <summary>
    /// Time complexity O(n)
    /// Space complexity O(1)
    /// </summary>
    /// <param name="s"></param>
    /// <param name="t"></param>
    /// <returns></returns>
    public static bool Execute(string s, string t)
    {
        var p1 = s.Length - 1; // Pointer 1 for sting s
        var p2 = t.Length - 1; // Pointer 2 for sting t

        while (p1 >= 0 || p2 >= 0)
        {
            if (s[p1] == '#' || t[p2] == '#')
            {
                if (s[p1] == '#')
                {
                    var backCount = 2;
                    while (backCount > 0 && p1 >= 0)
                    {
                        p1--;
                        backCount--;
                        if (p1 >= 0 && s[p1] == '#') backCount += 2;
                    }
                }
                if (t[p2] == '#')
                {
                    var backCount = 2;
                    while (backCount > 0 && p2 >= 1)
                    {
                        p2--;
                        backCount--;
                        if (s[p2] == '#' && p2 >= 1) backCount += 2;
                    }
                }
            }
            else
            {
                if (p1 >= 0
                    && p2 >= 0
                    && s[p1] != t[p2]
                    ) return false;
                
                p1--;
                p2--;
            }
        }

        return true;
    }
    /// <summary>
    /// Time complexity O(n)
    /// Space complexity O(n)
    /// </summary>
    /// <param name="s"></param>
    /// <param name="t"></param>
    /// <returns></returns>
    public static bool Execute1(string s, string t)
    {
        var arr1 = BuildString(s); // O(s)
        var arr2 = BuildString(t); // O(t)

        if (arr1.Count != arr2.Count) return false;

        var count = 0;
        while (count < arr1.Count)
        {
            if (arr1[count] != arr2[count]) return false;
            count++;
        }

        return true;
    }

    private static List<char> BuildString(string s)
    {
        var arr = new List<char>();
        foreach (var t in s)
        {
            if (t != '#') arr.Add(t);
            else if (arr.Count > 0) arr.RemoveAt(arr.Count - 1);
        }
        return arr;
    }
}