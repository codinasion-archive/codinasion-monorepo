public float c2k(float celsius)
{
    if (celsius < -273.15)
    {
        throw new InvalidOperationException("There is nothing under ABSOLUTE ZERO, my friend");
    }

    return celsius + 273.15;
}