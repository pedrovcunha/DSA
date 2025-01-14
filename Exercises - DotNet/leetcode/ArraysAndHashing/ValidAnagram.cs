namespace Presentation.ArraysAndHashing;

public static class ValidAnagram
{
    /// <summary>
    /// Time complexity O(n)
    /// Space complexity O(n)
    /// </summary>
    public static bool Execute(string a, string b)
    {
        if (a.Length != b.Length) return false;
        
        // key = letter, value = letter repetition
        var anagramLetters = new Dictionary<char, int>();
        foreach (var letter in a)
        {
            if (!anagramLetters.ContainsKey(letter)) anagramLetters.Add(letter, 1);
            else anagramLetters[letter]++;
        }

        foreach (var letter in b)
        {
            if (!anagramLetters.ContainsKey(letter)) return false;
            
            anagramLetters[letter]--;
            if (anagramLetters[letter] < 0) return false;
        }
        
        var isAnagram = anagramLetters.All(x => x.Value == 0);
        return isAnagram;
    }

    /// <summary>
    /// FASTER
    /// </summary>
    public static bool IsAnagram(string a, string b)
    {
        if (a.Length != b.Length) return false;

        var alphabet = new int[26]; // one slot for each letter of the alphabet.
        
        // Each character in a or b is mapped to an index in alphabet using a[i] - 'a'
        // e.g. 'a' - 'a' = 0, 'b' - 'a' = 1, ..., 'z' - 'a' = 25
        for (var i = 0; i < a.Length; i++) 
        {
            alphabet[a[i] - 'a']++;
        }

        for (var i = 0; i < b.Length; i++)
        {
            alphabet[b[i] - 'a']--;
            if (alphabet[b[i] - 'a'] < 0) return false;
        }

        foreach (var character in alphabet)
        {
            if (character != 0) return false;
        }
        
        return true;
    }
}