namespace Presentation.ArraysAndHashing;

/// <summary>
/// https://leetcode.com/problems/group-anagrams/description/
/// </summary>
public static class GroupAnagrams
{
    public static List<List<string>> Execute(string[] strs)
    {
        var groups = new Dictionary<string, List<string>>();
        
        for (int i = 0; i < strs.Length; i++)
        {
            // one slot for each letter of the alphabet.
            var alphabet = new int[26];
            for (int j = 0; j < strs[i].Length; j++) alphabet[strs[i][j] - 'a']++;

            var key = string.Join(',', alphabet);
            if (!groups.ContainsKey(key)) groups.Add(key, []);
            
            groups[key].Add(strs[i]);
        }

        return groups.Select(group => group.Value).ToList();
    }
    
    public static List<List<string>> Slow(string[] strs)
    {
        var anagramGroups = new Dictionary<string, List<string>>();

        for (int i = 0; i < strs.Length; i++)
        {
            var found = false;
            
            foreach (var key in anagramGroups.Keys)
            {
                if (ValidAnagram.IsAnagram(key, strs[i]))
                {
                    anagramGroups[key].Add(strs[i]);
                    found = true;
                }
            }
            
            if(!found) anagramGroups.Add(strs[i], [strs[i]]);
        }

        var result = new List<List<string>>();
        foreach (var group in anagramGroups)
        {
            result.Add(group.Value);
        }
        return result;
    }
}