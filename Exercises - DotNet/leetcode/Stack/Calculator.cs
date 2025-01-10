namespace Presentation.Stack;

/// <summary>
/// Calculator
/// Input: "2+3"      Output: 5
/// Input: "2+3*4"    Output: 14    // not 20, respecting operator precedence
/// Input: "8-5*2"    Output: -2    // not 6, respecting operator precedence
/// Input: "8/2*3"    Output: 12    // left to right for same precedence
/// </summary>
public static class Calculator
{
    public static int Execute(string args)
    {
        if (args is null || string.IsNullOrWhiteSpace(args)) return 0;

        var stack = new Stack<int>();
        var numberString = "";
        var sign = '+';

        for (var i = 0; i < args.Length; i++)
        {
            var character = args[i];
            var isDigit = char.IsDigit(args[i]);
            if (isDigit) numberString += (int) char.GetNumericValue(character);

            if (!isDigit || i == args.Length - 1)
            {
                var num = int.Parse(numberString);
                switch (sign)
                {
                    case '+': stack.Push(num); break;
                    case '-': stack.Push(-num); break;
                    case '*': stack.Push(stack.Pop() * num); break;
                    case '/': stack.Push(stack.Pop() / num); break;
                    default: throw new InvalidOperationException("Character not recognized");
                }

                // Reset
                numberString = string.Empty;
                sign = character;
            }
        }

        var result = 0;
        while(stack.Count > 0)
        {
            result += stack.Pop();
        }

        return result;
    }
}