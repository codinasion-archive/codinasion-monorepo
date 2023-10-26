floydTriangle :: Int -> [[Int]]
floydTriangle n = take n $ iterate (\row -> zipWith (+) row [1..]) [1]

printFloydTriangle :: Int -> IO ()
printFloydTriangle n = mapM_ (putStrLn . unwords . map show) (floydTriangle n)

main :: IO ()
main = do
    putStrLn "Enter the number of rows for Floyd's triangle:"
    n <- readLn
    printFloydTriangle n