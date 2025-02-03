using System.Text.RegularExpressions;

namespace leetcode.ArraysAndHashing;

/// <summary>
/// 3 main ways to solve palindrome problems or sub-problems
/// 1. "A man, a plan, a canal: Panama" -> "amanaplanacanalpanama", 
///     1.1. start with two-pointers one of the far-left and another on the far-right
///     1.2. compare the value of each pointer and move them at the same time until we get to the middle/center character 
///     if string has an odd size or to the two most centered characters if the string has a even size.
/// 2. "aaabaaa", start both pointers on the middle "b" or on te two-most centered if even size "aaabbaaa" on "bb" and move them both outwards while comparing its values.
/// 3. revert the string, start each pointer at the beginning of each string and move them forward at the same time.
///     3.1. "race a car" -> "raceacar" and "racaecar" (in reverse), start one pointer at 0 on string 1 and same for string 2
///     3.2. when pointers = 3, e =! a, not palindrome
/// </summary>
public static class Palindrome
{
    /// Given a string, determine if is a palindrome, considering only alphanumeric characters and ignoring case sensitivity
    public static bool PA(string s)
    {
        // g modifier: global. All matches (don't return on first match)
        // i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
        var regex = new Regex("/[^a - z0 - 9]/gi");
        var str = regex.Replace(s, "").ToLower();
        var isOdd = (str.Length % 2) > 0;
        var middle = (int) Math.Floor((decimal)str.Length / 2);

        var p1 = isOdd ? middle : middle - 1;
        var p2 = isOdd ? middle : middle;

        while (p1 >= 0 && p2 <= str.Length - 1)
        {
            if (str[p1] != str[p2]) return false;

            p1--;
            p2++;
        }

        return true;
    }

}