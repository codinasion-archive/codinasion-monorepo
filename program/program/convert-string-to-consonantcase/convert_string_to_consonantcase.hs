import Data.Char (toUpper, toLower)

consonantCase :: String -> String
consonantCase = map (\c -> if isConsonant c then toUpper c else toLower c)

isConsonant :: Char -> Bool
isConsonant c = c `elem` "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

main :: IO ()
main = do
  putStrLn "Enter a string:"
  userInput <- getLine
  putStrLn $ "Input: " ++ userInput
  putStrLn $ "Output: " ++ consonantCase userInput
